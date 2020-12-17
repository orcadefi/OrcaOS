import Web3 from "web3";

const getWeb3 = () =>
  new Promise((resolve, reject) => {
    let web3 = window.web3;

    if (typeof web3 !== "undefined") {
      web3 = new Web3(web3.currentProvider);
      resolve(web3);
    } else {
      reject("Please make sure MetaMask is installed.");
    }
  });

export default getWeb3;
