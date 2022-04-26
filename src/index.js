const fs = require('fs')

console.log('lets generate a bunch of random files for eslint to lint!')

fs.readFile('./someJs.js', (err, data) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  const someJS = data.toString()
  for (let i = 0; i < 100; i++) {
    fs.writeFile(`./test-file${Math.random()}.js`, someJS, (err) => {
      console.error(err)
    })
  }
})
