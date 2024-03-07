import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import CategoryFilter from '../components/CategoryFilter';
import './CardGrid.css'; // Předpokládá se, že tento soubor obsahuje styly pro card-grid

const HomeScreen = () => {
  const { pageNumber = 1, keyword = '' } = useParams(); // Zajištění výchozích hodnot
  const [category, setCategory] = useState('');

  const {
    data, isLoading, error,
  } = useGetProductsQuery({
    keyword,
    pageNumber,
    category,
  });

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <>
      <Meta />
      {!keyword && <ProductCarousel />}
      {keyword && (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      <CategoryFilter onCategoryChange={handleCategoryChange} />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error?.data?.message || error.error}</Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <div className="card-grid"> {/* Přidání card-grid obalu pro aplikaci stylů */}
            <Row>
              {data?.products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          </div>
          <Paginate
            pages={data?.pages}
            page={data?.page}
            keyword={keyword}
            category={category}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
