// import nodemailer from "nodemailer";
const nodemailer = require("nodemailer");

// const path = require("path");
// const fs = require("fs");

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    const { firstName, name, email, message, phone } = req.body;

    const transporter = nodemailer.createTransport({
        // host: "smtp.gmail.com",
        host: "smtp.world4you.com",
        port: 587,
        secure: false,
        // tls: {
        //     maxVersion: "TLSv1.3",
        //     minVersion: "TLSv1.2",
        //     ciphers: "TLS_AES_128_GCM_SHA256",
        // },
        auth: {
            user: process.env.NEXT_USER_PRODUCTION,
            pass: process.env.NEXT_PASSWORD_PRODUCTION,
        },
    });

    if (!firstName) {
        try {
            const emailRes = transporter.sendMail({
                from: "contact@schartmueller.com",
                // to: "contacts@german-cosmetics.de",
                to: "johabuch@gmail.com",
                // to: `${process.env.NEXT_DEV === "true" ? "office@atelierbuchner.at" : "contact@schartmueller.com"}`,
                subject: `Email von ${name}`,
                replyTo: email,
                html: `<p><strong>Name:</strong> ${name}</p> <p><strong>Email:</strong> ${email}</p> <p><strong>Telefon:</strong> ${phone}</p> <p><strong>Nachricht:</strong> ${message}</p>`,
            });

            console.log("Message Sent", emailRes.messageId, process.env.NEXT_DEV, to);
            res.status(200).json(req.body);
        } catch (err) {
            console.log("GEHT NET", err);
        }
    } else {
        res.status(403).json(req.body);
    }
    // });

    console.log(req.body, "HALLO");
};
