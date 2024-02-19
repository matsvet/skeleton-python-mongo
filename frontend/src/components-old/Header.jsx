import React from 'react';
import s from "./styles.module.css";
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <div className={`${s.header} ${s.flex} ${s.flex_center}`}>
        <NavLink to={'/patient_registration'}
                 className={({isActive}) =>
                     (isActive ? `${s.btn_home_active} ${s.btn_home}` : `${s.btn_main} ${s.btn_home}`)}>
            Регистрация пациентов
        </NavLink>
        <NavLink to={'/managing_medical_records'} className={({isActive}) =>
                     (isActive ? `${s.btn_home_active} ${s.btn_home}` : `${s.btn_main} ${s.btn_home}`)}>
            Медицинские записи
        </NavLink>
        <NavLink to={'/analyzes'} className={({isActive}) =>
                     (isActive ? `${s.btn_home_active} ${s.btn_home}` : `${s.btn_main} ${s.btn_home}`)}>
            Анализы
        </NavLink>
        <NavLink to={'/images'} className={({isActive}) =>
                     (isActive ? `${s.btn_home_active} ${s.btn_home}` : `${s.btn_main} ${s.btn_home}`)}>
            Изображения
        </NavLink>
        <NavLink to={'/info'} className={({isActive}) =>
            (isActive ? `${s.btn_home_active} ${s.btn_home}` : `${s.btn_main} ${s.btn_home}`)}>
            Информация
        </NavLink>
        <NavLink to={'/authorization'} className={({isActive}) =>
            (isActive ? `${s.btn_home_active} ${s.btn_home}` : `${s.btn_second} ${s.btn_home}`)}>
            Авторизация
        </NavLink>
    </div>
  );
};

export default Header;