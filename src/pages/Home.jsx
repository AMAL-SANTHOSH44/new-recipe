import "./home.css";
import { FaFacebook } from "react-icons/fa";

import { FaSquareInstagram } from "react-icons/fa6";

import { FaTwitter } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";

const Home = () => {
  const [recipeData, setProductData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let apiResponse = await fetch("https://dummyjson.com/recipes");

    let data = await apiResponse.json();
    setProductData(data.recipes);
  };

  return (
    <div>
      <div className=" container d-flex justify-content-between">
        <div class="titile" style={{ marginTop: "200px" }}>
          <h1 id="font1" style={{}}>
            "Cooking is love
            <br />
            made <span style={{color:"orange"}}>visible!"</span> 
          </h1>

          <p className="mt-4" style={{fontWeight:'600'}}>
            “Discover a world of flavors with our curated recipes. From quick
            meals to gourmet delights,
            <br /> find the perfect dish for every occasion.”"Cooking is not
            just about mixing ingredients;
            <br /> it’s about blending memories, traditions, and flavors into
            something that warms both the heart
            <br /> and the stomach. Every recipe tells a story—of family
            gatherings, festive celebrations, and quiet
            <br /> evenings filled with comfort. Our goal is to share not just
            food, but the joy, love, and creativity
            <br /> that comes with every dish, reminding us that recipes are
            more than instructions; they are
            <br />
            experiences meant to be savored."
          </p>

          <button href="#RECIPES" className="shadow"
            style={{
              marginLeft: "20px",
              padding: "5px",
              backgroundColor: "orange",
              borderRadius: "7px",
              border:"solid ,2px,orange"
            }}
          >
            Explore
          </button>
        </div>

        <div style={{ marginTop: "100px" }}>
          <img
            src="/1739989295412j_800x800-removebg-preview.png"
            alt=""
          />
        </div>
      </div>

      <div
        className=" container d-flex justify-content-between"
        style={{ marginTop: "70px" }}
      >
        <div class="titile2">
          <img
            src="/strawberries-water-splashes-fresh-healthy-food-strawberries-water-splashes-fresh-healthy-food-297649868-removebg-preview.png"
            alt=""
          />
        </div>

        <div id="ABOUT">
          <h1>About <span style={{color:"orange",fontFamily:"cursive"}}> us!</span></h1>
          <p  style={{fontWeight:'600'}}  >
            We started this platform with the vision of transforming the way
            people look at cooking, because for us, food is not just about
            filling the stomach but about filling the heart, and every recipe we
            bring to you carries not only carefully chosen ingredients but also
            a story, a tradition, and a memory, reminding us that cooking is an
            art where flavors, cultures, and emotions come together, and through
            this journey we wish to inspire everyone — from beginners to experts
            — to step into their kitchen with confidence, creativity, and joy,
            knowing that every meal prepared with love has the power to connect
            families, friends, and communities across the world.We believe that
            great food doesn’t have to be complicated, which is why each of our
            recipes is tested in our home kitchen and written with simple
            instructions and helpful tips. From quick weeknight dinners to
            special weekend treats, our goal is to inspire you to get creative,
            try something new, and most importantly — enjoy the process. Thank
            you for being here and cooking along with us!"
          </p>

          <span>Follow us on :</span>

          <span id="insta" style={{ color: "orange" }} className="ms-3 fs-4">
            <FaSquareInstagram />
          </span>
          <span id="fb" style={{ color: "blue" }} className="ms-3 fs-4">
            <FaFacebook />
          </span>
          <span
            id="twitter"
            style={{ color: "lightblue" }}
            className="ms-4 fs-4"
          >
            <FaTwitter />
          </span>
        </div>
      </div>

      <div id="RECIPES" className="mt-5" style={{marginLeft:'135px'}}>
        <h1 style={{fontFamily:'-moz-initial'}}>Recipes...</h1>
      </div>
      <div>
        <Container className="mt-4">
          <Row>
            {recipeData.map((eachRecipe) => (
              <Col lg={3} md={4} sm={6}>
                <Card
                  class="shadow"
                  style={{ width: "17rem", margin: "15px", color: "grey",border:'solid,1px,whitesmoke',borderRadius:"20px" }}
                >
                  <Card.Img variant="top" src={eachRecipe.image} />
                  <Card.Body> 
                    <Card.Title>{eachRecipe.name}</Card.Title>
                    <Card.Text>{eachRecipe.cuisine}</Card.Text>
                    <Link
                      to={`/singlepage/${eachRecipe.id}`}
                      className="btn btn-success"
                      style={{ fontWeight: "600" }}
                    >
                      View in detail
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div id="CUSTOMERS">
        <h1 style={{fontFamily:"-moz-initial"}}className="text-center mt-5">Customer<span style={{color:"orange",fontFamily:"cursive"}}> Riview!</span></h1>
      </div>

      <div class="d-flex justify-content-evenly">
        <div>
          <Card
            className="shadow"
            style={{
              width: "15rem",
              marginTop: "50px",
              border: "solid,10px,white",
            }}
          >
            <Card.Img
              variant="top"
              src="https://tse4.mm.bing.net/th/id/OIP.Kk4i-k-7bOfsgPv0SJtj5AHaHa?pid=Api&P=0&h=220"
            />
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  fontFamily: "serif",
                  fontWeight: "600",
                }}
              >
                John
              </Card.Title>
              <div
                style={{
                  marginTop: "-5px",
                  marginLeft: "53px",
                  color: "#f5c71a",
                }}
              >
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>
              <Card.Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim,
                harum. Mollitia facilis aut, incidunt quasi quae velit quos
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card
            className="shadow"
            style={{
              width: "15rem",
              marginTop: "50px",
              border: "solid,10px,white",
            }}
          >
            <Card.Img
              variant="top"
              src="https://kottke.org/plus/misc/images/ai-faces-01.jpg"
            />
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  fontFamily: "serif",
                  fontWeight: "600",
                }}
              >
                Merry
              </Card.Title>
              <div
                style={{
                  marginTop: "-5px",
                  marginLeft: "65px",
                  color: "#f5c71a",
                }}
              >
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>
              <Card.Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim,
                harum. Mollitia facilis aut, incidunt quasi quae velit quos
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card
            className="shadow"
            style={{
              width: "15rem",
              marginTop: "50px",
              border: "solid,10px,white",
            }}
          >
            <Card.Img
              style={{}}
              variant="top"
              src="https://tse3.mm.bing.net/th/id/OIP.VwGF1Cf1FLPI-O1j4KVeZwHaHa?pid=Api&P=0&h=220"
            />
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  fontFamily: "serif",
                  fontWeight: "600",
                }}
              >
                Christopher
              </Card.Title>
              <div
                style={{
                  marginTop: "-5px",
                  marginLeft: "62px",
                  color: "#f5c71a",
                }}
              >
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>
              <Card.Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim,
                harum. Mollitia facilis aut, incidunt quasi quae velit quos
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card
            className="shadow"
            style={{
              width: "15rem",
              marginTop: "50px",
              border: "solid,10px,white",
            }}
          >
            <Card.Img
              variant="top"
              src="https://pub-static.fotor.com/assets/text_to_image/demos/ai-face/6.png"
            />
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  fontFamily: "serif",
                  fontWeight: "600",
                }}
              >
                Dilisha
              </Card.Title>
              <div
                style={{
                  marginTop: "-5px",
                  marginLeft: "58px",
                  color: "#f5c71a",
                }}
              >
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>
              <Card.Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim,
                harum. Mollitia facilis aut, incidunt quasi quae velit quos.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
