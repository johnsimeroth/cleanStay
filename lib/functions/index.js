const {onRequest} = require('firebase-functions/v2/https');
const {initializeApp} = require('firebase-admin/app');
const {getFirestore} = require('firebase-admin/firestore');

initializeApp();
const db = getFirestore();

exports.getProperties = onRequest(async (req, res) => {
  const userId = req.query.userId;
  const propSnapshot = await db
      .collection('properties')
      .where('userId', '==', userId)
      .get();
  if (propSnapshot.empty) {
    console.log('No properties');
    res.status(200).send('No properties');
  } else {
    const properties = [];
    propSnapshot.forEach((property) => {
      console.log(property);
      properties.push(property.data());
    });
    console.log(properties);
    res.status(200).send(JSON.stringify(properties));
  }
});
