import React from "react";
import img from "../../assets/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {

  return (
    <div >
      <header className={classes.header}>
          <h1>React Food Hub</h1>
          <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
          <img src={img} alt="A table full of delicous foods" />
      </div>
    </div>
  );
};

export default Header;
