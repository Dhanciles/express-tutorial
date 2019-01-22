const express = require('express');
const mockData = require('./mockData.js'); 
const app = express();
const urlLogger = (request, response, next) => {
	console.log('Request URL:', request.url);  
	next(); 
}; 

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

app.use(express.static('public'));
app.use(urlLogger, timeLogger)

app.get('/json', (request, response) => {
	response.status(200).json(mockData);
}); 

app.get('/sunsets', (request, response) => {
  	response.status(200).send('public/sunsets.html')
})

app.listen(3000, () => {
	console.log('Express intro running on localhost:3000')
});

app.use((request, response, next) => {
	resonse.status(404).send('public/error.html')
}); 
