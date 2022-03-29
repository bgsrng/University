const express = require('express');
const cors = require('cors');
const { clubRoutes, mahasiswaRoutes, matakuliahRoutes, dosenRoutes, fakultasRoutes } = require('./routes');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

app.use('/', clubRoutes);
app.use('/', mahasiswaRoutes);
app.use('/', matakuliahRoutes);
app.use('/', dosenRoutes);
app.use('/', fakultasRoutes);

app.listen(PORT, () => {
  console.log('listening in port', PORT);
});
