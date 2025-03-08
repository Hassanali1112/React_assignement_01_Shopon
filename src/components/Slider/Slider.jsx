import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css"; 

function Slider({ slider }) {
  console.log(slider)
  return (
    <Carousel indicators interval={600}>
      {slider.map((slide, index) => (
        <Carousel.Item key={index} style={{ height: "75vh" }}>
          <img
            src={slide.url}
            alt={`Slide ${index + 1}`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>

    // <Carousel>
    //   {
    //     slider.map((slide,index)=>{

    //       return (
    //         <Carousel.Item key={index}>
    //           {/* <ExampleCarouselImage text="First slide" /> */}
    //           <img src={slide.url} alt="" />
    //           <Carousel.Caption>

    //           </Carousel.Caption>
    //         </Carousel.Item>
    //       );
    //     })

    //   }
    // </Carousel>
  );
}

export default Slider;
