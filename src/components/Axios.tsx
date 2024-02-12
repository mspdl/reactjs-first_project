import { api } from "@/utils/api";

export const Axios = () => {
  const currentPostId = 3;

  const handleGetComments = async () => {
    const requestParams = { postId: currentPostId, sort: "desc" };

    const response = await api.get("/comments", {
      params: requestParams,
    });

    console.log(response.data);
  };

  const handleAddPost = async () => {
    const response = await api.post("/posts", {
      userId: 1,
      title: "Post title",
      body: "This is the body of the post",
    });
    console.log(response);
    if (response.data.id) {
      console.log("Post added successfully!");
    } else {
      console.log("Something went wrong.");
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <button
        className="bg-blue-700 hover:bg-blue-900 hover:text-gray-400 p-2 text-gray-300 rounded-md border border-gray-300"
        onClick={handleGetComments}
      >
        Get comments from post {currentPostId}
      </button>
      <button
        className="bg-blue-700 hover:bg-blue-900 hover:text-gray-400 p-2 text-gray-300 rounded-md border border-gray-300"
        onClick={handleAddPost}
      >
        Add post
      </button>
    </div>
  );
};
