import {useEffect, useState} from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import { Text, Grid, GridItem, Box } from "@chakra-ui/react";
import { useAppThunkDispatch, useAppSelector } from "../redux/store";
import { getHomeProducts } from "../redux/productSlice";

import img1 from "../public/watch1.webp"
import img2 from "../public/watch2.webp"

import Product from "./components/Product";
import HomeCategory from "./components/HomeCategory";

import Slider from "react-slick"



export default function Home() {

  const dispatch = useAppThunkDispatch()
  const {products, loading}  = useAppSelector((state) => state.products)

  const [homeProducts, setHomeProducts] = useState([])
  
  const dummyData = [
    {
      name: "Montre Femme Cluse Boho Chic",
      description: "Montre Cluse Boho Chic composÃ©e d'un boitier rond de 38mm en metal dorÃ©, d'un cadran blanc et d'un bracelet en metal dorÃ©. EtanchÃ©itÃ© 30M. - Référence fournisseur : CW0101201009",
      price: "80,00 €",
      img: img1
    },
    {
      name: "Montre Femme Cluse Boho Chic",
      description: "Montre Cluse Boho Chic composÃ©e d'un boitier rond de 38mm en metal dorÃ©, d'un cadran blanc et d'un bracelet en metal dorÃ©. EtanchÃ©itÃ© 30M. - Référence fournisseur : CW0101201009",
      price: "80,00 €",
      img: img2
    },
    {
      name: "Montre Femme Cluse Boho Chic",
      description: "Montre Cluse Boho Chic composÃ©e d'un boitier rond de 38mm en metal dorÃ©, d'un cadran blanc et d'un bracelet en metal dorÃ©. EtanchÃ©itÃ© 30M. - Référence fournisseur : CW0101201009",
      price: "80,00 €",
      img: img1
    },
    {
      name: "Montre Femme Cluse Boho Chic",
      description: "Montre Cluse Boho Chic composÃ©e d'un boitier rond de 38mm en metal dorÃ©, d'un cadran blanc et d'un bracelet en metal dorÃ©. EtanchÃ©itÃ© 30M. - Référence fournisseur : CW0101201009",
      price: "80,00 €",
      img: img2
    }
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 3,
          infinite: true
        },
      },
      {
        breakpoint: 870,
        settings: {
          arrows: false,
          slidesToShow: 2.3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          infinite: true,
          slidesToShow: 1,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  useEffect(() => {
    console.log(loading)
    dispatch(getHomeProducts())
      .then((payload: any) => setHomeProducts(payload))
  }, [dispatch])

  return (
      <Layout>
        <Hero />
        <HomeCategory 
          sectionTitle="Montres pour Femmes"
          sectionLink="/women"
        />
        <Box w="100%">
          <Slider {...settings} className="homePageProductsSlider">
          {
            dummyData.map((product, i) => 
                <Product 
                  pName={product.name} 
                  productId={i}
                  pPrice={product.price}
                  pDescription={product.description}
                  pImage={product.img}
                />
            )
          }
          </Slider>
        </Box>

        <HomeCategory 
          sectionTitle="Montres pour Hommes"
          sectionLink="/men"
        />
        <Box w="100%">
          <Slider {...settings} className="homePageProductsSlider">
          {
            dummyData.map((product, i) => 
                <Product 
                  pName={product.name} 
                  productId={i}
                  pPrice={product.price}
                  pDescription={product.description}
                  pImage={product.img}
                />
            )
          }
          </Slider>
        </Box>
      </Layout>
  )
}
