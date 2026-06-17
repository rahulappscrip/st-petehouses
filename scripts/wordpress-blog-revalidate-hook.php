<?php
/**
 * Add this block to stpete-leads.php (same plugin as lead submissions).
 * Reuses STPETE_LEAD_API_SECRET — no new secrets or wp-config defines needed.
 *
 * Next.js must have WORDPRESS_LEAD_API_SECRET set to the same value.
 */

add_action('transition_post_status', function ($new_status, $old_status, $post) {
  if ($post->post_type !== 'post') {
    return;
  }

  if (!in_array($new_status, ['publish', 'trash', 'draft'], true)) {
    return;
  }

  wp_remote_post('https://st-petehouses.vercel.app/api/revalidate/blog', [
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
