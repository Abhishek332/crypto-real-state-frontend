import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Register.css";
import { ethers } from "ethers";

import { create as ipfsHttpClient } from "ipfs-http-client";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { LocalConvenienceStoreOutlined, PermMedia } from "@mui/icons-material";
import { Grid, TextField } from "@mui/material";
import { setstate } from "../../ContextApi/Contextapi";
const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");
function Register() {
  const [price, setprice] = useState();
  const [city, setcity] = useState();

  const [etherAddress, setetherAddress] = useState();

  const [placeaddress, setplaceaddress] = useState();

  const [url, seturl] = useState();
  const [image, setimage] = useState();
  const [forsell, setforsell] = useState(false);
  const { contract, account } = useContext(setstate);
  const handle = async (e) => {
    const file = e.target.files[0];
    try {
      // here we are going to upload file to ipfs
      const added = await client.add(file, {
        progress: (prog) => console.log("recevied:", { prog }),
      });
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      setimage(url);
      console.log(url);
    } catch (error) {}
  };

  const createItem = async (e) => {
    e.preventDefault();
    const data = JSON.stringify({
      city: city,
      place: placeaddress,
      image: image,
    });
    console.log(data);
    try {
      // here we are going to upload file to ipfs
      const added = await client.add(data);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;

      // createSell(url);
    } catch (error) {
      console.log(error);
    }
  };
  const createSell = async (e) => {
    e.preventDefault();  
    let listingPrice = await contract.methods.getListingPrice().call();    
    let consts = await contract.methods
      .mintCryptoState(city, url, price, placeaddress, etherAddress, forsell)
      .send({ from: account, value: listingPrice });
    console.log(consts);

    // router.push("/properties");
  };

  return (
    <section class="contact">
      <Typography gutterBottom variant="h3" align="center" color={"white"}>
        Crypto-State
      </Typography>
      <Grid margin={"10%"}>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Secure Your Dreams With crypto State
            </Typography>

            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter City name"
                    label="City"
                    variant="outlined"
                    fullWidth
                    required
                    value={city}
                    onChange={(e) => setcity(e.target.value)}
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    type="number"
                    placeholder="Enter price"
                    value={price}
                    onChange={(e) => setprice(e.target.value)}
                    label="Price"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={etherAddress}
                    onChange={(e) => setetherAddress(e.target.value)}
                    placeholder="Enter Ethereum Address"
                    label="owner Address"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>{" "}
                <Grid item xs={12}>
                  <TextField
                    placeholder="Want to put on salle"
                    label="for salle"
                    multiline
                    variant="outlined"
                    fullWidth
                    required
                    value={forsell}
                    onChange={(e) => setforsell(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <label htmlFor="id" className="shareoptin">
                    <PermMedia htmlColor="blue" className="Share__icon" />
                    <span className="shareoptin__text">
                      upload Property photo
                    </span>
                    <input
                      style={{ display: "none" }}
                      type="file"
                      id="id"
                      accept=".png ,.jpeg,.jpg"
                      onChange={handle}
                    />
                  </label>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    placeholder="Enter place Address"
                    label="Place Address"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    required
                    value={placeaddress}
                    onChange={(e) => setplaceaddress(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={createSell}
                  >
                    Register
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </section>
  );
}

export default Register;
