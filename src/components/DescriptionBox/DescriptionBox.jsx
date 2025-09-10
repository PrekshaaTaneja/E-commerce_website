import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-descriptor">
        <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual storefront where customers can browse items, make purchases, and even interact with customer support, all from the comfort of their own homes. E-commerce websites range from small, niche stores to large, multi-category platforms like Amazon or eBay, with different features and capabilities depending on the scope and target audience of the business.</p>
        <p>E-commerce website typically displays products or services with detailed descriptions, images, prices and colors.</p>
      </div>
    </div>
  )
}

export default DescriptionBox