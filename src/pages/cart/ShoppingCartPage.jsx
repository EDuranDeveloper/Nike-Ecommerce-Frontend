import { useEffect } from "react";
import { useCartStore } from "../../hooks/useCartStore";
import Swal from "sweetalert2";
import { SpinnerPage } from "../../auth/pages/SpinnerPage";
import { Favorites } from "./Favorites";
import { ShoppingCart } from "./ShoppingCart";
import { Summary } from "./Summary";
import { Navbar } from "../components/Navbar";
import { getTotalPrice } from "./helpers/getTotalPrice";

export function ShoppingCartPage() {

  const { cartUser, loading, errorMessage, startGetCartUser, startPostCartInUser, startDeleteProductInCart } = useCartStore()

  useEffect(() => {
    startGetCartUser()
  }, [])

  const { items } = cartUser

  if(loading) {
    return <SpinnerPage />
  }
  
  if (errorMessage) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: errorMessage || "Something went wrong while fetching your cart!",
    });
    return <h1 className="text-4xl font-bold my-16">An error occurred. Please try again later.</h1>
  }
  
  const { totalWithDiscount, totalDiscount } = getTotalPrice({ items })

  return (
    <div className="container mx-auto p-16 px-32 m-16">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <Navbar bgColor="white" />
          <h2 className="text-5xl font-bold underline">Bag</h2>

          {(items?.length === 0) ? (
            <h1 className="text-4xl font-bold my-16" >Your cart is currently empty.</h1>
          ) : items?.map(( product ) => (
            <ShoppingCart key={product.productId} product={product}  />
          ))}

          <Favorites items={items} startPostCartInUser={startPostCartInUser} startDeleteProductInCart={startDeleteProductInCart}/>
        </div>
        <div>
          <Summary items={items} totalWithDiscount={totalWithDiscount} totalDiscount={totalDiscount}/>
        </div>
      </div>
    </div>
  );
}
