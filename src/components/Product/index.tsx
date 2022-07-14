import Image from "next/image";
import { useEffect, useState } from "react";
import { useCart } from "../../hooks/useCart";
import { Product as ProductType } from "../../types";
import { capitalizeFirstLetterOfEachWord } from "../../utils/capitalizeFirstLetterOfEachWord";
import { formatPrice } from "../../utils/formatPrice";
import { Button } from "../Common/Button";
import { ProductDetails, Section } from "./styles";

type Props = {
  product: ProductType;
};

export const Product: React.FC<Props> = ({ product }: Props) => {
  const { getQuantityByProductId, addToCart } = useCart();
  const [quantity, setQuantity] = useState(0);
  const [showOnlyButtonShadow, setShowOnlyButtonShadow] = useState(false);

  useEffect(() => {
    setQuantity(getQuantityByProductId(product.id));
  }, [getQuantityByProductId, product.id]);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Section hover={!showOnlyButtonShadow}>
      <div>
        <Image
          src={product.imageUrl}
          alt={`Imagem de um ${product.name}`}
          layout="responsive"
          width="200px"
          height="200px"
        />
      </div>

      <ProductDetails>
        {capitalizeFirstLetterOfEachWord(product.name)}
      </ProductDetails>

      <ProductDetails>{formatPrice(product.price)}</ProductDetails>

      <Button
        onClick={handleAddToCart}
        onMouseOver={() => setShowOnlyButtonShadow(true)}
        onMouseOut={() => setShowOnlyButtonShadow(false)}
      >
        Adicionar ao carrinho
      </Button>
      {quantity > 0 && (
        <ProductDetails>Você tem {quantity} no carrinho</ProductDetails>
      )}
    </Section>
  );
};
