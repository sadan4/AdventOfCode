export function getTodaysFilename() {
  return `./${getToday().year}/day${getToday().day}/code.ts`;
}
export function getTodaysDir() {
  return `./${getToday().year}/day${getToday().day}/`;
}
export function getToday() {
  const d = new Date();

  const year = d.getFullYear().toString().substring(2);

  const day = (d.getDay() + 1).toString();
  return { year, day };
}
