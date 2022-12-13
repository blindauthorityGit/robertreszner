// import nodemailer from "nodemailer";
const nodemailer = require("nodemailer");

// const path = require("path");
// const fs = require("fs");

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    const { firstName, name, email, message, phone } = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.NEXT_USER,
            pass: process.env.NEXT_PASSWORD_DEV,
        },
    });

    if (!firstName) {
        try {
            const emailRes = transporter.sendMail({
                from: email,
                // to: "contacts@german-cosmetics.de",
                to: `${process.env.NEXT_DEV === "true" ? "office@atelierbuchner.at" : "contact@schartmueller.com"}`,
                subject: `Email von ${name}`,
                replyTo: email,
                html: `<p><strong>Name:</strong> ${name}</p> <p><strong>Email:</strong> ${email}</p> <p><strong>Telefon:</strong> ${phone}</p> <p><strong>Nachricht:</strong> ${message}</p>`,
            });

            console.log("Message Sent", emailRes.messageId, process.env.NEXT_DEV);
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