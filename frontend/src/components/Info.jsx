import React from 'react';
import s from "./styles.module.css";

const Info = () => {
    return (
        <div style={{padding: '0 20rem'}}>
            <div className={`${s.flex} ${s.flex_center} ${s.header_medium}`}>
                Получение данных
            </div>
            <div className={s.flex_column}>
                <button className={`${s.btn_main} ${s.input}`}>Получить данные по пациентам</button>
                <div className={`${s.flex} ${s.flex_gap_medium}`}>
                    <input placeholder={'Идентификатор пациента'} className={s.input}/>
                    <button className={`${s.btn_main} ${s.input}`}>Получить данные по идентифик. пациента</button>
                </div>
                <textarea placeholder={'Данные'} className={s.input}/>
                <button className={`${s.btn_main} ${s.input}`}>Получить данные по докторам</button>
                <div className={`${s.flex} ${s.flex_gap_medium}`}>
                    <input placeholder={'Идентификатор доктора'} className={s.input}/>
                    <button className={`${s.btn_main} ${s.input}`}>Получить данные по идентифик. доктора</button>
                </div>
                <textarea placeholder={'Данные'} className={s.input}/>
                <button className={`${s.btn_main} ${s.input}`}>Получить данные по анализам</button>
                <div className={`${s.flex} ${s.flex_gap_medium}`}>
                    <input placeholder={'Идентификатор анализа'} className={s.input}/>
                    <button className={`${s.btn_main} ${s.input}`}>Получить данные по идентифик. анализа</button>
                </div>
                <textarea placeholder={'Данные'} className={s.input}/>
            </div>
        </div>
    );
};

export default Info;