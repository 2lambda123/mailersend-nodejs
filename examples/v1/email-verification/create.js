"use strict";
require("dotenv").config();

const MailerSend = require("../../src/MailerSend");

const mailersend = new MailerSend({
  api_key: process.env.API_KEY,
});

mailersend.createEmailVerificationList({
  name: "List example",
  emails: [
    "info@mailersend.com",
    "test@mailersend.com"
  ]
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
