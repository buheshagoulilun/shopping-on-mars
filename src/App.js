import React from 'react';
import './App.css';

let shoppingCartItems = [
  {
    item: 'War and Peace',
    image: 'https://images4.penguinrandomhouse.com/cover/9781400079988',
    description: 'War and Peace broadly focuses on Napoleon’s invasion of Russia in 1812 and follows three of the most well-known characters in literature',
    price: "$100"
  },
  {
    item:'Portal',
    image: 'https://i.ibb.co/SmFsMrR/futuristic-blue-glowing-neon-round-portal-sci-fi-background-118195-79.jpg',
    description:'This special portal links the space ship with Earth',
    price: "Free!!! For you to go home whenever you want:)"
  },
  {
    item:'iPhone 11 Pro Max',
    image:'https://i.ibb.co/PrwyY2j/i-Phone-11-Pro-Max-all-5up.png',
    description:'Pro cameras. Pro display. Pro performance. A suitable device to take good selfies',
    price:"$1099",
  },
  {
    item:'Meal, Ready-to-Eat',
    image:'https://i.ibb.co/SBPsmFj/812l-Kn-Ff-XLL-AC-UL320-SR216-320.jpg',
    description:'Genuine US War Fighter Rations are the ultimate survivalist, Prepper & outdoor enthusiast Meal.',
    price:"$25 for 4 packs",
  },
  {
    item:'LIFEWTR',
    image:'https://i.ibb.co/swNnyQw/81-QW7jner7-L-SL1500.jpg',
    description:'Includes 12 (700ml) bottles of Lifewtr Premium Purified Water with an easy to use flip cap for on-the-go hydration',
    price:"$13.49 for 12 counts"
  },
  {
    item:'Hisense 120-inch 4K Ultra HD Smart HDR Laser TV 2019',
    image:'https://i.ibb.co/VLrSZZp/81-NO0x-Jp6-DL-SL1500.jpg',
    description:'120 Ultra short throw laser projection 4K TV with wide color gamut. Includes 120” Ambient light Rejection (ALR) screen which delivers impressive 180 Degree viewing angles in a well-lit or darkened room ',
    price:'$11999'
  }
]

function App() {
  return (
    <div className="App">
      <h1>Your Shopping Cart</h1>
     <SearchForm />
    {shoppingCartItems.map(ShoppingCart)}
    </div>
  );
}

function ShoppingCart(a) {
  return(
    <div className="cart">
      <Product item={a.item} image={a.image} description={a.description} price={a.price}/>
      
    </div>
  );
}

function Product(props) {
  return(
    <div className="product">
      <img id="img" src={props.image} width="300"/>
      <div className="description">
        <h3>{props.item}</h3>
        <p>{props.description}</p>
        <p id="price">{props.price}</p>
      </div>
      </div>
    
    
    
  )
}

function SearchForm() {
  return(
    <form>
      <label>
        Search:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};







export default App;
