import { ImageUpload } from "./ImageUpload";
import { Posts } from "./Posts";
import { Users } from "./Users";

export const RequestAPI = () => {
  return (
    <div className="pt-5">
      <ImageUpload />
      <hr className="my-5" />
      <Posts />
      <hr className="my-5" />
      <Users />
    </div>
  );
};
