export const comparePrices = (weightProduct1, priceProduct1, weightProduct2, priceProduct2) => {
  const priceByGram1 = priceProduct1 / weightProduct1
  const priceByGram2 = priceProduct2 / weightProduct2
  if (priceByGram1 < priceByGram2) {
    return 'product1'
  }
  if (priceByGram2 < priceByGram1) {
    return 'product2'
  }
  return 'equal'
}
