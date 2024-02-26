import { Post } from "@/types/Post";
import { usePosts } from "@/utils/queries";
import { useState } from "react";

export const TanStack = () => {
  const postsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const posts = usePosts(postsPerPage, currentPage * postsPerPage);

  const handlePreviousPage = () => {
    setCurrentPage(currentPage === 0 ? 0 : currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="">
        <h1 className="text-white text-3xl text-center pt-5 pb-2">Posts Page</h1>

        <div className="border border-green-300 p-3">
          <div>Posts per pager: {postsPerPage}</div>
          <div>current page: {currentPage + 1}</div>
          <button
            className="border px-2 mr-2"
            disabled={currentPage === 0}
            onClick={handlePreviousPage}
          >
            Previous page
          </button>
          <button className="border px-2" onClick={handleNextPage}>
            Next page
          </button>
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
