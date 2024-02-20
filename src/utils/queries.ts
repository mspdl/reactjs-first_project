import { useQuery } from "@tanstack/react-query";
import { getPostById, getPosts } from "./api";

export const usePosts = () => {
  const ONE_MINUTE = 60 * 1000;

  return useQuery({
    networkMode: "online",
    // networkMode: default = online
    // networkMode: always = always execute the function (recommended for projects without API)
    queryKey: ["posts"],
    queryFn: getPosts,
    staleTime: 5 * ONE_MINUTE,
    // slateTime: Infinity = the request will be always fresh, it'll never be slate 
  });
};

export const usePostById = (postId: number) =>
  useQuery({
    queryKey: ["posts", postId],
    queryFn: () => getPostById(postId),
  });
