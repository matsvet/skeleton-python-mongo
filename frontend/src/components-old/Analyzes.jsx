import React from 'react';
import s from "./styles.module.css";

const Analyzes = () => {
    return (
        <div style={{padding: '0 20rem'}}>
            <div className={`${s.flex} ${s.flex_center} ${s.header_medium}`}>
                Запись результатов анализов
            </div>
            <div className={s.flex_column}>
                <input placeholder={'Идентификатор пациента'} className={s.input}/>
                <input placeholder={'Идентификатор лаборатории, в которой проводиться анализ'} className={s.input}/>
                <select defaultValue={'default'} className={s.input}>
                    <option disabled value={'default'}>Тип анализа</option>
                </select>
                <button className={`${s.btn_main} ${s.input}`}>Загрузить результат</button>
            </div>
            <div className={`${s.flex} ${s.flex_center} ${s.flex_gap_medium}`}
                 style={{marginTop: '2rem'}}>
                <button className={s.btn_second}>Сохранить</button>
                <button className={s.btn_danger}>Очистить поля</button>
            </div>
        </div>
    );
};

export default Analyzes;