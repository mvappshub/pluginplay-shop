import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import ShortDescription from "./ShortDescription"; // Importovaná komponenta pro zkrácený popis
import "./Card.css"; // Předpokládáme, že tento soubor obsahuje všechny potřebné styly

const Product = ({ product, onTagChange }) => {
  // Předpokládáme, že maxLength je počet znaků, které chcete zobrazit před rozbalením
  const maxLength = 100; 

  return (
    <Card className="card my-3 p-3 rounded" style={{ width: '100%', maxWidth: '350px' }}>
      <Link to={`/product/${product._id}`}>
        <div className="card-image-container">
          <Card.Img src={product.image} variant='top' className="card-image" />
        </div>
      </Link>
      <Card.Body className="card-details">
        <div className="card-header">
          <Link to={`/product/${product._id}`}>
            <Card.Title as="h2" className="card-name">{product.name}</Card.Title>
          </Link>
        </div>
        <Card.Text as="div" className="card-developer">{product.developer}</Card.Text>
        <Card.Text as="div" className="card-category">{product.category}</Card.Text>
        {product.tags && (
          <div className="card-tags-container">
            {product.tags.split(",").map((tag) => (
              <span key={tag} className="card-tag" onClick={() => onTagChange(tag)}>
                {tag.trim()}
              </span>
            ))}
          </div>
        )}
        <ShortDescription text={product.description} maxLength={maxLength} />
        <div className="card-footer">
          <Rating value={product.rating} text={`${product.numReviews} reviews`} />
          <Card.Text as="h3" className="card-price">${product.price}</Card.Text>
          {/* Odstraněny ikony pro systémovou kompatibilitu a odkaz */}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;
