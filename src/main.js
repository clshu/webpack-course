require('./main.css')
require('./images/link.jpg')
require('./index.html')

const a = async args => {
  const { x, y } = args
  await console.log(`Hello Babel! ${x} ${y}`)
  console.log('More')
}

a({ x: 1, y: 2 })
