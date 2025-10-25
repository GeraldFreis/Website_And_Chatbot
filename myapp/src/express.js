// server.js
import express from 'express';

const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Hello from Express server!');
});

// app.get('/MLmodel', (req, res) => {
//     res.send()
// });

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));