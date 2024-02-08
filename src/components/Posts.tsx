import { useEffect, useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const Posts = () => {
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const postsJsonResponse = await response.json();
      setPosts(postsJsonResponse.slice(0, 20));
    } catch (error) {
      console.log("Something's wrong");
    }
    setLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="max-w-5xl">
      
      <h1 className="text-3xl text-center pb-3">Post list</h1>

      {loading && <p className="text-center font-bold">loading...</p>}
      {hasError && <p className="text-center font-bold">ERROR on API</p>}
      {!loading && posts.length > 0 && (
        <ul>
          {posts.map((post) => (
            <li className="border border-gray-800 p-2 mb-2" key={post.id}>
              <h1 className="font-bold text-center">{post.title}</h1>
              <p className="text-justify">{post.body}</p>
            </li>
          ))}
        </ul>
      )}
      {!loading && posts.length <= 0 && "There's no posts to show"}
    </div>
  );
};
