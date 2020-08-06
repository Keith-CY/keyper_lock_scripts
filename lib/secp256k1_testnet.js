const { Secp256k1LockScript } = require('@keyper/container/lib/locks/secp256k1')

const CODE_HASH = '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8'
const HASH_TYPE = 'type'
const TX_HASH = '0xf8de3bb47d055cdf460d93a2a6e1b05f7432f9777c8c474abf4eec1d4aee5d37'
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

script.name = 'secp256k1(testnet)'

module.exports = script
