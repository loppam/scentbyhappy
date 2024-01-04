import React, { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebase";

const PerfumeList = () => {
  const [perfumes, setPerfumes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const colRef = collection(db, "perf");
        const snapshot = await getDocs(colRef);

        let perf = [];
        snapshot.docs.forEach((doc) => {
          perf.push({ ...doc.data(), id: doc.id });
        });

        setPerfumes(perf);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setLoading(false);
      }
    };

    // Simulate a loading timeout (adjust the timeout duration as needed)
    const loadingTimeout = setTimeout(() => {
      fetchData();
    }, 1000); // 1 seconds timeout

    // Cleanup the timeout on component unmount
    return () => clearTimeout(loadingTimeout);
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  const handleDelete = async (perfumeId) => {
    try {
      await deleteDoc(doc(db, "perf", perfumeId));
      // Update the state to reflect the deletion
      setPerfumes((prevPerfumes) =>
        prevPerfumes.filter((perfume) => perfume.id !== perfumeId)
      );
    } catch (error) {
      console.error("Error deleting perfume:", error.message);
    }
  };

  return (
    <div className="perfumelist">
      <div className="content">
        <h3 className="hed">Delete Perfume</h3>
        {loading ? (
          <div className="loader-container">
            <div className="lds-dual-ring"></div>
          </div>
        ) : perfumes.length === 0 ? (
          <p>No perfumes to display.</p>
        ) : (
          perfumes.map((perfume) => (
            <ul key={perfume.id}>
              <li>
                <div className="fleex">
                  <h3>{perfume.perfName}</h3>
                  <p>₦{perfume.PerfPrice}.00</p>
                  <p>{perfume.Gender}</p>
                </div>
                <button
                  className="button-86"
                  onClick={() => handleDelete(perfume.id)}
                >
                  Delete
                </button>
              </li>
            </ul>
          ))
        )}
      </div>
    </div>
  );
};

export default PerfumeList;
