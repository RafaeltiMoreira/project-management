/* eslint-disable react/prop-types */
import './Card.css';

export default function Card(props) {
  return (
    <div className='card'>
      <h1>{props.item.name}</h1>
      <img src={props.item.image} />
    </div>
  )
}