import './App.css';
import React,{useState} from 'react';
import im1 from './images/image-product-1.jpg';
import im2 from './images/image-product-2.jpg';
import im3 from './images/image-product-3.jpg';
import im4 from './images/image-product-4.jpg';

function App() {
  
  const [count,setCount] = useState(0);
  const [overlay,setOverlay] = useState(false);
  const [visible,setVisible] = useState(false);
  const [product,showProduct] = useState(false);
  const [image,setImage] = useState(im1)
  const [highlight,setHighlight] = useState([true,false,false,false])
  const images =[
    im1,
    im2,
    im3,
    im4
];
  const [slide,setSlide] = useState(0)

  const prevImage = () => {
    setSlide((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setSlide((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const increment =() => {
    setCount(prevCount => prevCount+1)
  };

  const decrement =() => {
    if (count > 0){ 
     setCount(prevCount => prevCount-1)
    };
  };
  const addCart = () =>{
    if (count>0){
      showProduct(true);}
    else{
      showProduct(false);
    }
  }
  const removeItem = () =>{
    setCount(0);
    showProduct(false);
  }
  const expandCart = () =>{
    setVisible(!visible)
  }
  
  const changeSlide = (index)=>{
    setSlide(index);
}
  const changeOverlay = () =>{
    setOverlay(!overlay);
  }
  const changeImage = (index)=>{
    setImage(images[index]);
    const newHighlight = Array.from({ length: highlight.length }, (_, i) => i === index);
    setHighlight(newHighlight);
}
  return (
    <div className="App">
      <div className='navbar'>
        <div className='menu-left'>
          <div className='logo'></div>
          <div className='menu'>
            <div>Collections</div>
            <div>Men</div>
            <div>Women</div>
            <div>About</div>
            <div>Contact</div>
          </div>
        </div>
        <div className='user'>
         <button className='cart' onClick={expandCart}></button>
         <div className='pfp'></div>
        </div>
      </div>
      <div className={`expanded-cart ${visible?'show': ''}`}>
        <div className='cart-title'>Cart</div>
        <div className='cart-content'>
          <div className={`empty ${product?'':'visible' }`}>Your cart is empty</div>
          <div className={`added-prod ${product?'visible':'' }`}>
            <div className='prod-img'></div>
            <div className='prod-details'>
              <div>Fall Limited Edition Sneakers</div>
              <div>$125.00X{count} ${125.00*count}</div>
            </div>
            <div className='remove-prod' onClick={removeItem}></div>
          </div>
          <button className={`check-btn ${product?'visible2':'' }`} onClick={expandCart}>Checkout</button>
        </div>
      </div>
      
      <div className='content'>
        <div className='img-section'>
          <button className='main-img' style={{backgroundImage: `url(${image})`}} onClick={changeOverlay} ></button>
          <div className='sub-img'>
            <button className={`img-1 img-p ${highlight[0]?'highlight':''}`} onClick={() => changeImage(0)}></button>
            <button className={`img-2 img-p ${highlight[1]?'highlight':''}`} onClick={() => changeImage(1)}></button>
            <button className={`img-3 img-p ${highlight[2]?'highlight':''}`} onClick={() => changeImage(2)}></button>
            <button className={`img-4 img-p ${highlight[3]?'highlight':''}`} onClick={() => changeImage(3)}></button>
          </div>
        </div>
        <div className='product'>
          <div className='product-title'>SNEAKER COMPANY</div>
          <div className='product-type'>Fall Limited Edition Sneakers</div>
          <div className='product-desc'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
          durable rubber outer sole, they'll withstand everything the weather can offer.</div>
          <div className='price'>
            <div className='cost'>$125.00</div>
            <div className='discount'>50%</div>
          </div>
          <div className='act-price'><strike>$250.00</strike></div>
          <div className='cart-section'>
            <div className='counter'>
              <button className='minus' onClick={decrement}></button>
              <div className='count'>{count}</div>
              <button className='plus' onClick={increment}></button>
            </div>
            <button className='add-btn' onClick={addCart}><div className='cart-img'></div>Add to cart</button>
          </div>
        </div>
      </div>
      <div className={`overlay ${overlay? 'visible' :''}`}>
        <div className='exit-container'>
          <button className='exit' onClick={changeOverlay}></button>
        </div>
        <img className='over-img' src={images[slide]}></img>
        <div className='slider'>
          <button className='slide' onClick={prevImage}><div className='left-slide'></div></button>
          <button className='slide' onClick={nextImage}><div className='right-slide'></div></button>
        </div>
        <div className='sub-img'>
            <button className={`img-1 img-p `} onClick={() => changeSlide(0)}></button>
            <button className={`img-2 img-p `} onClick={() => changeSlide(1)}></button>
            <button className={`img-3 img-p `} onClick={() => changeSlide(2)}></button>
            <button className={`img-4 img-p `} onClick={() => changeSlide(3)}></button>
          </div>
      </div>
    </div>
  );
}

export default App;
