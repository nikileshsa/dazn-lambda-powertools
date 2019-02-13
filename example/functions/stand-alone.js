const Log = require('@perform/lambda-powertools-logger')
const wrap = require('@perform/lambda-powertools-pattern-basic')

module.exports.handler = wrap(async (event, context) => {
  Log.debug('finding the answer to life, the universe and everything...')
  return { answer: 42 }
})
