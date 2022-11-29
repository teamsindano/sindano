'use strict';

let nodemailer = require('nodemailer');
const axios = require('axios');

module.exports.authorize = async (event) => {
  const body = JSON.parse(Buffer.from(event.body, 'base64').toString());
  try {
    const result = await axios.post(
      'https://www.linkedin.com/oauth/v2/accessToken',
      {},
      {
        params: {
          grant_type: 'authorization_code',
          code: body.code,
          // TODO: Replace this client_id (temp replaced)
          client_id: '78i0gitxfdiyau',
          client_secret: process.env.CLIENT_SECRET,
          redirect_uri: 'https://pstaal.github.io/sindano/linkedin',
        },
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify(result.data, null, 2),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(
        {
          message: 'An error occurred',
          input: event,
          error,
        },
        null,
        2
      ),
    };
  }
};

module.exports.contact = async (event) => {
  const body = JSON.parse(Buffer.from(event.body, 'base64').toString());
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'peter.staal@gmail.com',
      pass: 'kbglbrfcwlmeqrso',
    },
  });

  const mailOptions = {
    from: body.email,
    to: 'peter.staal@gmail.com',
    subject: `${body.name} from ${body.company} wants to schedule a call`,
    text: `Please schedule a call with ${body.name}, ${body.title} from ${body.company} as soon as possible.
         Please use this email: ${body.email}
        `,
  };

  const statusCode = await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(500);
      } else {
        resolve(200);
      }
    });
  });

  return {
    statusCode,
  };
};
