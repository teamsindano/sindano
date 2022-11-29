const router = require('express').Router();
let nodemailer = require('nodemailer');
const axios = require('axios');


router.post('/', (req, res) => {
    console.log(req.body);
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'peter.staal@gmail.com',
        pass: 'kbglbrfcwlmeqrso',
      },
    });
  
    const mailOptions = {
      from: req.body.email,
      to: 'peter.staal@gmail.com',
      subject: `${req.body.name} from ${req.body.company} wants to schedule a call`,
      text: `Please schedule a call with ${req.body.name}, ${req.body.title} from ${req.body.company} as soon as possible.
           Please use this email: ${req.body.email}
          `,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    });
});

router.post('/authorize', (req, res) => {
    axios
      .post(
        'https://www.linkedin.com/oauth/v2/accessToken',
        {},
        {
          params: {
            grant_type: 'authorization_code',
            code: req.body.code,
            // TODO: Replace this client_id (temp replaced)
            client_id: '78i0gitxfdiyau',
            client_secret: process.env.CLIENT_SECRET,
            redirect_uri: 'https://pstaal.github.io/sindano/linkedin',
          },
        }
      )
      .then(({ data }) => {
        res.send(data);
      })
      .catch((err) => res.status(500).send(err));
  });


module.exports = router;