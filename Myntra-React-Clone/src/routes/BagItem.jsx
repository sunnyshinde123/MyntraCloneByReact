import {useSelector, useDispatch} from "react-redux"
import { bagSliceAction } from "../store/bagSlice";
export default function BagItem() {

let dispatch=useDispatch();
let bagItem=useSelector((store)=> store.BagItem);
let totalMRP=0;
let discountMRP=0;
const ConvenienceFee=99;
let totalAmt=0;
bagItem.forEach((ele)=> {
  totalMRP+=ele.original_price;
  discountMRP+=ele.current_price;
  totalAmt+=totalMRP-discountMRP+ConvenienceFee;
})
  return (
    <>
        <main className="main-page">
      <div className="leftSide" >
      {bagItem.map((item)=>{
      return (
        <>
            <div className="main-left">
                <div className="bagImage">
                <div className="img-cover">
                    <img src={item.image} alt="" />
                </div>
                <div className="img-data">
                    <h3>{item.company}</h3>
                    <span>{item.item_name}<br/>
                        <b>Rs {item.current_price}</b> <span class="old-price">Rs {item.original_price}</span>({item.discount_percentage}% OFF)
                    </span>
                    <br/><br/>
                    <p><b><span style={{fontSize: "1.07rem", fontWeight: "900"}}>{item.return_period} days</span> return available</b> <br/>
                    Delivery by <span style={{color: "greenyellow", fontWeight: "900"}}>{item.delivery_date}</span> </p>
                </div>
                </div>
                <div>
                <button className="btn btn-danger" onClick={()=> dispatch(bagSliceAction.removeItemFromBag(item.id))}><i className="fa-solid fa-trash"></i></button>
                </div>
            </div>
            </>
      )
    })}
        </div>
        <div className="price-data">
            <div className="one-grid">
                <p>PRICE DETAILS({bagItem.length} items)</p>
            </div>
            <div className="two-grid">
                <div className="two-grid-one">
                    <p>Total MRP</p>
                    <p>Discount MRP</p>
                    <p>Convenience Fee</p>
                    <p><b>Total Amount</b></p>
                </div>
                <div className="two-grid-two">
                  <p>&#8377; {totalMRP}</p>
                  <p>&#8377; {discountMRP}</p>
                  <p>&#8377; {ConvenienceFee}</p>
                  <p><b>&#8377; {totalAmt}</b></p>
                </div>
            </div>
            <div className="third-grid">
                <button className="btn btn-primary">PLACE ORDER</button>
            </div>
        </div>
        </main>
    </>
  );
}
