import { Post } from "@/types/Post";
import { useMutation } from "@tanstack/react-query";
import { addPost } from "./api";
import { queryClient } from "./queryClient";

export const useAddPost = () => {
  return useMutation({
    mutationFn: addPost,
    onSuccess: (newPost) => {
      const posts = queryClient.getQueryData(["posts"]) as Post[];
      queryClient.setQueryData(["posts"], [newPost, ...posts]);
    },
  });
};
