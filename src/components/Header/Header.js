import React from 'react';
import {ShoppingBasket,Search,LocationOn} from '@mui/icons-material'
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <img className='header__logo' 
            src={'https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png'} 
            alt='logo'/>
            <div className='header__location'>
                <span className='header__location_Hello'>Hello</span>
                <span className='header__location_Place'>
                    <LocationOn/><p className='header__optionLineTwo'>Select your address</p>
                </span>
            </div>
            <div className='header__search'>
                <select className='header__selectOptions'>
                    <option value='all' selected disabled hidden>All</option>
                    <option value=''>All Categories</option>
                    <option value=''>Deals</option>
                    <option value=''>Alexa Skills</option>
                    <option value=''>Amazon Device</option>
                    <option value=''>Amazon Fashion</option>
                    <option value=''>Amazon Fresh</option>
                    <option value=''>Application</option>
                    <option value=''>Apps & Games</option>
                    <option value=''>Baby</option>
                    <option value=''>Car & Motorbike</option>
                    <option value=''>Books</option>
                    <option value=''>Clothings & Accessories</option>
                    <option value=''>Computer & Accessories</option>
                    <option value=''>Electronics</option>
                    <option value=''>Garden & Outdoors</option>
                    <option value=''>Grocery & Gourmet Foods</option>
                    <option value=''>Health & Personal Care</option>
                    <option value=''>Home & Kitchen</option>
                    <option value=''>Musical Instruments</option>
                    <option value=''>Prime Video</option>
                    <option value=''>Movies & TV Shows</option>
                </select>
                <input className='header__searchInput'/>
                <Search className='header__searchIcon'/>
            </div>
                <div className='header__right'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Hello</span>
                        <span className='header__optionLineTwo'>Sign In</span>
                    </div>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Return</span>
                        <span className='header__optionLineTwo'>& Orders</span>
                    </div>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Your</span>
                        <span className='header__optionLineTwo'>Prime</span>
                    </div>
                    <div className='header__optionBasket'>
                        <ShoppingBasket/>
                        <span className='header__optionLineTwo header__basketCount'>5</span>
                    </div>
                </div>
        </nav>
    )
}

export default Header
