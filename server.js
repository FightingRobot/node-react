const express = require('express')
const config = require('config')
// const mongoose = require('mongoose')

const app = express()

// app.use('/api/auth', require('./routes/auth.routes'));

// const PORT = config.get('port') || 5000;
const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
const ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

async function start() {
  try {
    // app.listen(PORT, () => {
    //   console.log('App is running')
    // })
    app.listen(port, ip);
  } catch (e) {
    console.log('Error ', e.message);
    process.exit(1);
  }
}

start();

module.exports = app;
