import { ethers } from "hardhat";

async function main() {
  const a = await ethers.deployContract("A");
  const b = await ethers.deployContract("B");

  await a.waitForDeployment();
  await b.waitForDeployment();

  console.log(
    `A deployed to ${a.target}`
  );

  console.log(
    `B deployed to ${b.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
