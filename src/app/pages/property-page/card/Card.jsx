import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Card.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
export default function MediaCard({ pro }) {
  console.log("data", pro)
  return (
    <div className="Card">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={pro?.tokenURI}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h6" color="text.secondary">
            Owner:{pro?.owner}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Price:
            {pro?.price} ETH
          </Typography>
          <Typography variant="h6" csolor="text.secondary">
            Place:{pro?.placename}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            to="/moreInfo"
            state= {{
              owner: pro?.owner,
              price: pro?.price,
              Place: pro?.placename,
              Image: pro?.tokenURI,
              address: pro?.place,
              oldowner: pro?.oldOwener,
              tokenId: pro?.tokenId,
              forSale:pro?.forSale
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
