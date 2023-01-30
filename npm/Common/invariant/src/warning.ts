
export default function warning(condition: boolean, message: string): void {
  if (condition) {
    return;
  }

  const text: string = `Warning: ${message}`;

  if (typeof console !== "undefined") {
    console.warn(text);
  }

  try {
    throw Error(text);
  } catch (x) {}
}
