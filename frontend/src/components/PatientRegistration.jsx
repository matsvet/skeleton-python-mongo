import React from 'react';
import s from "./styles.module.css";

const PatientRegistration = () => {
    return (
        <div style={{padding: '0 20rem'}}>
            <div className={`${s.flex} ${s.flex_center} ${s.header_medium}`}>
                Заполнение данных о новом пациенте
            </div>
            <div className={s.flex_column}>
                <input placeholder={'Введите имя'} className={s.input}/>
                <input placeholder={'Введите фамилию'} className={s.input}/>
                <button className={`${s.btn_main} ${s.input}`}>Выберите дату рождения</button>
                <select defaultValue={'default'} className={s.input}>
                    <option disabled value={'default'}>Выберите пол</option>
                    <option value={'m'}>Мужской</option>
                    <option value={'f'}>Женский</option>
                </select>
                <input placeholder={'Введите адрес'} className={s.input}/>
                <input placeholder={'Введите контактный номер'} className={s.input}/>
            </div>
            <div className={`${s.flex} ${s.flex_center} ${s.flex_gap_medium}`}
                 style={{marginTop: '2rem'}}>
                <button className={s.btn_second}>Сохранить</button>
                <button className={s.btn_danger}>Очистить поля</button>
            </div>
        </div>
    );
};

export default PatientRegistration;