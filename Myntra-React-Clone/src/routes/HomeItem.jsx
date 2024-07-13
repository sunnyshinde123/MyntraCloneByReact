import {useSelector, useDispatch} from "react-redux"
import { useLoaderData } from "react-router-dom";
import { bagSliceAction } from "../store/bagSlice";

export default function HomeItem(){

  let items=useSelector((store)=> store.item);
  let dispatch=useDispatch();
  let bagItem=useSelector((store)=> store.BagItem);
  return (
    <>
    <main>
      <div className="main-section">
        {items.map((ele)=> {
          return (<div className="card card-section" style={{width: "18rem"}} key={ele.id}>
            <div className="img-box">
                <img src={ele.image} className="card-img-top card-img" alt="..."/>
                <span><b>{ele.rating.stars}<i className="fa-solid fa-star"></i>|{ele.rating.count}</b></span>
            </div>
            <div className="card-body">
              <h5 className="card-title">{ele.company}</h5>
              <span className="card-text">{ele.item_name}</span>
              <span className="price-span"><br/><b>Rs. {ele.current_price}</b>&nbsp;</span> <span className="old-price">Rs {ele.original_price}</span> &nbsp;<span className="discount">({ele.discount_percentage}% OFF)</span>
              <div className="tagBtn">
                {bagItem.indexOf(ele)>=0 ? <a href="#" className="btn btn-warning btn-add-bag" onClick={()=> dispatch(bagSliceAction.removeItemFromBag(ele.id))}><i class="fa-solid fa-trash"></i> Remove</a > : <a href="#" className="btn btn-success btn-add-bag" onClick={()=> dispatch(bagSliceAction.addItemInBag(ele))}> <i class="fa-solid fa-cart-arrow-down"></i> Add to Bag</a>}
              </div>
      
              
            </div> 
          </div>)
        })}
      </div>
    </main>
    </>
  )
}

// export const getData=()=>{
//   return (
//     fetch("http://localhost:2080/items")
//       .then((res) => res.json())
//       .then((data) => {
//         return data.items;
//       })
//   )
// }