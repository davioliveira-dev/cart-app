export function formatPrice(price: number): string {
  const intl = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const priceNumber = price / 100;

  return intl.format(priceNumber);
}
