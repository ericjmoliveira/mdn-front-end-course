const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' },
];

const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards',
};

const alice1 = document.querySelector('#alice1');
const alice2 = document.querySelector('#alice2');
const alice3 = document.querySelector('#alice3');

const alice1Finished = alice1.animate(aliceTumbling, aliceTiming).finished;

// Callback hell
/*
    alice1Finished.then(() => {
        const alice2Finished = alice2.animate(aliceTumbling, aliceTiming).finished;
        alice2Finished.then(() => {
            const alice3Finished = alice3.animate(aliceTumbling, aliceTiming).finished;
        });
    });
*/

// Promise chain
/*
    alice1Finished
    .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
    .then(() => alice3.animate(aliceTumbling, aliceTiming));
*/

// async/await
async function animateAlices() {
    await alice1Finished;
    await alice2.animate(aliceTumbling, aliceTiming).finished;
    alice3.animate(aliceTumbling, aliceTiming);
}

animateAlices();
