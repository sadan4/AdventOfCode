import { parseArgs } from "util";
export function getTodaysFilename() {
  return `./${getToday().year}/day${getToday().day}/code.ts`;
}
export function getTodaysDir() {
  return `./${getToday().year}/day${getToday().day}/`;
}
export function getToday() {
  const d = new Date();
  /**
   * @type {import("util").ParseArgsConfig["options"]}
   */
  const options = {
    year: {
      type: "string",
      default: d.getFullYear().toString().substring(2),
      short: "y",
    },
    day: {
      type: "string",
      default: (d.getDay() + 1).toString(),
      short: "d",
    },
    watch: {
      type: "boolean",
      default: false,
      short: "w",
    }
  };
  const { year, day } = parseArgs({
    args: process.argv.slice(2),
    options,
  }).values;
  return { year, day };
}
