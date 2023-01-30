function assert(
  condition: any,
  context?: string | (() => string)
): asserts condition {
  if (condition) {
    return;
  }
  
  if(context instanceof Error) {
    throw context
  }

  const message = typeof context === "function" ? context() : context
  throw new Error(message);
}

export default assert;
