"use strict";
require('dotenv').config()

const MailerSend = require("../../../src/MailerSend");

const mailersend = new MailerSend({
  api_key: process.env.API_KEY,
});

mailersend.updateSmsNumber({
  sms_number_id: 'xxx',
  paused: false
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
