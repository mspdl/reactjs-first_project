import { Post } from "@/types/Post";
import { usePosts } from "@/utils/queries";

export const TanStack = () => {
  const posts = usePosts();

  return (
    <div className="">
      <h1 className="text-white text-3xl text-center pt-5">Hello world</h1>

      {posts.isLoading && "Loading..."}
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
