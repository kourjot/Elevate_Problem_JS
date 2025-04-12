const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();


const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 4, 
  message: {
    status: 429,
    error: 'Too many requests. Please try again after an hour.'
  },
});


app.use(limiter);

app.get('/', (req, res) => {
  res.send('Hello! You are within the rate limit.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
