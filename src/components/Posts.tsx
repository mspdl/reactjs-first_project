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

  const handleAddNewPost = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: `New post ${Math.trunc(Math.random() * 100) + 1}`,
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam sit facere doloribus similique suscipit, hic dolore aliquam. Voluptate, harum explicabo.",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const json = await response.json();
    console.log(json);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="max-w-5xl flex flex-col">
      <h1 className="text-3xl text-center pb-3">Post list</h1>

      <button
        onClick={handleAddNewPost}
        className="sticky top-3 text self-center bg-blue-700 p-2 mb-3 border border-white rounded-md text-white hover:bg-blue-900"
      >
        Add new post
      </button>

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
