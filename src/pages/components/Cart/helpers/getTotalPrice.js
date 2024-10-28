export function getTotalPrice({ items = [] }) {

  let totalWithDiscount = 0;
  let totalDiscount = 0;

  items.forEach((product) => {
    const itemTotalPrice = product.price * product.quantity;
    const itemDiscount = itemTotalPrice * (product.discount / 100);
    totalDiscount += itemDiscount;
    totalWithDiscount += (itemTotalPrice - itemDiscount);
  });

  return {
    totalWithDiscount,
    totalDiscount,
  };
}
