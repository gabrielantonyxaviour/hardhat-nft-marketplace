const { moveBlocks } = require("../utils/move-blocks")

async function minte() {
    moveBlocks(5, (sleepAmount = 1000))
}

mine()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
