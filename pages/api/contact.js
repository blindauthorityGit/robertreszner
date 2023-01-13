// import nodemailer from "nodemailer";
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

// const path = require("path");
// const fs = require("fs");

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    const { firstName, name, email, message, phone } = req.body;

    // const transporter = nodemailer.createTransport({
    //     host: "smtp.gmail.com",
    //     port: 465,
    //     secure: false,
    //     service: "gmail",

    //     auth: {
    //         user: process.env.NEXT_USER,
    //         pass: process.env.NEXT_PASSWORD_SCHARTMUELLER,
    //     },
    // });
    const transporter = nodemailer.createTransport(
        sendgridTransport({
            auth: {
                api_key: "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",
            },
        })
    );

    if (!firstName) {
        try {
            const emailRes = transporter.sendMail({
                from: "johabuch@gmail.com",
                // to: "contacts@german-cosmetics.de",
                to: "office@atelierbuchner.at",
                // to: `${process.env.NEXT_DEV === "true" ? "office@atelierbuchner.at" : "contact@schartmueller.com"}`,
                subject: `Email von ${name}`,
                replyTo: email,
                html: `<p><strong>Name:</strong> ${name}</p> <p><strong>Email:</strong> ${email}</p> <p><strong>Telefon:</strong> ${phone}</p> <p><strong>Nachricht:</strong> ${message}</p>`,
            });

            console.log(
                "Message Sent",
                process.env.NEXT_DEV,
                process.env.NEXT_USER,
                process.env.NEXT_PASSWORD_SCHARTMUELLER,
                "bubu"
            );
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
