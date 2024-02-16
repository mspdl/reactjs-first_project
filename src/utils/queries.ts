import { useQuery } from "@tanstack/react-query";
import { getPostById, getPosts } from "./api";

export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
};

export const usePostById = (postId: number) =>
  useQuery({
    queryKey: ["post"],
    queryFn: () => getPostById(postId),
  });
