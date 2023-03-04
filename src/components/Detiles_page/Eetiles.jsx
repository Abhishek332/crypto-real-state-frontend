import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useLocation } from "react-router";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import PlusOneOutlinedIcon from "@mui/icons-material/PlusOneOutlined";
import { Button } from "@mui/material";
import { Context } from "../../utils/context-provider";
import { ethers } from "ethers";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const { contractInstance, address } = React.useContext(Context);

  const [expanded, setExpanded] = React.useState(false);
  const loaction = useLocation();
  const state = loaction.state;
  console.log(loaction.state);
  let forsale = loaction.state.forSale;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const putonSale = async (e) => {
    e.preventDefault();
    let consts = await contractInstance.methods
      .toggleForSale(loaction.state?.tokenId)
      .send({ from: address });
  };
  const chnagePrice = async (e) => {
    e.preventDefault();
    let listingPrice = await contractInstance.methods.getListingPrice().call();
    let p = loaction.state?.price / 2;
    const price = ethers.utils.parseUnits(p.toString(), "ether");
    let consts = await contractInstance.methods
      .changeTokenPrice(loaction.state?.tokenId, price)
      .send({ from: address, value: listingPrice });
  };
  const buyItem = async (e) => {
    e.preventDefault();

    const price = ethers.utils.parseUnits(
      loaction.state?.price.toString(),
      "ether"
    );
    let consts = await contractInstance?.methods
      .buyToken(loaction.state?.tokenId)
      .send({ from: address, value: price });
  };
  return (
    <div className="bg_coloer">


    <div className="center_div">
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar aria-label="recipe"></Avatar>}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={state.owner}
        />
        <CardMedia
          component="img"
          height="194"
          image={state.Image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="h6" color="text.secondary">
            place : {state.Place},{state.address}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            price : {state.price + "ETH"}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            owner : {state.owner}
          </Typography>
        </CardContent>

        {state.owner.toLowerCase() === address ? (
          <CardActions disableSpacing>
            <Button className="btn" variant="outlined" onClick={chnagePrice}>Incress Price</Button>
           
           <Button  className="btn" variant="outlined" onClick={putonSale}>
             {" "}
             {state.forSale ? "remove From sale" : "put on sale"}
           </Button>

         
          </CardActions>
        ) : (
          <CardActions disableSpacing>
            {state.forSale  ? (
              <Button variant="outlined" onClick={buyItem}>BUY</Button>
            ) : (
              <Typography paragraph>Not for sale</Typography>
            )}
          </CardActions>
        )}
      </Card>
      
    </div>
    </div>
  );
}
