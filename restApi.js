import fetch from 'node-fetch';

function getEtherscanData() {
  fetch('https://api.etherscan.io/api?module=logs&action=getLogs&fromBlock=379224&toBlock=latest&address=0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D&topic0=0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef&apikey=HJB55RQMQZZEKDGZWUDJMJ3V3G2DMDUHKA')
    .then(res => res.json())
    .then(json => {
        console.log("First user in the array:");
        console.log(json);
});
}

getEtherscanData();

