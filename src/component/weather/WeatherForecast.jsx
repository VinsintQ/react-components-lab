import './WeatherForecast.css';

const weather = ({weather:{day,img,imgAlt,time,conditions}})=>{

return (




<div className="weather">
  <h2>{day}</h2>
  <img src={img} alt={imgAlt} />
  <p><span>conditions: </span>{conditions}</p>
  <p><span>time: </span>{time}</p>
</div>






)


}
export default weather ;