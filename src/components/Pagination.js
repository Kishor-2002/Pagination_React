import "./styles.css";
import Pagination from "./componenets/Pagination";


const CHECKOUT_STEPS = [
  {
    name:"Customer info",
    Component: () => <div>Provide Your Contact Details</div> 
  },
  {
    name:"Shipping info",
    Component: () => <div>Enter Your Shipping Address</div> 
  },
  {
    name:"Payment",
    Component: () => <div>Provide Your Payment Details</div> 
  },
  {
    name:"Delivery",
    Component: () => <div>Your Product is out for delivery</div> 
  }
]
export default function App() {
  return (
    <div className="App">
      <h2>Checkout</h2>
      <Pagination checkoutSteps={CHECKOUT_STEPS} />
    </div>
  );
}
