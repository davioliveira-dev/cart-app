import Image from "next/image";
import { useEffect, useState } from "react";
import { useCart } from "../../hooks/useCart";
import { loadProduct } from "../../lib/loadProduct";
import { ArrayElement, Cart, Product } from "../../types";
import { capitalizeFirstLetterOfEachWord } from "../../utils/capitalizeFirstLetterOfEachWord";
import { formatPrice } from "../../utils/formatPrice";
import { AddIcon, TrashIcon } from "../Common/icons";
import {
  ButtonsContainer,
  ButtonWithIcon,
  ImageContainer,
  Li,
  ProductDetails,
} from "./styles";

type Props = {
  cartItem: ArrayElement<Cart["products"]>;
};

export const CartItem = (props: Props) => {
  const { id, price, quantity } = props.cartItem;
  const [product, setProduct] = useState<Product>();
  const { addToCart, removeOneFromCart } = useCart();
  const total = price * quantity;

  useEffect(() => {
    (async () => {
      const data = await loadProduct(id);
      setProduct(data);
    })();
  }, [id]);

  return (
    <Li>
      {product && (
        <>
          <ImageContainer>
            <Image
              src={product.imageUrl}
              alt={`Imagem de um ${product.name}`}
              layout="responsive"
              width="150px"
              height="150px"
            />
          </ImageContainer>
          <ProductDetails>
            <h3>{capitalizeFirstLetterOfEachWord(product?.name)}</h3>
            <p>
              {quantity}x {formatPrice(price)}
            </p>
            <p>Total: {formatPrice(total)}</p>
            <ButtonsContainer>
              <ButtonWithIcon noShadow onClick={() => addToCart(product)}>
                <AddIcon width={25} height={25} />
              </ButtonWithIcon>
              <ButtonWithIcon
                noShadow
                onClick={() => removeOneFromCart(product)}
              >
                <TrashIcon width={25} height={25} />
              </ButtonWithIcon>
            </ButtonsContainer>
          </ProductDetails>
        </>
      )}
    </Li>
  );
};
