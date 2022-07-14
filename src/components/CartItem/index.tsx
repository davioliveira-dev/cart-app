import Image from "next/image";
import { useEffect, useState } from "react";
import { loadProduct } from "../../lib/loadProduct";
import { ArrayElement, Cart, Product } from "../../types";
import { capitalizeFirstLetterOfEachWord } from "../../utils/capitalizeFirstLetterOfEachWord";
import { formatPrice } from "../../utils/formatPrice";
import { ImageContainer, Li } from "./styles";

type Props = {
  cartItem: ArrayElement<Cart["products"]>;
};

export const CartItem = (props: Props) => {
  const { id, price, quantity } = props.cartItem;
  const [product, setProduct] = useState<Product>();
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
          <div>
            <h3>{capitalizeFirstLetterOfEachWord(product?.name)}</h3>
            <p>
              {quantity}x {formatPrice(price)}
            </p>
            <p>Total: {formatPrice(total)}</p>
          </div>
        </>
      )}
    </Li>
  );
};
