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
