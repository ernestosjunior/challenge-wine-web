export const formatPrice = (price: string) => {
  if (!price) return ''

  const [real, cents] = String(price)?.split('.')

  return ` R$ ${real},${cents?.padEnd(2, '0') || '00'}`
}
