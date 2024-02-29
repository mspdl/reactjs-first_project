import { Post } from "@/types/Post";
import { addPost } from "@/utils/api";
import { usePosts, useUsersPrefecth } from "@/utils/queries";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export const TanStack = () => {
  useUsersPrefecth();

  const postsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);

  const posts = usePosts(postsPerPage, currentPage * postsPerPage);

  const addMutation = useMutation({
    mutationFn: addPost,
  });

  const handlePreviousPage = () => {
    setCurrentPage(currentPage === 0 ? 0 : currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleNewPostButton = () => {
    addMutation.mutate({
      body: "beautyful body test",
      title: "title test",
      userId: 1,
    });
  };

  return (
    <div className="flex flex-col w-full">
      <div className="">
        <h1 className="text-white text-3xl text-center pt-5 pb-2">
          Posts Page
        </h1>

        <div className="p-3 my-3 border-white">
          <p className="font-bold text-center block">New post area</p>
          <p>{addMutation.isPending && "Inserting a new post"}</p>
          <p>{addMutation.isIdle && " new post is idle"}</p>
          <p>{addMutation.isSuccess && " new post is successfuly"}</p>
          <p className="cursor-pointer" onClick={() => addMutation.reset()}>
            Status of new post: {addMutation.status}
          </p>
          <button
            disabled={addMutation.isPending}
            onClick={handleNewPostButton}
          >
            Add new post
          </button>
        </div>

        <div className="border border-green-300 p-3">
          <div>Posts per pager: {postsPerPage}</div>
          <div>current page: {currentPage + 1}</div>
          <div className="inline-flex">
            <button
              disabled={currentPage === 0}
              onClick={handlePreviousPage}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Prev
            </button>
            <button
              onClick={handleNextPage}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {posts.isLoading && <p>Loading...</p>}
      {posts.isFetching && <p>Fetching...</p>}
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
