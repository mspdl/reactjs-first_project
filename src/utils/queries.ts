import { postsInitialData } from "@/data/postsInitialData";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPostById, getPosts, getUsers } from "./api";
import { queryClient } from "./queryClient";

export const usePosts = (limit: number, start: number) => {
  return useQuery({
    networkMode: "online",
    // networkMode: default = online
    // networkMode: always = always execute the function (recommended for projects without API)
    queryKey: ["posts", { limit, start }],
    queryFn: () => getPosts(limit, start),
    // slateTime: Infinity = the request will be always fresh, it'll never be slate
    enabled: true, // default = true || false = disable this query function
    placeholderData: postsInitialData,
  });
};

export const usePostById = (postId: number) =>
  useQuery({
    queryKey: ["posts", postId],
    queryFn: () => getPostById(postId),
  });

export const useUsersPrefecth = () => {
  const queryClient = useQueryClient();
  queryClient.prefetchQuery({ queryKey: ["users"], queryFn: getUsers });
};

export const invalidatePosts = () => {
  queryClient.invalidateQueries({
    queryKey: ["posts"],
    exact: true
  });
};
