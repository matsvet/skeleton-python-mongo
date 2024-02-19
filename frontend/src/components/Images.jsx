import React from 'react';
import s from "./styles.module.css";

const Images = () => {
    return (
        <div style={{padding: '0 20rem'}}>
            <div className={`${s.flex} ${s.flex_center} ${s.header_medium}`}>
                Загрузка нового изображения
            </div>
            <div className={s.flex_column}>
                <input placeholder={'Идентификатор пациента'} className={s.input}/>
                <input placeholder={'Идентификатор анализа'} className={s.input}/>
                <select defaultValue={'default'} className={s.input}>
                    <option disabled value={'default'}>Выберите тип изображения</option>
                </select>
                <button className={`${s.btn_main} ${s.input}`}>Выберите дату изображения</button>
            </div>
            <div className={`${s.flex} ${s.flex_center} ${s.flex_gap_medium}`}
                 style={{marginTop: '2rem'}}>
                <button className={s.btn_second}>Загрузить</button>
                <button className={s.btn_danger}>Сбросить данные</button>
            </div>
        </div>
    );
};

export default Images;