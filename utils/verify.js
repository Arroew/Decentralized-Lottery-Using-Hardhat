const { run } = require("hardhat");

const verify = async (contractAddress, agrs) => {
  console.log("Verifying Contract..");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: agrs,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified!");
    } else {
      console.log(e);
    }
  }
};
module.exports = { verify };
