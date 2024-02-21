import { Post } from "@/types/Post";
import { usePosts } from "@/utils/queries";
import { useState } from "react";

export const TanStack = () => {
  const [allowLoadPosts, setAllowLoadPosts] = useState(false);

  const posts = usePosts(allowLoadPosts);

  const handleLoadPosts = () => {
    setAllowLoadPosts(true);
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-white text-3xl text-center pt-5">Hello world</h1>

      {!allowLoadPosts && (
        <button
          onClick={handleLoadPosts}
          className="self-center border border-white p-2 bg-white rounded-md hover:bg-gray-300 font-bold"
        >
          Load posts
        </button>
      )}

      {posts.isLoading && <p>Loading...</p>}
      {posts.isFetching && <p>Fetching...</p>}
      {posts.data && (
        <ul>
          {posts.data.map((post: Post) => (
            <li
              key={post.id}
              className="border border-white my-2 p-2 rounded-md"
            >
              <h1 className="font-bold text-xl">{post.title}</h1>
              <p>{post.body}</p>
              <p className="text-sm italic text-end">{`Post number ${post.id} by user id ${post.userId}`}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
