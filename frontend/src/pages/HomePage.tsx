import { Col, Row } from 'react-bootstrap'
// import { sampleProducts } from '../Data'
// import { Link } from 'react-router-dom'
// import { Product } from '../types/Product'
// import { useEffect, useReducer } from 'react'
// import axios from 'axios'
import { getError } from '../utils'
import { ApiError } from '../types/ApiError'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import ProductItem from '../components/ProductItem'
import { Helmet } from 'react-helmet-async'
import { useGetProductsQuery } from '../hooks/productHooks'

export default function HomePage() {
  const { data: products, isLoading, error } = useGetProductsQuery()
  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">
      {getError(error as unknown as ApiError)}
    </MessageBox>
  ) : (
    <Row>
      <Helmet>
        <title>TS Amazona</title>
      </Helmet>
      {products!.map((product) => (
        <Col key={product.slug} sm={6} md={4} lg={3}>
          <ProductItem product={product} />
        </Col>
      ))}
    </Row>
  )
}
