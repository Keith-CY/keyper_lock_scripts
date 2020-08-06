const { Secp256k1LockScript } = require('@keyper/container/lib/locks/secp256k1')

const CODE_HASH = '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8'
const HASH_TYPE = 'type'
const TX_HASH = '0x71a7ba8fc96349fea0ed3a5c47992e3b4084b031a42264a018e0072e8172e46c'
const INDEX = '0x0'
const DEP_TYPE = 'depGroup'

const script = new Secp256k1LockScript(CODE_HASH, HASH_TYPE, [
  {
    outPoint: {
      txHash: TX_HASH,
      index: INDEX,
    },
    depType: DEP_TYPE,
  },
])

script.name = 'secp256k1(mainnet)'

module.exports = script
