const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.get('/', (req, res) => {
  res.send('Hello World!')
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end()
})

app.get('/frank', (req, res) => res.send('jonson'))

app.get('/xxx', (req, res)=>{
  let p = path.join(__dirname, './index.html')
  res.sendFile(p)
})

// 不自己写路由就这样写
app.use('/static', express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))