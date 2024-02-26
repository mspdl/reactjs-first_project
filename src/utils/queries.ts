import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getPostById, getPosts } from "./api";

export const usePosts = (limit: number, start: number) => {
  return useQuery({
    networkMode: "online",
    // networkMode: default = online
    // networkMode: always = always execute the function (recommended for projects without API)
    queryKey: ["posts", { limit, start }],
    queryFn: () => getPosts(limit, start),
    // slateTime: Infinity = the request will be always fresh, it'll never be slate
    enabled: true, // default = true || false = disable this query function
    placeholderData: keepPreviousData,
  });
};

export const usePostById = (postId: number) =>
  useQuery({
    queryKey: ["posts", postId],
    queryFn: () => getPostById(postId),
  });
