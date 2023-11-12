import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { increaseQuantity, decreaseQuantity } from "../cart/cartSlice";

function ButtonQuantity({ pizzaId, quantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-3">
      {quantity > 1 && (
        <Button
          type="round"
          onClick={() => dispatch(decreaseQuantity(pizzaId))}
        >
          &minus;
        </Button>
      )}
      <p>{quantity}</p>
      <Button type="round" onClick={() => dispatch(increaseQuantity(pizzaId))}>
        &#43;
      </Button>
    </div>
  );
}

export default ButtonQuantity;
