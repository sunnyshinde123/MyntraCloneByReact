import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
export default function Header(){

    let bagItem=useSelector((store)=> store.BagItem);
  return (
    <>
    <header className="header">
        <div className="Logo headerIn">
            <Link to="/"><img src="Images/myntra_logo.webp" className="myntraIcon" alt="image"/></Link>
        </div>
        <div className="ListTag headerIn">
            <Link href="#">MEN</Link>
            <a href="#">WOMEN</a>
            <a href="#">KIDS</a>
            <a href="#">HOME & LIVING</a>
            <a href="#">BEAUTY</a>
            <a href="#">STUDIO</a>
        </div>
        <div className="search-bar headerIn">
            <div className="search-icon">
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <input type="text" placeholder="search" className="search-input"/>
        </div>
        <div className="icon-box headerIn">
            <div className="each-icon">
                <i className="fa-regular fa-user"></i>
                <a href="#">Profile</a>
            </div>
            <div className="each-icon">
                <i className="fa-regular fa-heart"></i>
                <a href="">Wishtle</a>
            </div>
            <div className="each-icon">
                <i className="fa-solid fa-bag-shopping bag"></i>
                <Link to="/Bag">Bag</Link>
                <span className="Bag-Item-Count">{bagItem.length}</span>
            </div>
        </div>
        
    </header>
    </>
  )
}