import React from "react";
import Card from "./Card";
import "./Service.css";
import emoji1 from "../img/emoji1.png";
import emoji2 from "../img/emoji2.png";
import emoji3 from "../img/emoji3.png";
import Resume from '../img/cv.pdf';


const Service = () => {
  return (
    <div className="service" id="Service">
      <div className="CV">
        <span>My </span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit adipisicing elit. Molestiae, fugit.
          <br />
          Lorem ipsum dolor sit amet consectetur.
        </span>
        <a href={Resume} download>
        <button className="serbtn">Download CV</button>
        </a>
      </div>
      <div className="card">
        <div className="crd2"  style={{position:'relative',top:'-5rem',left:'2.5rem'}}>
          <Card
            emoji={emoji1}
            heading={"Design"}
            details={"Figma,adobe,illustrator"}
          />
        </div>
        <div className="crd2" style={{position:'relative',top:'-5rem',left:'15.5rem'}}>
          <Card
            emoji={emoji2}
            heading={"Developer"}
            details={"Mern Stack "}
          />
        </div>
        <div className="crd2" style={{position:'relative',top:'-9rem',left:'-2.5rem'}}>
          <Card
            emoji={emoji3}
            heading={"UI/UX"}
            details={"Modern UI/UX"}
          />
        </div>
       <div className="blur00" ></div>
       <div className="blur11" ></div>
       <div className="blur22" ></div>
       <div className="blur33" ></div>
       <div className="blur44" ></div>
       <div className="blur55" ></div>
       <div className="blur66" ></div>
       <div className="blur77" ></div>
       <div className="blur88" ></div>
       <div className="blur99" ></div>
       <div className="blur0" ></div>
       <div className="blur1" ></div>
       <div className="blur2" ></div>
       <div className="blur3" ></div>
       <div className="blur4" ></div>
       <div className="blur5" ></div>
       <div className="blur6" ></div>
       <div className="blur7" ></div>
       <div className="blur8" ></div>
       <div className="blur9" ></div>
       <div className="blur70" ></div>
       <div className="blur80" ></div>
       <div className="blur90" ></div>
      </div>
    </div>
  );
};

export default Service;
