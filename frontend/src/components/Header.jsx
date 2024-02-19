import React from 'react';
import styles from './styles.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className={`${styles.header} ${styles.flex} ${styles.flex_center}`}>
      <NavLink
        to={'/'}
        className={({ isActive }) =>
          isActive
            ? `${styles.btn_home_active} ${styles.btn_home}`
            : `${styles.btn_main} ${styles.btn_home}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to={'/crud-collection'}
        className={({ isActive }) =>
          isActive
            ? `${styles.btn_home_active} ${styles.btn_home}`
            : `${styles.btn_main} ${styles.btn_home}`
        }
      >
        CrudCollection
      </NavLink>
      <NavLink
        to={'/second-crud-collection'}
        className={({ isActive }) =>
          isActive
            ? `${styles.btn_home_active} ${styles.btn_home}`
            : `${styles.btn_main} ${styles.btn_home}`
        }
      >
        SecondCrudCollection
      </NavLink>
    </div>
  );
};

export default Header;
