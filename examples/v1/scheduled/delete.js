"use strict";
require('dotenv').config()

const MailerSend = require("../../../src/MailerSend");

const mailersend = new MailerSend({
  api_key: process.env.API_KEY,
});

mailersend.deleteSchedule({
  message_id: 'xxx'
});
