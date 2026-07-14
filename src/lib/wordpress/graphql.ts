import { isWordPressMediaUrl, toWordPressImageProxy, wordpressFetch } from "@/lib/wordpress/fetch";

export const WORDPRESS_GRAPHQL_URL =
  process.env.WORDPRESS_GRAPHQL_URL ??
  "https://wordpress-1628174-6490314.cloudwaysapps.com/graphql";

const POST_CORE_FIELDS = `
  id
  databaseId
  title
  slug
  date
  modified
  excerpt
  content
  isSticky
  featuredImage {
    node {
      sourceUrl
      altText
    }
  }
  categories {
    nodes {
      name
      slug
    }
  }
  tags {
    nodes {
      name
      slug
    }
  }
  author {
    node {
      databaseId
      slug
      name
      firstName
      lastName
      description
      avatar(size: 512) {
        url
      }
      authorRelated {
        authorCompany
      }
    }
  }
`;

const AUTHOR_CORE_FIELDS = `
  databaseId
  slug
  name
  firstName
  lastName
  description
  avatar(size: 512) {
    url
  }
  authorRelated {
    authorCompany
  }
`;

const POST_ACF_FIELDS = `
  blogPostFaq {
    faqItems {
      question
      answer
    }
  }
  blogPostCtaBanner {
    ctaHeading
    ctaHeadingItalic
  }
`;

const ALL_POSTS_QUERY = `
  query AllPosts($first: Int!) {
    posts(first: $first, where: { status: PUBLISH }) {
      nodes {
        ${POST_CORE_FIELDS}
      }
    }
  }
`;

const POST_BY_SLUG_QUERY = `
  query PostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      ${POST_CORE_FIELDS}
      ${POST_ACF_FIELDS}
    }
  }
`;

const USER_BY_SLUG_QUERY = `
  query UserBySlug($slug: ID!) {
    user(id: $slug, idType: SLUG) {
      ${AUTHOR_CORE_FIELDS}
    }
  }
`;

const POSTS_BY_AUTHOR_QUERY = `
  query PostsByAuthor($authorId: Int!, $first: Int!) {
    posts(first: $first, where: { status: PUBLISH, author: $authorId }) {
      nodes {
        ${POST_CORE_FIELDS}
      }
    }
  }
`;

type GraphQLResponse<T> = {
  data?: T;
  errors?: { message: string }[];
};

async function wordpressGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<T> {
  const response = await wordpressFetch(WORDPRESS_GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60, tags: ["wordpress-posts"] },
  });

  if (!response.ok) {
    throw new Error(`WordPress GraphQL request failed (${response.status})`);
  }

  const json = (await response.json()) as GraphQLResponse<T>;

  if (json.errors?.length) {
    throw new Error(json.errors.map((error) => error.message).join("; "));
  }

  if (!json.data) {
    throw new Error("WordPress GraphQL response did not include data");
  }

  return json.data;
}

export { isWordPressMediaUrl, toWordPressImageProxy };

export async function fetchWordPressPosts(first = 100): Promise<WordPressPost[]> {
  const data = await wordpressGraphQL<{ posts: { nodes: WordPressPost[] } }>(
    ALL_POSTS_QUERY,
    { first },
  );

  return data.posts.nodes;
}

export async function fetchWordPressPostBySlug(slug: string): Promise<WordPressPost | null> {
  const data = await wordpressGraphQL<{ post: WordPressPost | null }>(POST_BY_SLUG_QUERY, {
    slug,
  });

  return data.post ?? null;
}

export async function fetchWordPressUserBySlug(slug: string): Promise<WordPressAuthor | null> {
  const data = await wordpressGraphQL<{ user: WordPressAuthor | null }>(USER_BY_SLUG_QUERY, {
    slug,
  });

  return data.user ?? null;
}

export async function fetchWordPressPostsByAuthor(
  authorId: number,
  first = 100,
): Promise<WordPressPost[]> {
  const data = await wordpressGraphQL<{ posts: { nodes: WordPressPost[] } }>(
    POSTS_BY_AUTHOR_QUERY,
    { authorId, first },
  );

  return data.posts.nodes;
}

export async function fetchWordPressAuthorSlugs(): Promise<string[]> {
  const posts = await fetchWordPressPosts();
  const slugs = new Set<string>();

  for (const post of posts) {
    const slug = post.author.node.slug?.trim();
    if (slug) slugs.add(slug);
  }

  return [...slugs];
}

export type WordPressCategory = {
  name: string;
  slug: string;
};

export type WordPressTag = {
  name: string;
  slug: string;
};

export type WordPressAuthor = {
  databaseId: number;
  slug: string;
  name: string;
  firstName?: string | null;
  lastName?: string | null;
  description?: string | null;
  avatar?: {
    url?: string | null;
  } | null;
  authorRelated?: {
    authorCompany?: string | null;
  } | null;
};

export type WordPressFeaturedImage = {
  sourceUrl: string;
  altText?: string | null;
};

export type WordPressFaqItem = {
  question?: string | null;
  answer?: string | null;
};

export type WordPressCtaBanner = {
  ctaHeading?: string | null;
  ctaHeadingItalic?: string | null;
};

export type WordPressPost = {
  id: string;
  databaseId: number;
  title: string;
  slug: string;
  date: string;
  modified: string;
  excerpt: string;
  content: string;
  isSticky: boolean;
  featuredImage?: {
    node: WordPressFeaturedImage | null;
  } | null;
  categories: {
    nodes: WordPressCategory[];
  };
  tags: {
    nodes: WordPressTag[];
  };
  author: {
    node: WordPressAuthor;
  };
  blogPostFaq?: {
    faqItems?: WordPressFaqItem[] | null;
  } | null;
  blogPostCtaBanner?: WordPressCtaBanner | null;
};
