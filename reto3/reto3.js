const packOfGifts = ['game', 'videoconsole', 'computer'];
const reindeers = ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'];
function distributeGifts(packOfGifts, reindeers) {
  const pesoGifts = packOfGifts.map((packOfGift) => {
    return packOfGift.length;
  });
  const pesoReinder = reindeers.map((reindeer) => {
    return 2 * reindeer.length;
  });
  function sumPeso(peso) {
    const sumPeso = peso.reduce((acumulador, actual) => {
      return acumulador + actual;
    });
    return sumPeso;
  }
  const pesosG = sumPeso(pesoGifts);
  const pesosR = sumPeso(pesoReinder);
  console.log(pesosG, pesosR);
  const box = Math.trunc(pesosR / pesosG);
  return box;
}

const regalos = distributeGifts(packOfGifts, reindeers);
console.log(regalos);

/*Solucion Planteada por el puntero
const distributeGifts = (packOfGifts, reindeers) => {
  return Math.floor((reindeers.join``.length * 2) / packOfGifts.join``.length);
};

const distributeGiftsAlt = (packOfGifts, reindeers) => {
  // Only valid for numbers between [−2147483648, 2147483647]
  return ((reindeers.join``.length * 2) / packOfGifts.join``.length) | 0;
};

export { distributeGifts, distributeGiftsAlt };
*/
