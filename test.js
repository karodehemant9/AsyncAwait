
console.log('person1 : shows ticket');
console.log('person2 : shows ticket');


const preMovie = async() => {
  const promiseWifeBringingTickets =  new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve('ticket');
    }, 3000);
  });

  const getPopcorn =  new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve('popcorn');
    }, 3000);
  });

  const getButter =  new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve('butter');
    }, 3000);
  });
  const getColdrink =  new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve('coldrink');
    }, 3000);
  });


  let ticket = await promiseWifeBringingTickets;

  console.log('wife : I have the tickets');
  console.log('husband : we should go in');
  console.log('wife : no I am hungry');

  let popcorn = await getPopcorn;

  console.log('husband : I got some popcorn');
  console.log('husband : we should go in');
  console.log('wife : no I need butter on my popcorn');

  let butter = await getButter;

  console.log('husband : I got some butter');
  console.log('husband : now should we go in');
  console.log('wife : no I also need coldrink');

  let coldrink = await getColdrink;

  return `${ticket} ${popcorn} ${butter} ${coldrink}`;
}

preMovie().then((item) => console.log(item));




// const promiseWifeBringingTickets =  new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('ticket');
//   }, 3000);
// });

// const getPopcorn = promiseWifeBringingTickets.then((ticket) => {
//   console.log('wife : I have the tickets');
//   console.log('husband : we should go in');
//   console.log('wife : no I am hungry');
//   return new Promise((resolve, reject) => { resolve(`${ticket} popcorn`)});
//   });

// const getButter = getPopcorn.then((items) => {
//   console.log('husband : I got some popcorn');
//   console.log('husband : we should go in');
//   console.log('wife : no I need butter on my popcorn');
//   return new Promise((resolve, reject) => { resolve(`${items} butter`)});
// });

// const getColdrink = getButter.then((items) => {
//   console.log('husband : I got some butter');
//   console.log('husband : now should we go in');
//   console.log('wife : no I also need coldrink');
//   return new Promise((resolve, reject) => { resolve(`${items} coldrink`)});
// });

//  getColdrink.then((items) => console.log(items));


console.log('person4 : shows ticket');
console.log('person5 : shows ticket');
