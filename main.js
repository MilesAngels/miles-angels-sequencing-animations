const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");


// Callback Method
// setTimeout(() => {
//   alice1.animate(aliceTumbling, aliceTiming);

//   setTimeout(() => {
//     alice2.animate(aliceTumbling, aliceTiming);

//     setTimeout(() => {
//       alice3.animate(aliceTumbling, aliceTiming)
//     }, 2000);
//   }, 2000);
// }, 1000);

// Promise Chain
// let animation1 = setTimeout(() => {
//   alice1.animate(aliceTumbling, aliceTiming);
// }, 0);
// let animation2 = setTimeout(() => {
//   alice2.animate(aliceTumbling, aliceTiming);
// }, 2000);
// let animation3 = setTimeout(() => {
//   alice3.animate(aliceTumbling, aliceTiming);
// }, 4000);

// animation1.then(animation2.then(animation3));


//Async Await
//let anim1 = 
function delay(item, ms = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
}

async function sequence() {
  console.log("hello")
  await delay(alice1.animate(aliceTumbling, aliceTiming), 2000);
  await delay(alice2.animate(aliceTumbling, aliceTiming),2000);
  await delay(alice3.animate(aliceTumbling, aliceTiming), 2000);
}

sequence();