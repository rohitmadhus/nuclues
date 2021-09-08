"use strict";
const nodemailer = require("nodemailer");


async function mail(config,meta) {

    const transporter = nodemailer.createTransport({
        host: config.host,
        port: config.port,
        auth: {
            user: config.user,
            pass: config.pass
        }
    });

var phone = meta.phone ? `\nPhone : ${meta.phone}` : "";
var body = meta.body ? meta.body.concat(phone) : phone;

  let info = await transporter.sendMail({
    from: `${meta.name || ""} " <${meta.from}>"`, // sender address
    to: `${meta.to}`, // list of receivers
    subject: `${meta.subject || ""}`, // Subject line
    text: `${body}`, // plain text body
    html: `${meta.html || ""}`, // html body
  });

  console.log("Message sent: %s", info.messageId);
}


module.exports = mail;