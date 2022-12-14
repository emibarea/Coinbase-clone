import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Main from "../components/Main";
import Side from "../components/Side";
import { ethers } from "ethers";
import { ThirdwebSDK } from "@3rdweb/sdk";
const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.NEXT_PUBLIC_METAMASK_KEY,
    ethers.getDefaultProvider(
      "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
    )
  )
);

const Dashboard = ({ address }) => {
  const [sanityTokens, setSanityTokens] = useState([]);
  const [thirdWebTokens, setThirdWebTokens] = useState([]);
  useEffect(() => {
    const getSanityAndThirdWebTokens = async () => {
      const coins = await fetch(
        "https://ek140gsh.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D'coins'%5D%7B%0A%20%20name%2C%0A%20%20usdprice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%2C%0A%7D"
      );
      const sanityTokensO = (await coins.json()).result;
      console.log("ACA", sdk);
      setSanityTokens(sanityTokensO);
      setThirdWebTokens(
        sanityTokens.map((token) => sdk.getTokenModule(token.contractAddress))
      );
    };
    getSanityAndThirdWebTokens();
  }, []);
  return (
    <Wrapper>
      <Side />
      <MainContainer>
        <Header
          walletAddress={address}
          sanityTokens={sanityTokens}
          thirdWebTokens={thirdWebTokens}
        />
        <Main
          walletAddress={address}
          sanityTokens={sanityTokens}
          thirdWebTokens={thirdWebTokens}
        />
      </MainContainer>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  backgound-color: #0a0b0d;
  color: white;
  overflow: hidden;
`;
const MainContainer = styled.div`
  flex: 1;
`;
