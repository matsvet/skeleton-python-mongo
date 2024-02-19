import React, {useState} from 'react';
import s from './styles.module.css'
import axios from "axios";

const Add = () => {
  const [title, setTitle] = useState("")
  const [premiere, setPremiere] = useState("")
  const [rating, setRating] = useState(1)
  const [trailer, setTrailer] = useState("")
  const [cover, setCover] = useState("")
  const [seasons, setSeasons] = useState("")

  const addToDb = () => {
    const url = 'http://localhost:8000/series/'
    const Credentials = {title, premiere, rating, trailer, cover, seasons}
    console.log(Credentials)
    axios.post(url, Credentials)
      .then(response => {
        const result = response.data
        const {status, message} = result
        if (status !== 'Success') {
          alert(message, status)
        } else {
          alert(message)
          window.location.reload()
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  return <div>
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
        <div>
          <input onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div style={{marginTop: ".7rem"}}>
          <input onChange={(e) => setPremiere(e.target.value)}/>
        </div>
        <div style={{marginTop: ".7rem"}}>
          <input onChange={(e) => setRating(e.target.value)}/>
        </div>
        <div style={{marginTop: ".7rem"}}>
          <input onChange={(e) => setTrailer(e.target.value)}/>
        </div>
        <div style={{marginTop: ".7rem"}}>
          <input onChange={(e) => setCover(e.target.value)}/>
        </div>
        <div style={{marginTop: ".7rem"}}>
          <input onChange={(e) => setSeasons(e.target.value)}/>
        </div>
      </div>
    </div>
    <div>
      <button onClick={() => {addToDb()}}
              style={{marginTop: "2rem"}}
              className={s.btn_second}>Add
      </button>
    </div>
  </div>
};

export default Add;