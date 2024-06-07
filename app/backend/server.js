const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const admin = require('./config');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Import routes
const formRoutes = require('./routes/forms');

app.use('/api/forms', formRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor em execução na porta ${PORT}`);
});
