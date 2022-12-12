const year = 2022;
const holidays = ["01/06", "04/01", "12/25", "12/24", "12/23"];

function countHours(year, holidays) {
  let horas = 0;
  holidays.forEach((holiday) => {
    const fecha = new Date(`${holiday}/${year}`);
    const dia = fecha.getDay();
    if (dia > 0 && dia < 6) {
      horas += 2;
      return horas;
    } else {
      return 0;
    }
  });
  return horas;
}

const di = countHours(year, holidays);
console.log(di);
