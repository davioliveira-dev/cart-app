import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  CheckoutButton,
  FreightBonus,
  Main,
  NoData,
  ReturnButton,
  Title,
} from "../../components/Cart";
import { CartItem } from "../../components/CartItem";
import { Button } from "../../components/Common/Button";
import { Card } from "../../components/Common/Card";
import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../utils/formatPrice";

const Cart = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const { getCartItems, getTotalPrice } = useCart();
  const products = getCartItems();
  const totalPrice = getTotalPrice();

  return (
    <Main>
      {products.length > 0 && (
        <ul>
          <Card>
            <Title> Meu Carrinho</Title>
            {products.map((product) => (
              <CartItem key={product.id} cartItem={product} />
            ))}
            <Title total>
              <div>
                <p>Total</p> {formatPrice(totalPrice)}
              </div>
              {totalPrice / 100 > 10 && (
                <FreightBonus
                  css={{
                    color: theme === "dark" ? "$white" : "$green",
                  }}
                >
                  <span>Parabéns, sua compra tem frete grátis !</span>
                </FreightBonus>
              )}
            </Title>
            <CheckoutButton noShadow onClick={() => alert("Cabou fi")}>
              Finalizar sua compra
            </CheckoutButton>
            <ReturnButton noShadow secondary onClick={() => router.push("/")}>
              Retornar para a home
            </ReturnButton>
          </Card>
        </ul>
      )}
      {products.length === 0 && (
        <NoData>
          <h1>Você não tem nenhum item no carrinho!</h1>
          <div>
            <Image
              src={"https://cataas.com/cat"}
              layout="responsive"
              width="300px"
              height="300px"
              alt="cat"
            />
          </div>
          <Button onClick={() => router.push("/")} noShadow>
            Voltar para a home
          </Button>
        </NoData>
      )}
    </Main>
  );
};

export default Cart;
