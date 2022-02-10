import React, {useEffect, useState} from 'react';
import { NextPage } from 'next';
import Layout from './components/Layout';
import { Input,Textarea, Button, Select } from '@chakra-ui/react';
import { useAppSelector, useAppThunkDispatch } from '../redux/store';
import { addProduct } from '../redux/productSlice';
import { isEmpty } from 'lodash';
import { getAllCategories } from '../redux/categorySlice';

const nextPage: NextPage = () => {

  const dispatch = useAppThunkDispatch()
  const {categories, loading} = useAppSelector((state) => state.category) 
  
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: null,
    category: "",
    quantity: ""
  })

  useEffect(() => {
    dispatch(getAllCategories())
  }, [])

  const handleInputChange = (e: any) => {
    e.preventDefault();
    if(e.target.id !== "image")
      setProduct({...product, [e.target.id]: e.target.value})
    else{
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0])
      reader.onloadend = () => {
        setProduct({...product, image: reader.result})
      }
    }
  }

  const handleFormSubmit = async(e) => {
    e.preventDefault();

    dispatch(addProduct({product: product}))
  }

  return (
    <Layout>
      {loading && <div>loading</div>}
      {!loading && <form onSubmit={handleFormSubmit}>
        <Input id="name" placeholder="name" my={2} value={product.name} onChange={handleInputChange}/>
        <Textarea id="description" placeholder="description" my={2} value={product.description} onChange={handleInputChange}/>
        <Input id="price" placeholder="price" my={2} value={product.price} onChange={handleInputChange}/>
        <input id="image" type="file" onChange={handleInputChange}/>
        <Input id="quantity" placeholder="quantity" my={2} value={product.quantity} onChange={handleInputChange}/>
        <Select id="category" placeholder='Select category' onChange={handleInputChange}>
          {
            categories.map((cat, i) => <option key={i} value={cat.title}>{cat.title.charAt(0).toUpperCase()+cat.title.slice(1)}</option>)
          }
        </Select>
        <Button variant="primary" type="submit" my={2}>Upload product</Button>
      </form>}
    </Layout>
  );
}

export default nextPage;
