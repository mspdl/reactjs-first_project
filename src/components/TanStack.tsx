import { Post } from "@/types/Post";
import { getPosts } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export const TanStack = () => {
  const query = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return (
    <div className="">
      <h1 className="text-white text-3xl text-center">Hello world</h1>

      {query.isLoading && "Loading..."}
      {query.data && (
        <ul>
          {query.data.map((post: Post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
