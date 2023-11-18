require("hardhat");

async function main() {
  const Persona = await ethers.deployContract("Persona");
  const persona = await Persona.waitForDeployment();
 

  const Account = await ethers.deployContract("ERC6551Account");
  const account = await Account.waitForDeployment();

  const Registry = await ethers.deployContract("ERC6551Registry");
  const registry = await Registry.waitForDeployment();

  console.log("Persona contract deployed at:", persona.target);
  console.log("Account contract deployed at:", account.target);
  console.log("Registry contract deployed at:", registry.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
