import { Fragment } from 'react'
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/086 crown.svg';

import './navigation.style.scss'

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo'></CrwnLogo>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            商店
          </Link>
          <Link className='nav-link' to='/sign-in'>
            登录
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation