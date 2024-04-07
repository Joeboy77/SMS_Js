const accountSid = 'AC8e0ed11dd31a870dadaea26c90e7320d';
const authToken = 'fbb88a1e5d1a8a742bafe9988a40e445';
const client = require('twilio')(accountSid, authToken);

// List of phone numbers you want to send SMS to
const phoneNumbers = ['+233593930863', '+233534286320', '+233506480682', '+447442813679', '+233244840387', '+233593641702', '+233550675486', '+233545137705', '+233257220301'];

// Your message
const messageBody = 'Hi, fellow Board member of HP Radio, be remembered of our upcoming board meeting on saturday. Thank you';

// Send SMS to each phone number in the list
phoneNumbers.forEach((phoneNumber) => {
    client.messages
      .create({
         body: messageBody,
         from: '+13346102056',
         to: phoneNumber
       })
      .then(message => console.log(`Message sent to ${phoneNumber}, SID: ${message.sid}`))
      .catch(error => console.error(`Error sending message to ${phoneNumber}:`, error));
});
