const hre = require("hardhat");

async function main() {
  const sudokuVerifier = await hre.ethers.deployContract("SudokuVerifier");
  await sudokuVerifier.waitForDeployment();
  console.log("SudokuVerifier Contract deployed to:", sudokuVerifier.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
