export const uploadImage = async (file: File): Promise<string> => {
  try {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch(`https://api.imgbb.com/1/upload?key=6eed668e740ddd4492a00a7e17e7fbbb`, {
      method: 'POST',
      body: formData
    });

    const data = await response.json();
    if (!data.success) {
      throw new Error(data.error?.message || 'Failed to upload image');
    }

    return data.data.url;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};