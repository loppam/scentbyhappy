import React, { useState, useEffect } from "react";
import { storage } from "./Firebase";
import { Avatar } from "@mui/material";
import { db } from "./Firebase";
import FolderIcon from "@mui/icons-material/Folder";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const AddPerfume = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [file, setFile] = useState();
  const [Name, setName] = useState("");
  const [Price, setPrice] = useState("");
  const [gend, setGend] = useState("");
  const [perfumeDetails, setPerfumeDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const perfumeDetailsCollectionRef = collection(db, "perf");

  useEffect(() => {
    const getPerfumeDetails = async () => {
      const data = await getDocs(perfumeDetailsCollectionRef);
      setPerfumeDetails(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getPerfumeDetails();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const imageRef = ref(storage, `/perf/${image.name}`);
      await uploadBytes(imageRef, image);

      const imageUrl = await getDownloadURL(imageRef);

      await addDoc(perfumeDetailsCollectionRef, {
        perfName: Name,
        PerfPrice: Price,
        Gender: gend,
        image: imageUrl,
      });

      navigate("/");
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="addperf">
      <div className="content">
        <form onSubmit={handleSubmit}>
          
          <Avatar sx={{ width: 300, height: 300 }} src={file} variant="square">
            <FolderIcon />
          </Avatar>

          {/* <img src={file} alt="Perfume Preview" /> */}
          <input
            accept="image/*"
            type="file"
            placeholder="Upload Picture"
            required
            onChange={handleImageChange}
          />

          <input
            type="text"
            placeholder="Perfume Name"
            required
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <input
            type="number"
            min='1'
            step='any'
            placeholder="Price"
            required
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
          <select
            name="gend"
            id=""
            onChange={(event) => {
              setGend(event.target.value);
            }}
          >
            <option value="">--Select--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <button type="submit" disabled={loading}>
            {loading ? "Adding..." : "Add Perfume"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPerfume;
