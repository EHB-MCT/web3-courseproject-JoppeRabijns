import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './home.css'

const Home = () => {
  const [models, setModels] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/model");
        setModels(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);
  return (
    <div className="fullBody">
       <Link to='/upload' className="link">
            <h1>Upload your 3d-asset</h1>
        </Link>
     <div className="home">
      {models.map((model) => (
        <div className="item" key={model.title}>
          <Link to={`/model/${model.title}`} className="link">
            <h1>{model.title}</h1>
          </Link>
          <p>{model.creator}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Home;