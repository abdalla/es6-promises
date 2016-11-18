let myPromise = new Promise((resolve, reject) => {
    console.log('running....');
    setTimeout(() => {
        resolve();
        //reject();
    }, 3000);
    
});


myPromise.then(() => {
    console.log('Resolved');
}).catch(() => {
    console.log('Rejected');
});