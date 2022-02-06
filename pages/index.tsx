import {useEffect, useState} from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import { Text, Grid, GridItem } from "@chakra-ui/react";
import { useAppThunkDispatch, useAppSelector } from "../redux/store";
import { getHomeProducts } from "../redux/productSlice";

import img1 from "../public/watch1.webp"
import img2 from "../public/watch2.webp"

import Product from "./components/Product";
import HomeCategory from "./components/HomeCategory";



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
        <Grid 
          templateColumns='repeat( auto-fit, minmax(300px, 1fr) );'
          gap="20px"
        > 
        {
          dummyData.map((product, i) => 
            <GridItem key={i}>
              <Product 
                pName={product.name} 
                productId={i}
                pPrice={product.price}
                pDescription={product.description}
                pImage={product.img}
              />
            </GridItem>
          )
        }
        </Grid>

        <HomeCategory 
          sectionTitle="Montres pour Hommes"
          sectionLink="/men"
        />
        <Grid 
          templateColumns='repeat( auto-fit, minmax(300px, 1fr) );'
          gap="20px"
        > 
        {
          dummyData.map((product, i) => 
            <GridItem key={i}>
              <Product 
                pName={product.name} 
                productId={i}
                pPrice={product.price}
                pDescription={product.description}
                pImage={product.img}
              />
            </GridItem>
          )
        }
        </Grid>
      </Layout>
  )
}
