import { useQuery } from "@tanstack/react-query";
import { getPostById, getPosts } from "./api";

export const usePosts = () => {
  return useQuery({
    networkMode: "online",
      // default: online
      // always: always execute the function (recommended for projects without API)
    queryKey: ["posts"],
    queryFn: getPosts,
  });
};

export const usePostById = (postId: number) =>
  useQuery({
    queryKey: ["posts", postId],
    queryFn: () => getPostById(postId),
  });
