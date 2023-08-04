import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from '../Redux/Menu/menuSlice';
import useMedia from '../hooks/useMedia';

export default function NavBar() {
  const isWide = useMedia('(max-width: 768px)');
  const isOpen = useSelector((state) => state.menu.isOpen);
  const dispatch = useDispatch();

  const handleOpenMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      <nav>
        <div>
          <a href="/">Logo</a>
        </div>
        {!isWide && (
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        )}
        {isWide && (<button type="button" onClick={handleOpenMenu}>Menu</button>)}
      </nav>
      {isOpen && (
      <div>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      )}
    </>
  );
}
