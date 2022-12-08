const gifts = ["cat", "game", "socks"];
function prueba(gifts) {
    const bag = [];
    gifts.forEach(function (palabra) {
      if (palabra.length === 1) {
        bag.push(`***\n*${palabra}*\n***`);
      } else if (palabra.length === 2) {
        bag.push(`****\n*${palabra}*\n****`);
      } else if (palabra.length === 3) {
        bag.push(`*****\n*${palabra}*\n*****`);
      } else if (palabra.length === 4) {
        bag.push(`******\n*${palabra}*\n******`);
      } else if (palabra.length === 5) {
        bag.push(`*******\n*${palabra}*\n*******`);
      } else if (palabra.length === 6) {
        bag.push(`********\n*${palabra}*\n********`);
      } else if (palabra.length === 7) {
        bag.push(`*********\n*${palabra}*\n*********`);
      } else {
        return []
      }
    });
    return bag;
}
const ba = prueba(gifts);
console.log(ba);

/* Esta es la solucion con menores lineas de codigo y 
    utilizando el metodo map.
*/ 
/* const wrapping = gifts => {
    return gifts.map(gift => {
      const wrapper = '*'.repeat(gift.length + 2);
      return `${wrapper}\n*${gift}*\n${wrapper}`;
    });
  };

  console.log(wrapping((gifts))) */