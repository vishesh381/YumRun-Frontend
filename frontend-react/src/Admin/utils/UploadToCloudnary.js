export const uploadToCloudinary = async (pics) => {
  if (!pics) {
    console.error("No file provided");
    return null;
  }

  try {
    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", "YumRun-social"); // must exactly match your preset name
    data.append("cloud_name", "djwb2eyqk");        // your cloud name

    const res = await fetch("https://api.cloudinary.com/v1_1/djwb2eyqk/image/upload", {
      method: "POST",
      body: data,
    });

    if (!res.ok) {
      console.error("Upload failed:", res.statusText);
      return null;
    }

    const fileData = await res.json();
    console.log("Uploaded URL:", fileData.secure_url);
    return fileData.secure_url;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    return null;
  }
};
