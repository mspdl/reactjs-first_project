import { useRef, useState } from "react";

export const ImageUpload = () => {
  const [subtitleInput, setSubtitleInput] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    if (
      fileInputRef?.current?.files &&
      fileInputRef?.current?.files?.length > 0
    ) {
      const fileItem = fileInputRef.current.files[0];
      const allowedMIMETypes = ["image/jpg", "image/jpeg", "image/png"];
      if (allowedMIMETypes.includes(fileItem.type)) {
        const data = new FormData();
        data.append("image", fileItem);
        data.append("subtitle", subtitleInput);

        const response = await fetch("https://someapiexample", {
          method: "post",
          headers: {
            "Content-type": "multipart/form-data",
          },
          body: data,
        });
        const json = await response.json();
        console.log(json);
      } else {
        alert("Incompatible File Type");
      }
    } else {
      alert("Select a file");
    }
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl text-center font-bold">Upload image</h1>
      <div className="self-center flex flex-col gap-3 border border-dotted border-white p-3 mt-4">
        <input type="file" ref={fileInputRef} />
        <input
          type="text"
          placeholder="Image's subtitle"
          className="p-3 bg-white rounded-md text-black outline-none"
          value={subtitleInput}
          onChange={(e) => setSubtitleInput(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-700 hover:bg-blue-800 text-gray-200 p-2 rounded-md w-28 self-center"
        >
          Send image
        </button>
      </div>
    </div>
  );
};
