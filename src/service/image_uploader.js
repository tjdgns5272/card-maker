class ImageUploader {
    async uploader(file) {
        const data = new FormData();

            data.append("file", file);
            data.append("upload_preset", "yma8iydx");

            const result =  await fetch (
                'https://api.cloudinary.com/v1_1/dn3zu4gla/image/upload',
                {
                    method: 'POST',
                    body: data,
                }
            );
            return await result.json();
    }
}

export default ImageUploader