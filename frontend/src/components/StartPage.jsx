import React from 'react';
import s from "./styles.module.css";

const StartPage = () => {
    return (
        <div className={`${s.flex} ${s.flex_center}`}>
            <h1 className={s.header_large}>Добро пожаловать в интерфейс управления медицинскими данными</h1>
        </div>
    );
};

export default StartPage;