export const getPostsQuery = `
  query GetPosts($first: Int!, $after: String, $order: PostsOrder) {
    posts(first: $first, after: $after, order: $order) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          id
          name
          tagline
          description
          votesCount
          commentsCount
          createdAt
          thumbnail {
            url
          }
          website
          user {
            name
            profileImage
          }
        }
      }
    }
  }
`;