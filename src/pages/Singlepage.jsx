import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";


const Singlepage = () => {
  const { id } = useParams();
  const [recipeData, setProductData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let apiResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
    let data = await apiResponse.json();
    setProductData(data);
  };

  return (
    <>
      <Card className="mt-5 shadow" style={{ width: "17rem", marginLeft: "200px",border:"solid ,1px,white",borderRadius:'5px' }}>
        <Card.Img variant="top" src={recipeData.image} />
        <Card.Body>
          <Card.Title>{recipeData.name}</Card.Title>
          <Card.Title>{`PrepTime ${recipeData.prepTimeMinutes} : min`}</Card.Title>
          <Card.Title>{`CookTime ${recipeData.cookTimeMinutes} : min`}</Card.Title>
        </Card.Body>
      </Card>
      <div
        style={{
          marginLeft: "550px",
          marginTop: "-350px",
          fontFamily: "cursive",
        }}
      >
        <h1>Dish info...</h1>
        <div style={{fontFamily:'monospace',fontSize:'20px',fontWeight:'600',color:'grey'}}>
        {`Cuisine :  ${recipeData.cuisine}`}
        </div>
        <div style={{fontFamily:'monospace',fontSize:'20px',fontWeight:'600',color:'grey'}}>
        {`Serving : ${recipeData.servings}`}
        </div>
        <div style={{fontFamily:'monospace',fontSize:'20px',fontWeight:'600',color:'grey'}}>
        {`Difficulty : ${recipeData.difficulty} level`}
        </div>
        <div style={{fontFamily:'monospace',fontSize:'20px',fontWeight:'600',color:'grey'}}>
        {`CaloriesPerServing : ${recipeData.caloriesPerServing}`}
        </div>
        <div style={{fontFamily:'monospace',fontSize:'20px',fontWeight:'600',color:'grey'}}>
        {`Meal type : ${recipeData.mealType}`}
        </div>
        <div style={{fontFamily:'monospace',fontSize:'20px',fontWeight:'600',color:'#f5c71a'}}>
        {`Rating : ${recipeData.rating}`}
        </div>

   </div> 

     <div className=" container" style={{marginTop:'150px',marginLeft:'200px'}}>
      <h1 style={{color:'#C8D6D9',fontFamily:'inherit'}}>Ingredients...</h1>
      <div style={{fontSize:"20px",fontWeight:'600' }}>
       {recipeData.ingredients}
       </div>
     </div>
     <div className="mt-4 container" style={{marginLeft:'200px'}} >
        <h1 style={{color:'#C8D6D9'}}>Instructions...</h1>
        <div style={{fontSize:"20px",fontWeight:'600' }} >
     {recipeData.instructions}
     </div>
     </div>




     



    </>
  );
};

export default Singlepage;
