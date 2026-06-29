<?php
/**
 * Plugin Name: St Pete Lead Submissions
 * Description: Receives cash-offer form submissions from the Next.js site and notifies the site when blog posts change.
 * Version: 1.1.0
 */

if (!defined('ABSPATH')) {
  exit;
}

// Must match WORDPRESS_LEAD_API_SECRET in Next.js .env
define('STPETE_LEAD_API_SECRET', 'AhzdlgWKfxRXj4BmbEmhC2OU');

// Next.js site URL — use Vercel preview/staging until production domain is live.
define('STPETE_SITE_URL', 'https://st-petehouses.vercel.app');
define('STPETE_REVALIDATE_URL', STPETE_SITE_URL . '/api/revalidate/blog');

add_action('init', function () {
  register_post_type('lead_submission', [
    'labels' => [
      'name' => 'Lead Submissions',
      'singular_name' => 'Lead Submission',
      'menu_name' => 'Lead Submissions',
    ],
    'public' => false,
    'show_ui' => true,
    'show_in_menu' => true,
    'menu_icon' => 'dashicons-email-alt',
    'supports' => ['title'],
    'capability_type' => 'post',
    'map_meta_cap' => true,
  ]);
});

add_action('rest_api_init', function () {
  register_rest_route('stpete/v1', '/leads', [
    'methods' => 'POST',
    'callback' => 'stpete_save_lead_submission',
    'permission_callback' => '__return_true',
  ]);
});

function stpete_save_lead_submission(WP_REST_Request $request) {
  $secret = $request->get_header('x_stpete_lead_secret');
  if (!$secret || !hash_equals(STPETE_LEAD_API_SECRET, $secret)) {
    return new WP_REST_Response(['error' => 'Unauthorized'], 401);
  }

  $body = $request->get_json_params();
  $full_name = sanitize_text_field($body['full_name'] ?? '');
  $address = sanitize_text_field($body['property_address'] ?? '');
  $sell_reason = sanitize_text_field($body['sell_reason'] ?? '');
  $phone = sanitize_text_field($body['phone'] ?? '');
  $email = sanitize_email($body['email'] ?? '');
  $source_page = sanitize_text_field($body['source_page'] ?? '');

  if (!$full_name || !$address || !$sell_reason || !$phone) {
    return new WP_REST_Response(['error' => 'Missing required fields'], 400);
  }

  $post_id = wp_insert_post([
    'post_type' => 'lead_submission',
    'post_status' => 'publish',
    'post_title' => $full_name . ' — ' . $address,
  ], true);

  if (is_wp_error($post_id)) {
    return new WP_REST_Response(['error' => 'Could not save lead'], 500);
  }

  update_post_meta($post_id, 'full_name', $full_name);
  update_post_meta($post_id, 'property_address', $address);
  update_post_meta($post_id, 'sell_reason', $sell_reason);
  update_post_meta($post_id, 'phone', $phone);
  update_post_meta($post_id, 'email', $email);
  update_post_meta($post_id, 'source_page', $source_page);
  update_post_meta($post_id, 'submitted_at', current_time('mysql'));

  return new WP_REST_Response([
    'success' => true,
    'id' => $post_id,
  ], 201);
}

add_filter('manage_lead_submission_posts_columns', function ($columns) {
  return [
    'cb' => $columns['cb'],
    'title' => 'Lead',
    'phone' => 'Phone',
    'email' => 'Email',
    'sell_reason' => 'Sell reason',
    'source_page' => 'Source page',
    'date' => 'Date',
  ];
});

add_action('manage_lead_submission_posts_custom_column', function ($column, $post_id) {
  switch ($column) {
    case 'phone':
      echo esc_html(get_post_meta($post_id, 'phone', true));
      break;
    case 'email':
      echo esc_html(get_post_meta($post_id, 'email', true));
      break;
    case 'sell_reason':
      echo esc_html(get_post_meta($post_id, 'sell_reason', true));
      break;
    case 'source_page':
      echo esc_html(get_post_meta($post_id, 'source_page', true));
      break;
  }
}, 10, 2);

/**
 * Notify Next.js when a blog post is published, updated, trashed, or unpublished.
 * Uses the same STPETE_LEAD_API_SECRET as lead submissions.
 */
add_action('transition_post_status', function ($new_status, $old_status, $post) {
  if ($post->post_type !== 'post') {
    return;
  }

  if (!in_array($new_status, ['publish', 'trash', 'draft'], true)) {
    return;
  }

  if ($new_status === $old_status) {
    return;
  }

  wp_remote_post(STPETE_REVALIDATE_URL, [
    'timeout' => 15,
    'headers' => [
      'Content-Type' => 'application/json',
      'X-Revalidate-Secret' => STPETE_LEAD_API_SECRET,
    ],
    'body' => wp_json_encode([
      'slug' => $post->post_name,
      'status' => $new_status,
    ]),
  ]);
}, 10, 3);
