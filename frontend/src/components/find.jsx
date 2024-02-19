import React, {useState} from 'react';
import s from './styles.module.css'
import axios from "axios";

const Find = () => {
  const [Data, setData] = useState([])
  const [Name, setName] = useState("")
  console.log(Name)
  const getSer = () => {
    const url = 'http://localhost:8000/series/title/' + Name
    axios.get(url)
      .then(response => {
        const result = response.data
        const {status, message, data} = result
        if (status !== 'SUCCESS') {
          alert(message, status)
        } else {
          setData(data)
          console.log(data)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }



  return <div>
    <div style={{marginBottom: "2rem"}}>
      Input series name
      <input style={{marginLeft: "1rem"}} onChange={(e) => setName(e.target.value)}/>
      <button style={{marginLeft: "1rem"}} className={s.btn_second} onClick={() => {getSer('1')}}>Find
      </button>
    </div>
    <div className={s.flex}>
      <div className={s.series_item_labels}>
        <div>Title</div>
        <div>Premiere</div>
        <div>Rating</div>
        <div>Trailer</div>
        <div>Cover</div>
        <div>Seasons</div>
      </div>
      <div className={s.series_item_info}>
        <h1>{Data.title}</h1>
        <h2>{Data.premiere}</h2>
        <h2>{Data.rating}</h2>
        <h2>{Data.trailer}</h2>
        <h2>{Data.cover}</h2>
        <h2>{Data.seasons}</h2>
      </div>
    </div>
  </div>
};

export default Find;