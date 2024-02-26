import { useQuery } from "@tanstack/react-query";
import { getPostById, getPosts } from "./api";

export const usePosts = () => {
  return useQuery({
    networkMode: "online",
    // networkMode: default = online
    // networkMode: always = always execute the function (recommended for projects without API)
    queryKey: ["posts"],
    queryFn: getPosts,
    // slateTime: Infinity = the request will be always fresh, it'll never be slate
    enabled: true, // default = true || false = disable this query function
  });
};

export const usePostById = (postId: number) =>
  useQuery({
    queryKey: ["posts", postId],
    queryFn: () => getPostById(postId),
  });
