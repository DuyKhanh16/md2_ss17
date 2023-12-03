import React, { useState } from "react";
import { storage } from "./config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios";
export default function () {
  // tạo state khởi tạo image khi change thì setImageUpload
  const [imageUpload, setImageUpload] = useState(null);
  const [urlImage, setUrlImage] = useState(null);
  const [productName, setProductName] = useState({
    name: "",
    image: "",
  });
  const changeImage = (e) => {
    let file = e.target.files[0];
    setImageUpload(file);
    

  };
  const handleAdd = () => {
    if (imageUpload == null) return;

    const imageRef = ref(storage, `images/${imageUpload.name}`);

    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log("11111111", url);
        setUrlImage(url);
        let product= {
          name: productName,
          image:url
        }
        axios.post("http://localhost:8001/products",product)
      });
    });
  };
  // Tạo storage lưu trữ từ dịch vụ của firebase
  // const imagesListRef = ref(storage, "images/");
  return (
    <>
      <h1>firebase </h1>
      <label htmlFor="">Name</label>
      <input 
      onChange={(e)=>setProductName(e.target.value)}
      type="text" 
      />
      <br />
      <input onChange={changeImage} type="file" />
      <button onClick={handleAdd}>add</button>
      <img src={urlImage} alt="" />
    </>
  );
}
