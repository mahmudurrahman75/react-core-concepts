import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const persons = ['mos', 'miz', 'lamia', 'mah']
  const products = [
    {name: 'photoshop',price:'$90.99'},
    {name: 'Illustrator',price:'$60.99'},
    {name: 'PDF', price:'$6.99'}

  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            persons.map(person => <li>{person}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
          {
            products.map(product => <li>{product.price}</li>)
          }
        </ul>
          {/* {
            products.map(Product =><Product product={product}></Product>)
          } */}
          {/* {
            <Product Product={Products[0]}></Product>
          } */}
          {/* <Product></Product> */}
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount]=useState(10);
  const handleIncrease = () =>setCount(count + 1);
  const handleDecrease = ()=>setCount(count-1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick ={handleDecrease}>Decrease</button>
    </div>
  )
}

function Users (){
  const [users,setUsers]= useState([]);
  useEffect(()=>{
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=> setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
        {
          users.map(user=><li>{user.name}</li>)
        }
        {
          users.map(user=><li>{user.phone}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const ProductStyle = {
    border:"1px solid gray",
    borderRadius:"5px",
    backgroundColor: "lightGray",
    height:'200px',
    weight: '200px',
    float: 'left',
  }
  const {name,price}= props.Product;
  console.log(name,price)

  return (
    <div style = {ProductStyle}>
      <h5>{props.name}</h5>
      <h4>{props.price}</h4>
      <button>Buy now</button>
    </div>
  )
}
export default App;
