const upload_preset = "ichigo-food"
const cloud_name = "dwjd0j03o"
const api_url = "https://api.cloudinary.com/v1_1/dwjd0j03o/image/upload"

export const uploadImageToCloudinary = async(file) => {
    const data = new FormData();
    data.append("file",file);
    data.append("upload_preset",upload_preset);
    data.append("cloud_name",cloud_name);

    const res = await fetch(api_url,{
        method:"post",
        body:data
    });

    const fileData = await res.json();

    return fileData.url
}