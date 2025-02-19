import React, { useState } from 'react';
import Burger from './Burger/Burger';
import s from './Header.module.css';
import Logo from './Logo';
import Modal from './Modal/Modal';
import Navigation from './Navigation/Navigation';
import SignOut from './SignOut/SignOut';
import UserInfo from './UserInfo/UserInfo';

function Header({ isLoggedIn, userEmail, handleSignOutBtnClick }) {
  const [isModalOpen, setModal] = useState(false);

  const handleModal = () => {
    setModal(!isModalOpen);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleLogOut = () => {
    handleSignOutBtnClick();
    setModal(false);
  };

  return (
    <div className={s.box}>
      <div className={s.innerBox}>
        <header className={s.header}>
          <Logo />
          <div className={s.container}>
            <Navigation isLoggedIn={isLoggedIn} />
            {isLoggedIn && <UserInfo userEmail={userEmail} />}
            <Burger isModalOpen={isModalOpen} onClick={handleModal} />
            {isLoggedIn && <SignOut onClick={handleLogOut} />}
          </div>
          {isModalOpen && (
            <Modal
              onClick={handleLogOut}
              isLoggedIn={isLoggedIn}
              closeModal={closeModal}
            />
          )}
        </header>
      </div>
    </div>
  );
}

export default Header;
