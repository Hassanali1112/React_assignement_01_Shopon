import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/Navbar/MyNavbar";
import Brands from "./components/Brands/Brands";
import MyCarousel from "./components/Carousel/MyCarousel";
import BrandCard from "./components/BrandCard/BrandCard";
import Divider from "./components/Divider/Divider";
import Slider from "./components/Slider/Slider";
import CenteredText from "./components/CenteredText/CenteredText";
import { Col, Row } from "react-bootstrap";
import Footer from "./components/Footer/Footer";
import Typography  from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MultiSlider from "./components/NewCard/NewCard";
import NewCards from "./components/NewCard/NewCard";


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

  // const itemsOnScreen = {
  //   desktop: 4,
  //   tablet: 3,
  //   mobile: 1,
  // };

  const sliderImageUrl1 = [
    {
      name: "G-Shock Casio 08",
      price: "RS.700",
      fullName:
        "Casio Analog-Digital Black Dial Women’s Watch-BA-110RG-1ADR (BX157)",
      category: "Women's Watch",
      color: ["golden", "silver"],
      img: "https://shopon.pk/images/thumbnails/270/270/detailed/221/swl-28-scenes-21.jpg",
    },
    {
      name: "G-Shock Casio 08",
      price: "RS.600",
      fullName:
        "Casio Analog-Digital Black Dial Women’s Watch-BA-110RG-1ADR (BX157)",
      category: "Women's Watch",
      color: ["golden", "silver"],
      img: "https://shopon.pk/images/thumbnails/270/270/detailed/251/images_pxkt-00.jpg",
    },
    {
      name: "G-Shock Casio 08",
      price: "RS.400",
      fullName:
        "Casio Analog-Digital Black Dial Women’s Watch-BA-110RG-1ADR (BX157)",
      category: "Women's Watch",
      color: ["golden", "silver"],
      img: "https://shopon.pk/images/thumbnails/270/270/detailed/221/SWL-24NewMain-396226_26edac8b-87fb-410d-b8b4-2b5089f74860.jpg",
    },
    {
      name: "G-Shock Casio 08",
      price: "RS.500",
      fullName:
        "Casio Analog-Digital Black Dial Women’s Watch-BA-110RG-1ADR (BX157)",
      category: "Women's Watch",
      color: ["golden", "silver"],
      img: "https://shopon.pk/images/thumbnails/270/270/detailed/196/download_05rq-1g.jpg",
    },
    {
      name: "G-Shock Casio 08",
      price: "RS.200",
      fullName:
        "Casio Analog-Digital Black Dial Women’s Watch-BA-110RG-1ADR (BX157)",
      category: "Women's Watch",
      color: ["golden", "silver"],
      img: "https://shopon.pk/images/thumbnails/270/270/detailed/221/swl-38-1-1024x688.jpg",
    },
    {
      name: "G-Shock Casio 08",
      price: "RS.600",
      fullName:
        "Casio Analog-Digital Black Dial Women’s Watch-BA-110RG-1ADR (BX157)",
      category: "Women's Watch",
      color: ["golden", "silver"],
      img: "https://shopon.pk/images/thumbnails/270/270/detailed/197/download_-_2024-05-27T185348.480.jpeg",
    },
  ];

  const sliderMobiles1 = [
    {
      name: "Oppo Reno 11 5G",
      price: "RS.96999",
      fullName: "Oppo Reno 11 5G",
      category: "Women's Watch",
      color: ["golden", "silver"],
      img: "https://shopon.pk/images/thumbnails/270/270/detailed/212/oppo-reno-12f-5g-pakistan-priceoye-i5ee8.jpg",
    },
    {
      name: "G-Shock Casio 08",
      price: "RS.600",
      fullName: "Oppo Reno 2F (128GB 8GB) Green - Official Warranty",
      category: "Women's Watch",
      color: ["golden", "silver"],
      img: "https://shopon.pk/images/thumbnails/270/270/detailed/40/funda_carbon_ultra_oppo_reno_2_01_negro_l.jpg",
    },
    {
      name: "G-Shock Casio 08",
      price: "RS.400",
      fullName: "Oppo A9 2020 (128GB 8GB) Green - Official Warranty",
      category: "Women's Watch",
      color: ["golden", "silver"],
      img: "https://shopon.pk/images/thumbnails/270/270/detailed/40/OppoA92020-b.jpg",
    },
    {
      name: "G-Shock Casio 08",
      price: "RS.500",
      fullName: "Apple iPhone 14 Pre Order 14 128 Non PTA",
      category: "Women's Watch",
      color: ["golden", "silver"],
      img: "https://shopon.pk/images/thumbnails/270/270/detailed/117/Apple-iPhone-14-Plus-6.jpg",
    },
    {
      name: "G-Shock Casio 08",
      price: "RS.200",
      fullName: "Apple iPhone 14 Plus Pre Order",
      category: "Women's Watch",
      color: ["golden", "silver"],
      img: "https://shopon.pk/images/thumbnails/270/270/detailed/117/Apple-iPhone-14-Plus.jpg",
    },
    {
      name: "G-Shock Casio 08",
      price: "RS.600",
      fullName: "Apple iPhone 14 Mini Pre Order",
      category: "Women's Watch",
      color: ["golden", "silver"],
      img: "https://shopon.pk/images/thumbnails/270/270/detailed/117/iPhone-14-Mini.jpg",
    },
  ];

  const brandImg = [
    {
      url: "https://shopon.pk/images/images/Playstation-card-from-shopon.jpg?1696679699501",
    },
    {
      url: "https://shopon.pk/images/images/Google-Play-gift-card.jpg?1696679747133",
    },
    {
      url: "https://shopon.pk/images/images/itune-gift-card.jpg?1696679797447",
    },
    {
      url: "https://shopon.pk/images/images/Amazon-gift-card.jpg?1696679866632",
    },
  ];
  const children = [
    {
      url: "https://shopon.pk/images/images/MEN.jpg?1708514603633",
    },
    {
      url: "https://shopon.pk/images/images/women.jpg?1708514692327",
    },
    {
      url: "https://shopon.pk/images/images/kids.jpg?1708514791762",
    },
    {
      url: "https://shopon.pk/images/images/dd.jpg?1708514896368",
    },
  ];

  const gameCards = [
    { url: "https://shopon.pk/images/promo/182/gaming-cards.jpg" },
    { url: "https://shopon.pk/images/promo/182/IPHONE-SALESS.jpg" },
  ];

  const popularGameCards = [
    { url: "https://shopon.pk/images/thumbnails/270/270/detailed/2/con1.jpg" },
    { url: "https://shopon.pk/images/thumbnails/270/270/detailed/12/t49.jpg" },
    {
      url: "https://shopon.pk/images/thumbnails/270/270/detailed/94/WhatsApp_Image_2021-10-16_at_3.04.06_PM.jpeg",
    },
    {
      url: "https://shopon.pk/images/thumbnails/270/270/detailed/94/WhatsApp_Image_2021-10-16_at_2.34.27_PM__1__68gq-rz.jpeg",
    },
    {
      url: "https://shopon.pk/images/thumbnails/270/270/detailed/94/WhatsApp_Image_2021-10-16_at_3.04.04_PM.jpeg",
    },
    {
      url: "https://shopon.pk/images/thumbnails/270/270/detailed/8/1__36_-1000x1000.jpg",
    },
  ];

  const sliderImageUrl2 = [
    {
      name: "G-Shock Casio 08",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName:
        "Casio Analog-Digital Black Dial Women’s Watch-BA-110RG-1ADR (BX157)",
      category: "Women's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://shopon.pk/images/thumbnails/300/270/detailed/176/5590-3.jpg",
    },
    {
      name: "G-shock Casio 09 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 09 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://shopon.pk/images/thumbnails/300/270/detailed/176/sdjs_1.jpg",
    },
    {
      name: "G-shock Casio 10 ",
      price: "$600",
      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://shopon.pk/images/thumbnails/300/270/detailed/176/4zu3_HP_Probook_645_G4.jpg",
    },
    {
      name: "G-shock Casio 11 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://shopon.pk/images/thumbnails/300/270/detailed/176/840-G5-4.jpg",
    },
    {
      name: "G-shock Casio 12 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://shopon.pk/images/thumbnails/300/270/detailed/176/P8agK8Aifu_r2rb-ok.jpg",
    },
    {
      name: "G-shock Casio 13 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://shopon.pk/images/thumbnails/300/270/detailed/176/P8agK8Aifu_r2rb-ok.jpg",
    },
  ];

  const subscriptionCard = [
    {
      name: "G-Shock Casio 08",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName:
        "Casio Analog-Digital Black Dial Women’s Watch-BA-110RG-1ADR (BX157)",
      category: "Women's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://shopon.pk/images/thumbnails/270/270/detailed/112/71oa5BlpV0L_98c1-km.jpg",
    },
    {
      name: "G-shock Casio 09 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 09 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://shopon.pk/images/thumbnails/270/270/detailed/112/71oa5BlpV0L_98c1-km.jpg",
    },
    {
      name: "G-shock Casio 10 ",
      price: "$600",
      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://shopon.pk/images/thumbnails/270/270/detailed/112/71oa5BlpV0L_pbc8-n4.jpg",
    },
    {
      name: "G-shock Casio 11 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://shopon.pk/images/thumbnails/270/270/detailed/112/download__12_.jpg",
    },
    {
      name: "G-shock Casio 12 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://shopon.pk/images/thumbnails/270/270/detailed/112/download__12__kfrd-ej.jpg",
    },
    {
      name: "G-shock Casio 13 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://shopon.pk/images/thumbnails/270/270/detailed/112/download__12__8rnm-9r.jpg",
    },
  ];

   const electronicItems = [
     {
       fullName: "G-Shock Casio 08",
       price: "Rs.88886",
       name: "VR Box Virtual Reality Version 3D Glasses Android Smartphone",
       img: "https://shopon.pk/images/thumbnails/300/270/detailed/253/Screenshot_20250302-091959.png",
     },
     {
       fullName: "G-Shock Casio 08",
       price: "Rs.77767",
       name: "Ecostar 40inch smart  led tv",
       img: "https://shopon.pk/images/thumbnails/300/270/detailed/139/15492060143e6a5a507dc420622ffc6e9b00a69c9d.jpg",
     },
     {
       fullName: "G-Shock Casio 08",
       price: "Rs.65767",
       name: "SAMSUNG 55AU9000U 55″ 4K SMART UHD LED TV",
       img: "https://shopon.pk/images/thumbnails/300/270/detailed/123/ezgif.com-gif-maker-8.jpg",
     },
     {
       fullName: "G-Shock Casio 08",
       price: "Rs.85767",
       name: "Sony LED TV KD-43X75",
       img: "https://shopon.pk/images/thumbnails/300/270/detailed/113/43X755.jpg",
     },
     {
       fullName: "G-Shock Casio 08",
       price: "Rs.61767",
       name: "Sony Full HD LED TV 50 Inch 50W660F",
       img: "https://shopon.pk/images/thumbnails/300/270/detailed/113/sss.jpg",
     },
     {
       fullName: "G-Shock Casio 08",
       price: "Rs.61767",
       name: "Sony HD LED TV 32 Inch 32R302E",
       img: "https://shopon.pk/images/thumbnails/300/270/detailed/113/32.jpg",
     },
     {
       fullName: "G-Shock Casio 08",
       price: "Rs.61767",
       name:
         "Electronic Instant Hot Water Tap | Instant Hot Water Tap For Kitchen and Washroom",
       img: "https://shopon.pk/images/thumbnails/270/270/detailed/149/61se8BZarSL.jpg",
     },
     {
       fullName: "G-Shock Casio 08",
       price: "Rs.61767",
       name:
         "Portable Cotton Candy Machine, Cotton Candy Maker, Mini Electric Sweet Machine",
       img: "https://shopon.pk/images/thumbnails/270/270/detailed/104/image_1024x1024_c19ea5f0-3b55-4165-97c1-0a2880386fad_360x.jpg",
     },
     {
       fullName: "G-Shock Casio 08",
       price: "Rs.61767",
       name:"MIDAS Water dispencer",
       img: "https://shopon.pk/images/thumbnails/270/270/detailed/146/gallery2.jpg",
     },
     {
       fullName: "G-Shock Casio 08",
       price: "Rs.61767",
       name: "DAWLANCE WASHING MACHINE DWT270 S LVS+",
       img: "https://shopon.pk/images/thumbnails/270/270/detailed/144/download_qdz4-yj.jpg",
     },
     {
       fullName: "G-Shock Casio 08",
       price: "Rs.61767",
       name: "SUPER ASIA GAS GEYSER GH535AI(AUTO IGNITION)",
       img: "https://shopon.pk/images/thumbnails/270/270/detailed/144/download_n2v2-91.jpg",
     },
     {
       fullName: "G-Shock Casio 08",
       price: "Rs.61767",
       name: "DAWLANCE HOB DHM 370 SN A SERIES",
       img: "https://shopon.pk/images/thumbnails/270/270/detailed/144/download_4xnf-js.jpg",
     },
     {
       fullName: "G-Shock Casio 08",
       price: "Rs.61767",
       name: "West Point Insect Killer WF-7112",
       img: "https://shopon.pk/images/thumbnails/270/270/detailed/20/westpoint_insect_killer_wf-7108_15000_2_6.jpg",
     },
     {
       fullName: "G-Shock Casio 08",
       price: "Rs.41767",
       name: "DW 131 HP Grilling Microwave Oven",
       img: "https://shopon.pk/images/thumbnails/270/270/detailed/144/10.jpg",
     },
     {
       fullame: "G-Shock Casio 08",
       price: "Rs.160000",
       name: "DW 131 HP Grilling Microwave Oven",
       img: "https://shopon.pk/images/thumbnails/270/270/detailed/113/mega_t_30.png",
     },
     {
       fullName: "G-Shock Casio 08",
       price: "Rs.160000",
       name: "Universal Stabilizer A16DT",
       img: "https://shopon.pk/images/thumbnails/270/270/detailed/59/a-16d-universal__16549_zoom.jpg",
     },
     {
       fullName: "G-Shock Casio 08",
       price: "Rs.160000",
       name: "DAWLANCE REFRIGERATOR 9178LF E-CHROME METALLIC GOLD",
       img: "https://shopon.pk/images/thumbnails/270/270/detailed/144/download_tkg8-ck.jpg",
     },
   ]; 
   const homeAndDecor = [
     {
       fullName: "G-Shock Casio 08",
       price: "Rs.88886",
       name: "Tijarat online Real Feel Artificial Grass 20MM (4*4 Foot) - Green",
       img: "https://shopon.pk/images/thumbnails/270/270/detailed/84/791d1b218a7031a53b50e71e5d5a0739.jpg",
     },
     {
       fullName: "G-Shock Casio 08",
       price: "Rs.77767",
       name: "Artifical Plants Set of 4 mini plant",
       img: "https://shopon.pk/images/thumbnails/270/270/detailed/84/ca08bcf7394bd53d4b079902f5062b73.jpg",
     },
     {
       fullName: "G-Shock Casio 08",
       price: "Rs.65767",
       name: "Artificial Flowers For Home Decoration Plant for Office Table Indoor Plant Home Decor Party Decore",
       img: "https://shopon.pk/images/thumbnails/270/270/detailed/83/c5f9a761931a392cb5bb51948825400e.jpg",
     },
     {
       fullName: "G-Shock Casio 08",
       price: "Rs.85767",
       name: "Courtyard Wooden Wall Clock - Wood/Wooden Wall Clock, Clock Wall - Clocks for Rooms - Clock Wall Stylish",
       img: "https://shopon.pk/images/thumbnails/270/270/detailed/86/e896078edc1035491da7b1b93302cf8b.jpg",
     },
     {
       fullName: "G-Shock Casio 08",
       price: "Rs.61767",
       name: "Wall Clock Wooden Effect Finish Wall Clock for Bedroom Good Quality",
       img: "https://shopon.pk/images/thumbnails/270/270/detailed/86/fd26b7957f67b1638286ae62fa990288.jpg",
     },
     {
       fullName: "G-Shock Casio 08",
       price: "Rs.61767",
       name: "The Ride Wooden Clock with Light - Wood/Wooden Wall Clock, Clock Wall - Clocks for Rooms - Clock Wall Stylishty",
       img: "https://shopon.pk/images/thumbnails/270/270/detailed/86/28e5978720e5f09d6cb603e48d02a101.jpg",
     },
     {
       fullName: "G-Shock Casio 08",
       price: "Rs.61767",
       name: "Kitchen Masala Jar Revolving 8-Piece Spice Rack Tower",
       img: "https://shopon.pk/images/thumbnails/270/270/detailed/104/Revolving-8-Pcs-Spice-Rack-Tower-Kitchen-Masala-Jar-rs-1500-_1_360x.jpg",
     },
     {
       fullName: "G-Shock Casio 08",
       price: "Rs.61767",
       name: "A kitchen hanging basket",
       img: "https://shopon.pk/images/thumbnails/270/270/detailed/104/1-_176_360x.jpg",
     },
     {
       fullName: "G-Shock Casio 08",
       price: "Rs.61767",
       name: "Glass Spice Jar Kitchen Tool Salt Box 3 pcs",
       img: "https://shopon.pk/images/thumbnails/270/270/detailed/104/dde953cc-29cd-47ce-84df-bf02d9aa6766_1_360x.jpg",
     },
     {
       fullName: "G-Shock Casio 08",
       price: "Rs.61767",
       name: "4PCS SATIN SILK BEDSHEET- ICE BLUE COLOR",
       img: "https://shopon.pk/images/thumbnails/270/270/detailed/137/4.JPG",
     },
   ]; 
  return (
    <>
      <MyNavbar />
      <Slider slider={slider} />
      <Brands />
      <Container>
        <Typography sx={{ color: "#808080" }} variant="h6">
          FLASH SALE
        </Typography>
      </Container>
      <Divider />
      <MyCarousel data={sliderImageUrl1} lg={4} md={3} sm={1} bg={"bg"} />
      <CenteredText text={"TRENDING GIFT CARDS"} linkText={"VIEW ALL"} />

      {/* brand cards */}
      {
        <div class="container">
          <Row className="row-gap-3 justify-content-between p-3">
            {brandImg.map((item, index) => {
              return (
                <Col
                  md={3}
                  sm={6}
                  key={index}
                  className="d-flex align-items-center justify-content-center p-0 pb-0"
                >
                  <BrandCard title={item.title} imgUrl={item.url} />
                </Col>
              );
            })}
          </Row>
        </div>
      }

      {/* game cards */}
      {
        <div class="container">
          <Row className="justify-content-center justify-content-lg-between">
            {gameCards.map((item, index) => {
              return (
                <Col
                  md={6}
                  sm={12}
                  key={index}
                  className="d-flex justify-content-center p-0"
                >
                  <BrandCard title={item.title} imgUrl={item.url} />
                </Col>
              );
            })}
          </Row>
        </div>
      }
      <CenteredText text={"MOBILE & ACCESSORIES"} linkText={"VIEW ALL"} />

      <MyCarousel data={sliderMobiles1} lg={5} md={3} sm={1} bg={""} />
      <MyCarousel data={sliderMobiles1} lg={5} md={3} sm={1} />

    

      {/* electronics */}
      {
        <div class="container my-3">
          <Row>
            <Col className="p-0 electronics">
              <BrandCard
                title={""}
                imgUrl={
                  "https://shopon.pk/images/promo/183/electronics-collection.jpg"
                }
              />
            </Col>
          </Row>
        </div>
      }

      <CenteredText text={"ELECTRONICS"} linkText={""} />

      {
        <div class="container py-2 px-0">
          <Row className="row-gap-3 justify-content-start p-3">
            {electronicItems.map((item, index) => {
              return (
                <Col
                  lg={2}
                  md={3}
                  sm={6}
                  key={index}
                  className="d-flex align-items-center justify-content-center p-0 pb-0"
                >
                  <NewCards title={item.name} imgUrl={item.img} price={item.price} index={index} />
                </Col>
              );
            })}
          </Row>
        </div>
      }
      {/* {
        <div class="container p-4">
          <Row className="row-gap-3 justify-content-start p-3">
            {homeAndDecor.map((item, index) => {
              return (
                <Col
                  lg={2}
                  md={3}
                  sm={6}
                  key={index}
                  className="d-flex align-items-center justify-content-center p-0 pb-0"
                >
                  <BrandCard title={item.name} imgUrl={item.img} />
                </Col>
              );
            })}
          </Row>
        </div>
      } */}

      <CenteredText text={"FASHION"} linkText={"VIEW ALL"} />

      {/* fashion banner */}
      {
        <div class="container my-3">
          <Row>
            <Col className="p-0 electronics">
              <BrandCard
                title={""}
                imgUrl={
                  "https://shopon.pk/images/images/summer-new-arrials.jpg?1708514544809"
                }
              />
            </Col>
          </Row>
        </div>
      }

      {/* children items cards */}
      {
        <div class="container">
          <Row className="row-gap-3 justify-content-between p-3">
            {children.map((item, index) => {
              return (
                <Col
                  md={3}
                  sm={6}
                  key={index}
                  className="d-flex align-items-center justify-content-center p-0 pb-0"
                >
                  <BrandCard title={item.title} imgUrl={item.url} />
                </Col>
              );
            })}
          </Row>
        </div>
      }
      {/* popular video game cards */}
      {
        <div class="container">
          <Row className="row-gap-3 justify-content-between p-3">
            {popularGameCards.map((item, index) => {
              // console.log(item.url);
              return (
                <Col
                  md={3}
                  lg={2}
                  sm={6}
                  key={index}
                  className="d-flex align-items-center justify-content-center p-0 pb-0"
                >
                  <BrandCard title={item.title} imgUrl={item.url} />
                </Col>
              );
            })}
          </Row>
        </div>
      }

      {/* creativity banner */}
      {
        <div class="container my-3">
          <Row>
            <Col className="p-0 electronics">
              <BrandCard
                title={""}
                imgUrl={
                  "https://shopon.pk/images/promo/183/laptop-new-sals.jpg"
                }
              />
            </Col>
          </Row>
        </div>
      }

      <MyCarousel data={sliderImageUrl2} lg={5} md={3} sm={1} />
      <MyCarousel data={sliderImageUrl2} lg={5} md={3} sm={1} />
      <CenteredText text={"DEALS OF THE WEEK"} linkText={""} />

      {/* subscription cards */}
      <MyCarousel data={subscriptionCard} lg={6} md={4} sm={1} />

      {/* decorating banner */}
      {
        <div class="container my-3">
          <Row>
            <Col className="p-0 electronics">
              <BrandCard
                title={""}
                imgUrl={"https://shopon.pk/images/promo/183/decore-roome.jpg"}
              />
            </Col>
          </Row>

          <CenteredText text={"HOME & DECOR"} linkText={""} />
        </div>
      }

      {/* children items cards */}
      {
        <div class="container p-4">
          <Row className="row-gap-3 justify-content-start p-3">
            {homeAndDecor.map((item, index) => {
              return (
                <Col
                  lg={2}
                  md={3}
                  sm={6}
                  key={index}
                  className="d-flex align-items-center justify-content-center p-0 pb-0"
                >
                  <NewCards title={item.name} imgUrl={item.img} price={item.price} />
                </Col>
              );
            })}
          </Row>
        </div>
      }

      {/* footer */}
      <Footer />
    </>
  );
}

export default App;
