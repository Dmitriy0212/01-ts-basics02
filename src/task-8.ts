import axios, { AxiosResponse } from "axios";

/**
 * Interface representing the structure of a Post from the API.
 */
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<Post[]> {
  const response: AxiosResponse<Post[]> = await axios.get<Post[]>(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return response.data;
}

fetchPosts().then((posts: Post[]) => {
  console.log(posts[0].title);
});
