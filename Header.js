import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket},dispatch]=useStateValue();

    return (
        <div className='header'>

           <Link to='/'>
             <img className="header_logo" 
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="logo" />

           </Link>
            
            <div className="header_search">
                <input className="header_searchInput" type="text"/>
                <SearchIcon className="header_searchIcon" />

            </div>

            <div className="header_nav" >
                
                <Link to='/Login'>
                <div className='header_option'>
                    <span className='header_optionLionOne'>
                        Hello Guest
                    </span>
                    <span className='header_optionLionTwo'>
                        Sign In
                    </span>
                </div>
                </Link>

                <div className='header_option'>
                <span className='header_optionLionOne'>
                        Returns
                    </span>
                    <span className='header_optionLionTwo'>
                        & Orders
                    </span>
                </div>

                <div className='header_option'>
                <span className='header_optionLionOne'>
                        Your
                    </span>
                    <span className='header_optionLionTwo'>
                        Prime
                    </span>
                </div>
                <Link to='/Checkout'>
                    <div className='header_optionBasket'>
                     <ShoppingBasketIcon />
                     <span className='header_optionLionTwo header_basketCount'>
                       {basket?.length}
                     </span>
                     </div>
                </Link>
                


            </div>
        </div>
        

    )
}

export default Header
