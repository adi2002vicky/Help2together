const   Help_together_store = require("./artifacts/contracts/Help_together.sol/Help_together_store.json");
const { ethers } = require("ethers");
require("dotenv").config({ path: "./.env.local" });

const main = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      process.env.NEXT_PUBLIC_RPC_URL
    );

    const contract = new ethers.Contract(
      process.env.NEXT_PUBLIC_ADDRESS,
        Help_together_store.abi,
      provider
    );

    const getDeployedCampaign = contract.filters.help_together_event(null, 'Health',null,null,null,null,null);
    let events = await contract.queryFilter(getDeployedCampaign);
    let event = events.reverse();
    console.log(event);
};

main();