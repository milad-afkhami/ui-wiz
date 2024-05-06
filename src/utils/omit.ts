function omit<T>(obj: T | undefined | null, keys: string | string[]) {
  if (typeof keys === "string") keys = [keys];
  if (!obj) return {};

  return Object.fromEntries(
    Object.entries(obj).filter(([k]) => !keys.includes(k))
  );
}

export default omit;
