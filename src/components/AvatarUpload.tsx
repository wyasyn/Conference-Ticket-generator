import React from "react";
import { useTicket } from "@/hooks/ticket";
import Label from "./Label";
import { Images } from "@/constants/images";

export default function AvatarUpload() {
  const { avatar, setAvatar, errors } = useTicket();

  const handleRemoveAvatar = () => {
    setAvatar(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAvatar(e.target.files ? e.target.files[0] : null);
  };

  return (
    <div className="flex flex-col">
      <Label label="Upload Avatar" id="avatar" />
      {!avatar ? (
        <div
          className={`mt-1 p-4 border-dashed bg-card/35 gap-2 flex flex-col items-center justify-center relative border-2 rounded-lg focus-visible:outline-2 outline-border outline-offset-2 ${
            errors.avatar ? "border-destructive" : "border-border"
          }`}
          role="button"
          aria-label="Upload Avatar"
          tabIndex={0}
        >
          <input
            id="avatar"
            type="file"
            accept="image/*"
            onChange={(e) =>
              setAvatar(e.target.files ? e.target.files[0] : null)
            }
            className=" top-0 right-0 bottom-0 left-0 opacity-0 absolute inset-0 z-50"
          />
          <div className="bg-card/75 rounded-md p-1">
            <img src={Images.UploadIcon} alt="upload icon" />
          </div>

          <p className="text-center text-muted/60">
            Drag and drop or click to upload
          </p>
        </div>
      ) : (
        <div
          className={`mt-1 p-4 border-dashed bg-card/35 gap-2 flex flex-col items-center justify-center relative border-2 rounded-lg focus-visible:outline-2 outline-border outline-offset-2 ${
            errors.avatar ? "border-destructive" : "border-border"
          }`}
          role="button"
          aria-label="Upload Avatar"
          tabIndex={0}
        >
          <img
            src={URL.createObjectURL(avatar)}
            alt="Avatar preview"
            className="w-16 h-16 rounded-2xl border-2 border-muted/50"
          />
          <div className="flex items-center justify-center gap-4 w-full">
            <button
              type="button"
              onClick={handleRemoveAvatar}
              className="bg-card/75 rounded-lg text-xs underline px-3 py-2"
            >
              Remove image
            </button>
            <label
              htmlFor="change-avatar"
              className="bg-card/75 rounded-lg text-xs px-3 py-2"
            >
              <input
                id="change-avatar"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />{" "}
              Change image
            </label>
          </div>
        </div>
      )}

      {errors.avatar ? (
        <p className="text-red-500 text-xs mt-1">{errors.avatar}</p>
      ) : (
        <p className="text-sm my-2 text-muted">
          <span>
            <img
              src={Images.InfoIcon}
              alt="info icon"
              className="inline-block"
            />
          </span>{" "}
          Upload your photo (JPG or PNG, max size: 500KB)
        </p>
      )}
    </div>
  );
}
