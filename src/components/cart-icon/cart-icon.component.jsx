import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { toggleIsCartOpen } from "../../store/cart/cartActions";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cartSelector";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleCartOpen = () => dispatch(toggleIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
