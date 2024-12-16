// import '../css/navbar.css';
import Link from 'next/link';
import * as React from 'react';

// export interfacen NavbarProps {
// }

export function Navbar () {
  return (
    <div>
      <div className='navbar'>
        <div className='navbar-content'>
          <Link href='/'>Home</Link>
          <Link href='/articles'>Article</Link>
          <div className='navbar-logo'>
              <span>Tahutech.</span>
          </div>
          <Link href='/categories'>Categories</Link>
          <Link href='/about'>About</Link>
        </div>
      </div>
    </div>
  );
}
