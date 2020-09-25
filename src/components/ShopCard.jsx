import React from 'react'
import PropTypes from 'prop-types'

function ShopCard(props) {
    return (
        <div className='card card-product'>
            {/* <div className='card'> */}
                <h1>
                    {props.product.name}
                </h1>
                <span>
                    {props.product.color}
                </span>
            {/* </div> */}
            <img className='card card-image' src={props.product.img} alt={props.product.name}/>
            <div className='card'>
                <span className='cars-price'>
                    ${props.product.price}
                </span>
                <button className='card-add'>Add to cart</button>
            </div>
        </div>
    )
}

ShopCard.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string,
    color: PropTypes.string,
    price: PropTypes.string
}

export default ShopCard

