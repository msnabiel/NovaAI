const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/apiRoutes');
const config = require('./config');


require('./db');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
console.log("Mounting API routes...");
app.use('/api', apiRoutes);

const port = config.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
