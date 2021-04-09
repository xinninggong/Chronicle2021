const express = require('express')
const app = express();
const port = process.env.PORT || 8080

app.use(express.json())

app.all('*', (req, res) => {  // 'default' route to catch user errors
	res.status(404).send('<p>invalid request</p>')
})

app.listen(port, () => {
	console.log('Listening ...')
})
