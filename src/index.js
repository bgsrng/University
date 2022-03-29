const express = require('express');
const cors = require('cors');
const {} = require('./routes');
const app = express();
const dotenv = require('dotenv');

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT;

app.use('/', productRoutes);
app.use('/', titanicRoutes);

app.listen(PORT, () => {
  console.log('listening in port', PORT);
});
