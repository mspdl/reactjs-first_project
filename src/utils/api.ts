import { Post } from "@/types/Post";
import { User } from "@/types/User";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPosts = async (): Promise<Post[]> => {
  const result = await api.get("/posts");
  return result.data;
};

export const getPostById = async (postId: number): Promise<Post> => {
  const result = await api.get("/posts/" + postId);
  return result.data;
};

export const getUsers = async (): Promise<User[]> => {
  const result = await api.get("/users");
  return result.data;
};
