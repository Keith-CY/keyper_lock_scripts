const { AnyPayLockScript } = require('@keyper/container/lib/locks/anyone-can-pay')

const CODE_HASH = '0x86a1c6987a4acbe1a887cca4c9dd2ac9fcb07405bbeda51b861b18bbf7492c4b'
const HASH_TYPE = 'type'
const TX_HASH = '0x4f32b3e39bd1b6350d326fdfafdfe05e5221865c3098ae323096f0bfc69e0a8c'
const INDEX = '0x0'
const DEP_TYPE = 'depGroup'

const script = new AnyPayLockScript(CODE_HASH, HASH_TYPE, [
  {
    outPoint: {
      txHash: TX_HASH,
      index: INDEX,
    },
    depType: DEP_TYPE,
  },
])

script.name = 'anyone can pay(testnet)'

module.exports = script
