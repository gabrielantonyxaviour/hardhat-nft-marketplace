const { network, ethers } = require("hardhat")
const { moveBlocks } = require("../utils/move-blocks")

async function mint() {
    const basicNft = await ethers.getContract("BasicNft")
    const tx = await basicNft.mintNft()
    const mintTxReceipt = await tx.wait(1)
    console.log("NFT minted")
    console.log(
        `Minted tokenId ${mintTxReceipt.events[0].args.tokenId.toString()} from contract: ${
            basicNft.address
        }`
    )

    if ((network.config.chainId = "31337")) {
        await moveBlocks(2, (sleepAmount = 1000))
    }
}

cancelItem()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
