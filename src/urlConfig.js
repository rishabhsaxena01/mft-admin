export const api=process.env.REACT_APP_HOST_DEV
export const generatePublicUrl=(filename)=>{
    return `${api}/${filename}`;
}