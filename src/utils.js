import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN,
});

// Data Fetching
const getPosts = async () => {
  const response = await client.getEntries({
    content_type: "post",
  });

  return response.items;
};

const getPost = async (entryID) => {
  const response = await client.getEntry(entryID);

  return response;
};

const getShowcases = async () => {
  const response = await client.getEntries({
    content_type: "showcase",
  });

  return response.items;
};

const getShowcase = async (entryID) => {
  const response = await client.getEntry(entryID);

  return response;
};

const getAbout = async () => {
  const response = await client.getEntries({
    content_type: "aboutPage",
  });

  return response.items[0];
};

export { getPosts, getPost, getShowcases, getShowcase, getAbout };
