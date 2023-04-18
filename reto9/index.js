console.log("comienzo");

const leds = [0, 0, 1, 0, 0];

const countTime = leds => {
  const ledStripsOff = leds.join('').split('1');
  ledStripsOff[0] += ledStripsOff.pop();

  return ledStripsOff.reduce((time, ledStripOff) => {
    return Math.max(time, ledStripOff.length * 7);
  }, 0);
};

console.log(countTime(leds));