const hre = require('hardhat');

async function main() {
    const CampaignFactory = await hre.ethers.getContractFactory("Help_together_store")
    const campaignFactory = await  CampaignFactory.deploy();
    await campaignFactory.deployed();
    console.log("factory deployed to :" , campaignFactory.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.log(error);
      process.exit(1);
    });