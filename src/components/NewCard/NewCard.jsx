import Card from "react-bootstrap/Card";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const NewCards = ({ title, imgUrl, price, index }) => {
  console.log(title,index)
  return (
    <>
      <Card className="mx-2 py-1 slider" key={index}>
        <Card.Img variant="top" className="img-fluid" src={imgUrl} />
        <Card.Body className="px-2">
          <Rating name="simple-controlled" value={0} size="small" readOnly />

          
          <Card.Text style={{ fontSize: ".68rem" }}>{title}</Card.Text>
          <Typography variant="span" component={"p"} sx={{ color: "#FCAE33" }}>
            {price}
          </Typography>
        </Card.Body>
      </Card>
    </>
  );
};

export default NewCards;
