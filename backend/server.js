const axios = require("axios");
const express = require("express");
const cors = require("cors");
const app = express();
let nodemailer = require("nodemailer");

require("dotenv").config();

const { PORT = 3001 } = process.env;
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/", (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "peter.staal@gmail.com",
      pass: "kbglbrfcwlmeqrso",
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: "peter.staal@gmail.com",
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

app.post("/authorize", (req, res) => {
  axios
    .post(
      "https://www.linkedin.com/oauth/v2/accessToken",
      {},
      {
        params: {
          grant_type: "authorization_code",
          code: req.body.code,
          // TODO: Replace this client_id
          client_id: "86ad8izfkr32h5",
          client_secret: process.env.CLIENT_SECRET,
          redirect_uri: "http://localhost:3000/linkedin",
        },
      }
    )
    .then(({ data }) => {
      res.send(data);
    })
    .catch((err) => res.status(500).send(err));
});

app.listen(PORT, () => {
  // if everything works fine, the console will show which port the application is listening to
  console.log(`App listening at port ${PORT}`);
});
