// import firebase functions modules
const functions = require('firebase-functions')
// import admin module
const admin = require('firebase-admin')
const ChronJob = require('cron').CronJob

admin.initializeApp(functions.config().firebase)

// // Listens for new messages added to messages/:pushId
// exports.pushNotification = functions.database.ref('/messages/{pushId}').onWrite(event => {
//   console.log('Push notification event triggered')

//     //  Grab the current value of what was written to the Realtime Database.
//   const valueObject = event.data.val()

//   if (valueObject.photoUrl != null) {
//     valueObject.photoUrl = 'Sent you a photo!'
//   }

//   // Create a notification
//   const payload = {
//     notification: {
//       title: valueObject.name,
//       body: valueObject.text || valueObject.photoUrl,
//       sound: 'default'
//     }
//   }

//   // Create an options object that contains the time to live for the notification and the priority
//   const options = {
//     priority: 'high',
//     timeToLive: 60 * 60 * 24
//   }

//   return admin.messaging().sendToTopic('pushNotifications', payload, options)
// })

exports.pushNotification = () => {
  const playerRankingsNotification = new ChronJob('*/1 * * * *', () => {
    console.log('Player rankings updated!')
  })

  return playerRankingsNotification
}
