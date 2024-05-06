export default function camelCase(text: string) {
  return text
    .replace(/-/g, " ")
    .replace(/\s(.)/g, ($1) => $1.toUpperCase())
    .replace(/\s/g, "")
    .replace(/^(.)/, ($1) => $1.toLowerCase());
}
