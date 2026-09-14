import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products';

const ProductDetails = () => {
  const { id } = useParams();  
  const product = products.find((item) => item.id === parseInt(id))

  if (!product) {
    return <p>Product not found</p>
  }

  return (
    <div className='product-detail'>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
    </div>
  )
}

export default ProductDetails