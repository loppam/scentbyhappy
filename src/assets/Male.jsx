import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { Link } from "react-router-dom";

const Male = () => {
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
    }, 800); // 0.8 seconds timeout

    // Cleanup the timeout on component unmount
    return () => clearTimeout(loadingTimeout);
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div className="male">
        <h3 className="her">Male Perfume</h3>
      <div className="content">
        {loading ? (
          <div className="loader-container">
            <div className="lds-dual-ring"></div>
          </div>
        ) : (
          perfumes.map(
            (perfume) =>
              perfume.Gender === "Male" && (
                <ul key={perfume.id}>
                  <li>
                    <div className="perf_img">
                      <img src={perfume.image} alt="" />
                    </div>
                    <h3>{perfume.perfName}</h3>
                    <p>₦{perfume.PerfPrice}.00</p>
                    <Link
                      className="button-55"
                      role="button"
                      target="_blank"
                      to={`https://api.whatsapp.com/send?phone=2348140768568&text=Hello%2C%20I%20want%20to%20get%20${perfume.perfName}%20perfume`}
                    >
                      order
                    </Link>
                  </li>
                </ul>
              )
          )
        )}
      </div>
    </div>
  );
};

export default Male;
