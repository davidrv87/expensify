const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Promise resolved');
        reject(new Error('Error happened'));
    }, 1000);
});

promise.then((data) => {
    console.log(data);
}).catch(e => console.log(e.message));
