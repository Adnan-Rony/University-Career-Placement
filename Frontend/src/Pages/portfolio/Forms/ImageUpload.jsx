import React, { useRef, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export const ImageUpload = ({ value, onChange }) => {
  const [cover, setCover] = useState(value || "");
  const fileInputRef = useRef();
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (value !== cover) setCover(value || "");
  }, [value]);

  const handleCoverUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "blogging");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dnpycgwch/image/upload",
        { method: "POST", body: formData }
      );

      const data = await res.json();
      setCover(data.secure_url);
      onChange && onChange(data.secure_url); 
      toast.success("Profile photo uploaded!");
    } catch (error) {
      console.error("Upload failed:", error);
      toast.error("Failed to upload photo");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <img
        src={cover || "/defavatar.png"}
        alt="Profile"
        className="w-20 h-20 rounded-full border object-cover"
      />
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleCoverUpload}
        className="hidden"
      />
      <button
        type="button"
        className="btn btn-outline"
        onClick={() => fileInputRef.current.click()}
      >
        {isUploading ? "Uploading..." : "Upload a new photo"}
      </button>
    </div>
  );
};
