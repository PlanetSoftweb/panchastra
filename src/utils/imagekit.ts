import ImageKit from "imagekit-javascript";

// Initialize ImageKit
export const imagekit = new ImageKit({
  publicKey: "public_HH6Ju26d0J1+j5Nuy/usQddQ6vc=",
  urlEndpoint: "https://ik.imagekit.io/9cvcezqvw",
  authenticationEndpoint: "https://your-server.com/auth" // You'll need a server endpoint for authentication
});

export const uploadImage = async (file: File): Promise<string> => {
  try {
    const response = await imagekit.upload({
      file,
      fileName: file.name,
      folder: "/blog-posts"
    });
    return response.url;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};