import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = ({ products, onView }) => {

  const { id } = useParams();  
  const product = products.find((item) => item.id === parseInt(id))

  useEffect(() => {
    onView(product)
  }, [])

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