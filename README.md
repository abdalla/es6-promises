# es6-promises
Promise now is native on ES6 \o/

### States of Promises
1 - Unresolved: waiting for something to finish

2 - Resolved: something was finished and all worked ok

3 - Rejected: something was finished but went bad

### How to Create
```
let myPromise = new Promise((resolve, reject) => {});
```

### Resolving
```
let myPromise = new Promise((resolve, reject) => {
    //your code
    resolve();
});


myPromise.then(() => {
    console.log('Resolved');
}).catch(() => {
    console.log('Rejected');
});

//==> console will show "Resolved"
```

### Rejecting
```
let myPromise = new Promise((resolve, reject) => {
    //your code
    reject();
});


myPromise.then(() => {
    console.log('Resolved');
}).catch(() => {
    console.log('Rejected');
});

//==> console will show "Rejected"
```

