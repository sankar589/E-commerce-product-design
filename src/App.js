import './App.css';
import React,{useState} from 'react';
import im1 from './images/image-product-1.jpg';
import im2 from './images/image-product-2.jpg';
import im3 from './images/image-product-3.jpg';
import im4 from './images/image-product-4.jpg';
import menu from './images/icon-menu.svg';
import logo from './images/logo.svg';
import cart from './images/icon-cart.svg';
import cart2 from './images/icon-cart_2.svg';
import pfp from './images/image-avatar.png';
import imt1 from './images/image-product-1-thumbnail.jpg';
import imt2 from './images/image-product-2-thumbnail.jpg';
import imt3 from './images/image-product-3-thumbnail.jpg';
import imt4 from './images/image-product-4-thumbnail.jpg';
import ls from './images/icon-previous.svg';
import rs from './images/icon-next.svg';
import plus from './images/icon-plus.svg';
import minus from './images/icon-minus.svg';
import close from './images/icon-close.svg';
import bin from './images/icon-delete.svg';

function App() {
  
  const [count,setCount] = useState(0);
  const [overlay,setOverlay] = useState(false);
  const [visible,setVisible] = useState(false);
  const [menuVisible,setmenuVisible] = useState(false);
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
  const changeMenu = () =>{
    setmenuVisible(!menuVisible)
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
    <div className="App font-type">
      <div className='navbar row-space-btw'>
        <div className='left-nav row-space-btw'>
          <button className='initial menu-logo center' onClick={changeMenu}><img src={menu} className='point'></img></button>
          <img src={logo} className='logo point'></img>
          <div className='menu-content center'>
              <div>Collections</div>
              <div>Men</div>
              <div>Women</div>
              <div>About</div>
              <div>Contact</div>
          </div>
          <div className={`${menuVisible?'overlay':''}`}>
            <div className={`nav-content ${menuVisible?'show ':'hide'}`}>
              <button className='initial' onClick={changeMenu} style={{paddingBottom:'2vh'}}><img src={close}></img></button>
              <div>Collections</div>
              <div>Men</div>
              <div>Women</div>
              <div>About</div>
              <div>Contact</div>
            </div>
          </div>
          
        </div>
        <div className='right-nav row-space-btw'>
        <div>
            <button className='initial' onClick={expandCart}><img src={cart2} style={{height: '3vh'}} className='point'></img></button>
            <div className={`prod-notify ${product?'':'hide'}`}>{count}</div>
            <div className={`expanded-cart-section ${visible?'show':'hide'}`}>
              <div className='cart-title'>Cart</div>
              <div className='expanded-content'>
              <div className={`empty-msg ${product?'hide':''}`}>Cart is empty</div>
                <div className={`prod-container row-space-btw ${product?'':'hide'}`}>
                  <img src={imt1} className='added-prod-img'></img>
                  <div className='cart-product'>
                    <div>Fall Limited Edition Sneakers</div>
                    <div>$125.00 x {count} <b style={{color:'hsl(220, 13%, 13%)'}}>${125.00*count}</b></div>
                  </div>
                  <button className='initial' onClick={removeItem}><img src={bin} className='delete-img'></img></button>
                </div>
                <button className={`initial font-type check-btn ${product?'':'hide'}`} onClick={expandCart}>Checkout</button>
              </div>
            </div>
          </div>
          <img src={pfp} style={{height: '5vh'}}></img>
        </div>
      </div>
      <div className='product-section'>
        <div className='img-section'>
          <div className='main-img-section'>
            <img src={images[slide]} className='main-img'></img>
            <div className='slider row-space-btw'>
              <button className='slide-btn center point prev' onClick={prevImage}><img src={ls} style={{width: '1.5vh', height:'2vh'}} ></img></button>
              <button className='slide-btn center point next' onClick={nextImage}><img src={rs} style={{width: '1.5vh',height:'2vh'}}></img></button>
            </div>
          </div>
          <button className='initial' onClick={changeOverlay}><img src={image} className='product-img'></img></button>
          <div className='arr-imgs'>
            <img src={imt1} className={`${highlight[0]?'highlight':''}`} onClick={() => changeImage(0)}></img>
            <img src={imt2} className={`${highlight[1]?'highlight':''}`} onClick={() => changeImage(1)}></img>
            <img src={imt3} className={`${highlight[2]?'highlight':''}`} onClick={() => changeImage(2)}></img>
            <img src={imt4} className={`${highlight[3]?'highlight':''}`} onClick={() => changeImage(3)}></img>
          </div>
        </div>
        <div className='product-desc center'>
          <div className='details'>
            <div className='brand'>SNEAKER COMPANY</div>
            <div className='shoe-type'>Fall Limited Edition Sneakers</div>
            <div className='shoe-desc'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they'll withstand everything the weather can offer.</div>
          </div>
          <div className='price-details row-space-btw'>
            <div className='current-price row-space-btw'>
              <div className='price'>$125.00</div>
              <div className='discount center'>50%</div>
            </div>
            <div className='MRP'>$250.00</div>
          </div>
          <div className='add-to-cart'>
            <div className='counter row-space-btw'>
              <button style={{all:'initial'}} onClick={decrement}><img src={minus} className='point'></img></button>
              <div>{count}</div>
              <button style={{all:'initial'}} onClick={increment}><img src={plus} className='point'></img></button>
            </div>
            <button className='btn-section initial font-type center' onClick={addCart} style={{fontWeight:'700'}}>
              <img src={cart2}></img>
              <div>Add to cart</div>
            </button>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default App;
