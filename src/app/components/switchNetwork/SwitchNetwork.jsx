import { Button } from '@mui/material'
import React from 'react'
import { switchNetwork } from '../../utils/utils';
import { ARBI_TESTNET_CHAIN_ID } from '../../utils/constants';
const changeNetwork = async () => {
    switchNetwork(ARBI_TESTNET_CHAIN_ID);
  };
function SwitchNetwork() {
  return (
    <div className="centerdiv">
    {" "}
    <h3>
      {" "}
      Your are on wrong network Please switch to ARBITRUM TESTNET
    </h3>{" "}
    <Button onClick={changeNetwork} variant="contained">
      {" "}
      switch to Testnet
    </Button>
  </div>
  )
}

export default SwitchNetwork