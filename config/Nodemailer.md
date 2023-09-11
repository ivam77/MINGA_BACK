Documentación para el código de nodemailer
Este código se utiliza con la finalidad de enviar correos electrónicos desde una cuenta de Gmail a un usuario de manera que dicho email pueda ser verificado y evitar la duplicidad de cuentas repetidas o inválidas.

Funciona de la siguiente manera:

Se crea un objeto transporter usando nodemailer.createTransport con la configuración de SMTP para Gmail. Se usan las variables de entorno EMAIL y EMAIL_PASS para autenticarse con la cuenta de Gmail. Nota: para este paso el EMAIL Y EMAIL_PASS tienes que crearlos, los pasos son:
Devuelve la variable infoEmail que contiene información sobre el correo electrónico enviado.

Nota:
import nodemailer from 'nodemailer' se importa en donde se crea el transport en este caso en nodemailer.js y lo unico que se debe de importar para usar el envio de emails es createEmailTransporter donde se requiera y siempre enviarle un usuario el cual debe de contener al menos el email. Como se muestra a continuación:

import nodemailer from 'nodemailer'

async function createEmailTransporter (user) {
    
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
        user: process.env.EMAIL, 
        pass: process.env.EMAIL_PASS, 
    },
    });

    // send mail with defined transport object
    let infoEmail = await transporter.sendMail({
        from: '"Minga Blue Team" <mingablueteam@gmail.com>',
        to: user.email,
        subject:"Verify your email...",
        html: `<table align="center" border="0" cellpadding="0" cellspacing="0" class="m_-5401722008193577908deviceWidth" style="width:100%;min-width:100%" width="100%">
        <tbody><tr>
        <td align="center" bgcolor="#ffffff">

        .
        .
        .




SINCRONIZACIÓN CON CUENTA DE GOOGLE:
1.Se debe crear una cuenta de gmail
2.En 'GESTIONAR TU CUENTA DE GOOGLE' se debe buscar la opcion seguridad que se encuentra al lado izquierdo
3.En la parte de seguridad, nos dirigmos al apartado de verificacion de 2 pasos y lo implementamos 
4.Una vez habilitada la verificación de dos pasos, se busca la opcion 'contraseña de aplicacion'.
5. Nos vamos a conseguir con dos opciones desplegables. En el primero se elige el tipo de aplicion y en el segundo el nombre de la app.
6. Presionamos en el botón de generar y nos arroja una contraseña
7. Una vez teniendo la contraseña, nos vamos a la variable de entorno .env y agregamos una variable EMAIL con el correo creado y una variable EMAIL_PASS con la contraseña proporcionada por google.
