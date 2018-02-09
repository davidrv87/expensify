// import * as firebase from 'firebase';
const firebase = require('firebase');
// Initialize Firebase
const config = {
    apiKey: 'AIzaSyDUx8DJSUPKiUyiHGdaC_-z4uvhUR1XtDQ',
    authDomain: 'expe-c993c.firebaseapp.com',
    databaseURL: 'https://expe-c993c.firebaseio.com',
    projectId: 'expe-c993c',
    storageBucket: 'expe-c993c.appspot.com',
    messagingSenderId: '80118821023'
};

firebase.initializeApp(config);

const database = firebase.database();

// Subscribe to changes on values
database.ref('expenses').on('value', (snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(JSON.stringify(expenses, undefined, 2));
}, e => console.log('Error fetching data', e));

// child_remove subscription
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child_changed subscription
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child_added subscription - also gets called for existing children
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses').push({
//     description: 'Coffee',
//     note: 'Coffee at the library',
//     amount: 450,
//     createdAt: 789767890900
// });
// database.ref('expenses').push({
//     description: 'Rent',
//     note: 'February Rent',
//     amount: 156000,
//     createdAt: 88099090980
// });
// database.ref('expenses').push({
//     description: 'Lunch',
//     note: '',
//     amount: 1200,
//     createdAt: 2112433564768
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const { name, job: { company, title } } = snapshot.val();
//     console.log(`${name} is a ${title} at ${company}`);
// }, (e) => {
//     console.log('Error fetching data', e);
// });

// setTimeout(() => {
//     database.ref().update({
//         name: 'John Smith',
//         'job/company': 'Telepizza'
//     });
// }, 3000);

// setTimeout(() => {
//     // Unsubscribe
//     database.ref().off('value', onValueChange); // Ref to the subscription (optional)
// }, 6000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 9000);

// database.ref('location')
//     .once('value') // Fetch data once
//     .then((snapshot) => {
//         console.log(JSON.stringify(snapshot.val(), undefined, 2));
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// database.ref().set({
//     name: 'David',
//     age: 30,
//     isSingle: false,
//     stressLevel: 6,
//     job: {
//         title: 'Tester',
//         company: 'Spider Tracks'
//     },
//     location: {
//         city: 'Auckland',
//         country: 'NZ'
//     }
// }).then(() => {
//     console.log('Data saved');
// }).catch((e) => {
//     console.log(e);
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => console.log('Prop removed'));

// database.ref().update({
//     name: 'David Rubio',
//     stressLevel: 0,
//     'job/company': 'Spider Tracks Limited',
//     'location/country': 'New Zealand' // Syntax for nested objects
// });
