export function getTotalPrice({ items }) {

  let totalWithDiscount = 0
  
  if (items) {
    items?.forEach((product) => {
      const itemTotal = (product.price * product.quantity) - ((product.price * product.quantity) * (product.discount / 100));
      totalWithDiscount += itemTotal;
    });
  }
  return {
    totalWithDiscount
  }
}