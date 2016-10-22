// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City Not Found');
// }
//
// getTempCallback ('Lahore', function (error, temp) {
//     if (error) {
//       console.log('error ', error);
//     } else {
//       console.log('success ', temp);
//     }
// });

// function getTempPromise (location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City Not Found');
//     }, 3000);
//   });
// }
//
// getTempPromise('Lahore')
// .then(function (temp) {
//   console.log('Promise Success ', temp);
// }, function (error) {
//   console.log('Error ', error);
// });

// challenge area
function addPromise (a, b) {
  return new Promise(function(resolve, reject) {
    if ( typeof a == 'number' && typeof b == 'number' ) {
      resolve(a + b);
    } else if ( a == null || b == null ) {
      reject('A & B both are required');
    } else  {
      reject('A & B both needs to a number');
    }
  });
}

addPromise(2, 5)
.then(function (success) {
  console.log('Addition Is ', success);
}, function (error) {
  console.log('Error ', error);
})

addPromise(2, 'Wrong')
.then(function (success) {
  console.log('Addition Is ', success);
}, function (error) {
  console.log('Error ', error);
})

addPromise('Wrong')
.then(function (success) {
  console.log('Addition Is ', success);
}, function (error) {
  console.log('Error ', error);
})
