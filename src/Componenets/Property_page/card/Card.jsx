import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import "./Card.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
export default function MediaCard({ pro }) {
  console.log(pro);
  const info = {
    owner: "0xE11BA2b4D45Eaed5996Cd0823791E0C93114882d",
    price: 10,
    place: "Bhopal",
    address: "bhopal gandhi Nager 12.o",
  };

  return (
    <div className="Card">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Owner:{pro?.owner}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price:
            <AttachMoneyIcon className="monye" />
            {pro?.price}
          </Typography>
          <Typography variant="body2" csolor="text.secondary">
            Place:{pro?.placename}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            to={{
              pathname: "/moreInfo",
              state: {
                owner:pro?.owner,
                price: pro?.price,
                Place:pro?.placename,
                Image:pro?.tokenURI,
                adress: pro?.place,
                oldowner:pro?.oldOwener,
                tokenId:pro?.tokenId,
                
              },
            }}
          >
            <Button size="small" className="likns">
              {" "}
              More Info <ArrowForwardIosIcon className="monye" />
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
