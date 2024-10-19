import { useState, useEffect } from "react";

function Product({ id, img, title, price, setQuantities, money }) {

    const [quantity, setQuantity] = useState(0);

    const decrease = () => {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      }
    };
  
    
    const increase = () => {
      if (price <= money) {
        setQuantity(quantity + 1);
      }
    };
  

    const handleChange = (event) => {
      const value = Math.max(0, parseInt(event.target.value) || 0);
      setQuantity(value);
    };
  
  
    
    useEffect(() => {
      setQuantities(id, quantity);
    }, [quantity, id, setQuantities]);

    return ( 
        <div className="product">
        <img className='imgProduct' src={img} alt={title} />
        <p>{title}</p>
        <p className="priceP">${price}</p>
        <section className='btn'>
          <button 
            
            className={quantity <= 0 ? "sellBtn" : "activeSell"} 
            onClick={decrease} 
            disabled={quantity <= 0}
          >
            Sell
          </button>
          <input 
            className='inputBtn' 
            type="text" 
            value={quantity} 
            onChange={handleChange} 
          />
          <button 
            
            className={price > money ? 'inactiveBuy' : 'buyBtn'} 
            onClick={increase} 
            disabled={price > money}
          >
            Buy
          </button>
        </section>
      </div>
     );
}

export default Product;