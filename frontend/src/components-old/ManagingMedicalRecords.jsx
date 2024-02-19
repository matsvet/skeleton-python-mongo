import React from 'react';
import s from "./styles.module.css";

const ManagingMedicalRecords = () => {
    return (
        <div style={{padding: '0 20rem'}}>
            <div className={`${s.flex} ${s.flex_center} ${s.header_medium}`}>
                Управление медицинскими записями
            </div>
            <div className={s.flex_column}>
                <input placeholder={'Идентификатор пациента'} className={s.input}/>
                <input placeholder={'Идентификатор лечащего врача'} className={s.input}/>
                <button className={`${s.btn_main} ${s.input}`}>Выберите дату визита</button>
                <textarea placeholder={'Диагноз'} className={s.input}/>
            </div>
            <div className={`${s.flex} ${s.flex_center} ${s.flex_gap_medium}`}
                 style={{marginTop: '2rem'}}>
                <button className={s.btn_second}>Создать запись</button>
                <button className={s.btn_danger}>Обновить запись</button>
                <button className={s.btn_main}>Получить записи</button>
            </div>
        </div>
    );
};

export default ManagingMedicalRecords;