import { createTransport } from "nodemailer";

export const sendMail= async (email, subject, text) => {
  const transport = createTransport({
    host:"smtp.gmail.com",
    port:465,
    auth: {
      user:"tapasviarora2003@gmail.com",
      pass:"uiwngznsfhypdtyg",
    },
  });

  await transport.sendMail({
    from:"tapasviarora2003@gmail.com",
    to: email,
    subject,
    text,
  });
};