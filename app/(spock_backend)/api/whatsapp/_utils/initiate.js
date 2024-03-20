const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const twilio_sms_pnumber = process.env.TWILIO_ACCOUNT_PHNO



const initiate_user_conversation = () => {
    var chat_id = "";
    client.conversations.v1.conversations
        .create({ friendlyName: 'Sample' })
        .then(conversation => {
            console.log("intiated Conversation SID: " + conversation.sid);
            chat_id = conversation.sid;
        });
    // client.conversations.v1.conversations(chat_id)
    //     .participants
    //     .create({
    //         'messagingBinding.address': 'whatsapp:+916300399969',
    //         'messagingBinding.proxyAddress': 'whatsapp:+14155238886' // twilio whatsapp number
    //     })
    //     .then(participant => console.log("Participant SID:  has joined" + participant.sid));
    // client.conversations.v1.conversations(chat_id)
    //     .participants
    //     .create({
    //         'messagingBinding.address': '+916300399969',
    //         'messagingBinding.proxyAddress': '+17816849498' // twilio sms phone number 
    //     })
    //     .then(participant => console.log(participant.sid));
}

module.exports = { initiate_user_conversation }


