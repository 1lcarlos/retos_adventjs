const year = 2022;
const holidays = ["01/06", "04/01", "12/25", "12/24"];
const holiday = "12/25";

function countHours(year, holidays) {
  return holidays.map((holiday) => {
    const fecha = new Date(`${holiday}/${year}`);
    console.log(fecha);
    const dia = fecha.getDay();
    if (dia > 0 && dia < 6) {
      return 2;
    } else {
      return 0;
    }
  });
}

const dia = countHours(year, holidays);
console.log(dia);
/* const fecha =  new Date('12/25/2022')
console.log(fecha.getDay()); */
