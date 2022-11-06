import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";
import { useKeenSlider } from "keen-slider/react";
import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import Link from "next/link";
import Head from "next/head";
import { CartButton } from "../components/CartButton";
import { IProduct, useCart } from "../context/CartContext";
import { MouseEvent } from "react";
interface HomePorps {
  products: IProduct[];
}

export default function Home({ products }: HomePorps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  const { addToCart, checkIfItemAlreadyExists } = useCart();

  function handleAddToCart(
    e: MouseEvent<HTMLButtonElement>,
    product: IProduct
  ) {
    e.preventDefault();
    addToCart(product);
  }
  return (
    <>
      <Head>
        <title>Ignote shop | home</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            prefetch={false}
          >
            <Product className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt="" />
              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>
                <CartButton
                  color="green"
                  size="large"
                  disabled={checkIfItemAlreadyExists(product.id)}
                  onClick={(e) => handleAddToCart(e, product)}
                />
              </footer>
            </Product>
          </Link>
        ))}
      </HomeContainer>
    </>
  );
}

//   export const getServerSideProps: GetStaticProps = async() => {
//   const response = await stripe.products.list({
//     expand: ['data.default_price']
//   });

//     const products = response.data.map(product => {
//       const price = product.default_price as Stripe.Price;
//       return {
//         id: product.id,
//         name: product.name,
//         imageUrl: product.images[0],
//         price: price.unit_amount / 100
//       }
//     })

//   return {
//     props: {
//       products
//     }
//   }
// }

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount / 100),
      numberPrice: price.unit_amount / 100,
      defaultPriceId: price.id,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // é em segundo e muda para horas
  };
};
