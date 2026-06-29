export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatPhoneLink(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}
