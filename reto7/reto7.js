const array2 = ["bici", "coche", "bici", "bici"];
const array1 = ["coche", "bici", "muñeca", "coche"];
const array3 = ["bici", "pc", "pc"];

function getGiftsToRefill(a1, a2, a3) {
  const gift = [];
  const getUniqueGifts = (a1, a2, a3) => {
    a1.forEach((element1) => {
      if (
        gift.includes(element1) ||
        a2.includes(element1) ||
        a3.includes(element1)
      ) {
      } else {
        gift.push(element1);
      }
    });
  };
  getUniqueGifts(a1, a2, a3);
  getUniqueGifts(a2, a1, a3);
  getUniqueGifts(a3, a1, a2);

  return gift;
}

const gifts = getGiftsToRefill(array1, array2, array3);
console.log(gifts);


/* solucion planteada por el lider

const getGiftsToRefill = (a1, a2, a3) => {
  return [...new Set([...a1, ...a2, ...a3])].filter(
    gift => a1.includes(gift) + a2.includes(gift) + a3.includes(gift) === 1
  );
};

export { getGiftsToRefill };
*/