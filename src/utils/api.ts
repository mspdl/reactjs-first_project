import { Post } from "@/types/Post";
import { User } from "@/types/User";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPosts = async (
  limit: number = 10,
  start: number = 0
): Promise<Post[]> => {
  const result = await api.get(`/posts?_limit=${limit}&_start=${start}`);
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

export const addPost = async (data: Omit<Post, "id">) => {
  const result = await api.post("/posts", data);
  return result.data;
};
