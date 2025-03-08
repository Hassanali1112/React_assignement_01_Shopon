import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/Navbar/MyNavbar";
import Brands from "./components/Brands/Brands";
import MyCarousel from "./components/Carousel/MyCarousel";
// import BrandCard from "./components/BrandCard/BrandCard";
import Divider from "./components/Divider/Divider";
import Slider from "./components/Slider/Slider";
import CenteredText from "./components/CenteredText/CenteredText";

function App() {
   const slider = [
     {
       url: "https://shopon.pk/images/promo/249/xbox_Gift_cards__2_.png",
     },
     {
       url: "https://shopon.pk/images/promo/214/_123-456-7890.png",
     },
     {
       url: "https://shopon.pk/images/promo/249/xbox_Gift_cards__1_.png",
     },
     {
       url: "https://shopon.pk/images/promo/206/Untitled_design.png",
     },
     {
       url: "https://shopon.pk/images/promo/214/special_offer.png",
     },
     {
       url: "https://shopon.pk/images/promo/222/Solar_componenets.png",
     },
     {
       url: "https://shopon.pk/images/promo/250/xbox_Gift_cards__3_.png",
     },
   ];
  return (
    <>
      <MyNavbar />
      <Slider slider={slider} />
      <Brands />
      <Divider />
      <MyCarousel />
      {/* <BrandCard /> */}
      <CenteredText text={"TRENDING GIFT CARDS"} linkText={"VIEW ALL"} />
    </>
  );
}

export default App;
