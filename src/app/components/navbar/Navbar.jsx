import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Navbar.css";
import {  useConnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../utils/context-provider";
import { connectToWallet } from "../../utils/load-contracts";
import {GOVT_ADDR} from '../../utils/constants'

export default function ButtonAppBar() {
  const { address, setAddress } = useContext(Context);
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const disConnect = () => {
    setAddress(undefined);
  };
  const connectWallet = async () => {
    var acc = await window.ethereum.request({ method: "eth_accounts" });
    console.log(acc)
    if (acc[0] !== undefined) {
      setAddress(acc[0]);
      return;
    }
    const addr = await connectToWallet();

    setAddress(addr[0]);
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
              CRYPTO STATE
            </Typography>
            <Link color="inherit" className="links" to="/">
              <Button color="inherit">Home</Button>
            </Link>
            <Link color="inherit" className="links" to="/properties">
              <Button color="inherit">Properties</Button>
            </Link>
            {address === GOVT_ADDR &&  <Link className="links" to="/Register">
                <Button color="inherit">Register</Button>
              </Link>}

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            
            {address !== undefined ? (
              <div>
                Connected to {address.slice(1,10).toString()}
                <Button variant="contained" onClick={disConnect}>
                  Disconnect
                </Button>
              </div>
            ) : (
              <Button variant="contained" onClick={connectWallet}>
                Connect Wallet
              </Button>
            )}
          </Toolbar>
        </AppBar>
     </Box>
  );
}