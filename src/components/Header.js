import {logo} from '../utils/links'
export const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img src={logo} loading='lazy' />
            </div>
            <div className="navlist">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}