export const api=process.env.REACT_APP_HOST_DEV || "http://localhost:8000"
export const generatePublicUrl=(filename)=>{
    return `${api}/${filename}`;
}