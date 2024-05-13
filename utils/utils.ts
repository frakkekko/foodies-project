export function isValidShareMealInputForm(data: { [key: string]: string }) {
  return !!!Object.keys(data).find((key) => !data[key] || data[key] === "");
}
