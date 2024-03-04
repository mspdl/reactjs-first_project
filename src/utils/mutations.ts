import { useMutation } from "@tanstack/react-query";
import { addPost } from "./api";
import { queryClient } from "./queryClient";

export const useAddPost = () => {
  return useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["/posts"],
      });
    },
  });
};
