import axios from "axios";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const Axios = () => {
  const currentPostId = 3;

  const handleClickGetPosts = async () => {
    const requestParams = { postId: currentPostId, sort: "desc" };

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments",
      {
        params: requestParams,
      }
    );

    console.log(response.data);
  };

  return (
    <div className="">
      <button onClick={handleClickGetPosts}>
        Get comments from post {currentPostId}
      </button>
    </div>
  );
};
