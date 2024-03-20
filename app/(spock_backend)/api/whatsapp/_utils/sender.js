const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const send_message = ( message ) => {
    client.messages
        .create({
            body: message,
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+918374370969'
        })
        .then(message => console.log(message));
}



module.exports = {
    send_message
}