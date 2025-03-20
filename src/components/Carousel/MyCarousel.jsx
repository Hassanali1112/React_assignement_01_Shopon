import React from "react";
import Carousel from "react-multi-carousel";
// import { Row } from "react-bootstrap";
// import { Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";
import Card from "react-bootstrap/Card";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";


// const sliderImageUrl = [
//   {
//     name: "G-Shock Casio 08",
//     price: "$600",
//     caption:
//       "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

//     fullName:
//       "Casio Analog-Digital Black Dial Women’s Watch-BA-110RG-1ADR (BX157)",
//     category: "Women's Watch",
//     color: [ "golden", "silver"],
//     Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
//     img: "https://iwc.com.pk/wp-content/uploads/2020/12/BA-110RG-1ADR-1.jpg",
//   },
//   {
//     name: "G-shock Casio 09 ",
//     price: "$600",
//     caption:
//       "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

//     fullName: "G-shock Casio 09 Champagne Index - 126231-62801",
//     category: "Men's Watch",
//     color: [ "golden", "silver"],
//     Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
//     img: "https://iwc.com.pk/wp-content/uploads/2022/01/GM-S2100-3ADR-1.jpg",
//   },
//   {
//     name: "G-shock Casio 10 ",
//     price: "$600",
//     fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
//     category: "Men's Watch",
//     color: [ "golden", "silver"],
//     Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
//     img: "https://iwc.com.pk/wp-content/uploads/2023/03/GMA-S2100-1ADR.jpg",
//   },
//   {
//     name: "G-shock Casio 11 ",
//     price: "$600",
//     caption:
//       "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

//     fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
//     category: "Men's Watch",
//     color: [ "golden", "silver"],
//     Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
//     img: "https://iwc.com.pk/wp-content/uploads/2023/03/GA-2000S-1ADR.jpg",
//   },
//   {
//     name: "G-shock Casio 12 ",
//     price: "$600",
//     caption:
//       "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

//     fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
//     category: "Men's Watch",
//     color: [ "golden", "silver"],
//     Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
//     img: "https://iwc.com.pk/wp-content/uploads/2023/03/GA-2100-1A3DR.jpg",
//   },
//   {
//     name: "G-shock Casio 13 ",
//     price: "$600",
//     caption:
//       "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

//     fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
//     category: "Men's Watch",
//     color: [ "golden", "silver"],
//     Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
//     img: "https://iwc.com.pk/wp-content/uploads/2023/03/GA-2100FR-5ADR.jpg",
//   },
// ];
const MyCarousel = ({ data, lg,md,sm }) => {
  // console.log(itemsOnScreen);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: lg,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: md,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: sm,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div
      className="parent container p-0"
      style={{ backgroundColor: "#ffffff" }}
    >
    
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        autoPlaySpeed={600}
        transitionDuration={900}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {data.map((item, index) => {
          return (
            <Card className="slider py-1" key={index}>
              <Card.Img variant="top" className="img-fluid" src={item.img} />
              <Card.Body className="px-2">
                <Rating name="simple-controlled" value={0} size="small" />

                {/* <Card.Title style={{ fontSize: ".9rem", fontWeight : 400 }}>
                  {item.name}
                </Card.Title> */}
                <Card.Text style={{ fontSize: ".72rem" }}>
                  {item.fullName}
                </Card.Text>
                <Typography variant="h6" component={"p"} sx={{color : "#FCAE33"}}>{item.price}</Typography>
              </Card.Body>
            </Card>
          );
        })}
      </Carousel>
    </div>
  );
};
export default MyCarousel;
