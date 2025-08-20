import React from "react";
import { Link } from "react-router-dom";


const PNF = () => {
  return (
    <div>
      <div class= "d-flex justify-content-center align-items-center"
      style={{height: "80vh"}}>
        <h1 style={{fontSize:'200px',color:"grey",position:"absolute",zIndex:-1,fontFamily:'sans-serif',fontWeight:'700',opacity:'0.3'}}>404</h1>
        <p style={{fontSize:'30px',fontWeight:'700',color:'black'}}>WE ARE SORRY, PAGE NOT FOUND!</p>
        </div>

        <div style={{marginTop:'-160px',marginLeft:'680px'}}>
            <Link to="/" className="btn btn-success">BACK TO HOMEPAGE</Link>
        </div>
    </div>
  );
};

export default PNF;
