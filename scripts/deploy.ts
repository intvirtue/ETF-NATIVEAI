import { ethers } from "hardhat";

async function main() {
  const router = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'

  const FundFactory = await ethers.getContractFactory("FundFactory");
  const fundFactory = await FundFactory.deploy(router);

  await fundFactory.deployed();

  console.log(`deployed to ${fundFactory.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
