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


/* 
      Solucion planteada por el lider
const countHours = (year, holidays) => {
  return holidays.reduce((overtimeHours, holiday) => {
    const dayOfWeek = new Date(`${holiday}/${year}`).getDay();
    const isWorkDay = dayOfWeek !== 0 && dayOfWeek !== 6;
    return isWorkDay ? overtimeHours + 2 : overtimeHours;
  }, 0);
};

const countHoursAlt = (year, holidays) => {
  return holidays.reduce((overtimeHours, holiday) => {
    const dayOfWeek = new Date(`${holiday}/${year}`).getDay();
    const isWorkDay = [1, 2, 3, 4, 5].includes(dayOfWeek);
    return overtimeHours + isWorkDay * 2;
  }, 0);
};

export { countHours, countHoursAlt };
*/