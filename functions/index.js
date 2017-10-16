const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp(functions.config().firebase)

exports.pushNotification = functions.https.onRequest((req, res) => {
  console.log('Player rankings updated!')

  const payload = {
    notification: {
      title: 'Fantasy Update',
      body: 'Check out the updated player rankings!'
    }
  }

  const options = {
    priority: 'high',
    timeToLive: 60 * 60 * 24
  }

  admin.messaging().sendToTopic('pushNotifications', payload, options)
  .then(response => {
    const message = {
      message: 'Message sent!'
    }

    console.log(message.message)
    return res.status(200).json(message)
  })
  .catch(err => {
    console.log('Error sending message:', err)
    return res.status(200).json(err)
  })
})
