import React, {useEffect, useState} from 'react';
import s from './styles.module.css'
import axios from "axios";


const SeriesItem = ({item}) => {
  const deleteSeries = () => {
    const url = `http://localhost:8000/series/${item._id}`
    axios.delete(url).then(response => {
      const result = response.data
      const {status, message} = result
      if (status !== 'Success') {
        alert(message, status)
      } else {
        alert(message)
      }
    }).catch(err => {
      console.log(err)
    }).finally(() => window.location.reload())
  }
  return <li className={s.series_item}>
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
        <h1>{item.title}</h1>
        <h2>{item.premiere}</h2>
        <h2>{item.rating}</h2>
        <h2>{item.trailer}</h2>
        <h2>{item.cover}</h2>
        <h2>{item.seasons}</h2>
      </div>
      <div className={s.flex_column}>
        <button onClick={deleteSeries}
                className={s.btn_danger}>
          Delete
        </button>
      </div>
    </div>
  </li>
}

const Series = () => {
  const [seriesData, setSeriesData] = useState([])
  const getSeriesData = () => {
    const url = "http://localhost:8000/series/"
    axios.get(url).then(response => {
      const result = response.data
      const {status, message, data} = result
      if (status === "Success") {
        setSeriesData(data)
      } else {
        alert(`${message}\n${status}`)
      }
    }).catch(error => console.log(error))
  }
  useEffect(() => {
    getSeriesData()
  }, [])
  return <article>
    <ul>
      {seriesData.map(item => <SeriesItem item={item}
                                          key={Math.random() + Date()}/>)}
    </ul>
  </article>
};

export default Series;