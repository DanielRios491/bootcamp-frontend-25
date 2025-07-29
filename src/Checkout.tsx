import { useEffect, useState } from 'react';
import styles from './Checkout.module.css';
import { LoadingIcon } from './Icons';
import { getProducts, Product as ProductType } from './dataService';
// import { getProducts } from './dataService';

// You are provided with an incomplete <Checkout /> component.
// You are not allowed to add any additional HTML elements.
// You are not allowed to use refs.

// Demo video - You can view how the completed functionality should look at: https://drive.google.com/file/d/1bcXpGUzJUyUwITOqEn8QPj8ZOgUbTGQD/view?usp=sharing

// Once the <Checkout /> component is mounted, load the products using the getProducts function.
// Once all the data is successfully loaded, hide the loading icon.
// Render each product object as a <Product/> component, passing in the necessary props.
// Implement the following functionality:
//  - The add and remove buttons should adjust the ordered quantity of each product
//  - The add and remove buttons should be enabled/disabled to ensure that the ordered quantity can’t be negative and can’t exceed the available count for that product.
//  - The total shown for each product should be calculated based on the ordered quantity and the price
//  - The total in the order summary should be calculated
//  - For orders over $1000, apply a 10% discount to the order. Display the discount text only if a discount has been applied.
//  - The total should reflect any discount that has been applied
//  - All dollar amounts should be displayed to 2 decimal places

type ProductDataType = { 
  id: number;
  name: string;
  availableCount: number;
  price: number;
  orderedQuantity: number;
  total: number;
}

const Product = ({id, name, availableCount, price, orderedQuantity, total} : ProductDataType) => {
  const [orderedQ, setOrderedQ] = useState(orderedQuantity)
  const [totalS, setTotalS] = useState(total)

  const handleAddProduct = () => {
    console.log("adding")
    if (orderedQ == availableCount) {
      return;
    }
    setOrderedQ(prev => prev++)
  }

  const handleLessProduct = () => {
    if (orderedQ == 0) {
      return;
    }
    setOrderedQ(prev => prev--)
  }

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{availableCount}</td>
      <td>${price}</td>
      <td>{orderedQ}</td>   
      <td>${totalS}</td>
      <td>
        <button className={styles.actionButton} onClick={() => handleAddProduct()}>+</button>
        <button className={styles.actionButton} onClick={() => handleLessProduct()}>-</button>
      </td>
    </tr>    
  );
}


const Checkout = () => {

  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect( () => {

    async function getData() {
      const result = await getProducts();
    
      setProducts(result)
    }
    getData()
  }, [])

  return (
    <div>
      <header className={styles.header}>        
        <h1>Electro World</h1>        
      </header>
      <main>
        <LoadingIcon />        
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th># Available</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {/* Products should be rendered here */}
          {products && products.map((product, index) => {
            const id = product.id;
            const name = product.name;
            const availableCount = product.availableCount;
            const price = product.price;
            const orderedQuantity = 0;
            const total = 0;
            return (
              <Product key={index} id={id} name={name} availableCount={availableCount} price={price} orderedQuantity={orderedQuantity} total={total} />
            );
          })}
          </tbody>
        </table>
        <h2>Order summary</h2>
        <p>Discount: $ </p>
        <p>Total: $ </p>       
      </main>
    </div>
  );
};

export default Checkout;