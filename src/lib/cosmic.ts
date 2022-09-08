import Cosmic from "cosmicjs";
const api = Cosmic();

const BUCKET_SLUG = "modern-astro-blog-production";
const READ_KEY = "u9kPEjYVXGbxx9CfF54CGNoriogwXbfXW229yf30TZjxaQ2z46";

const bucket = api.bucket({
  slug: BUCKET_SLUG,
  read_key: READ_KEY,
});

export async function getAllPosts() {
  const params = {
    query: { type: "posts" },
    props: "title,slug,metadata",
    limit: 4,
    sort: "-created_at",
  };
  const data = await bucket.getObjects(params);
  return data.objects;
}

export async function getAllPostsWithSlug() {
  const params = {
    query: { type: "posts" },
    props: "title,slug,metadata,created_at",
  };
  const data = await bucket.getObjects(params);
  return data.objects;
}

export async function getPost(slug: string) {
  const singleObjectParams = {
    query: { slug: slug },
    props: "slug,title,metadata,created_at",
  };
  const data = await bucket
    .getObjects(singleObjectParams)
    .catch((error: unknown) => {
      if (error) {
        throw error;
      }
    });
  return {
    post: data?.objects[0],
  };
}

export async function getFeaturedPost() {
  const data = await bucket.objects
    .find({
      type: "featured-post",
      slug: "set-featured-post",
    })
    .props("metadata");
  return data.objects[0].metadata.post;
}
