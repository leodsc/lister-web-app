import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function HeaderFooter() {
  return (
    <><Header /><Footer /><Outlet /></>
  )
}

export default HeaderFooter;