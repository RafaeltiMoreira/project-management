/* eslint-disable react/prop-types */
import './Card.css';

export default function Card(props) {
  return (
    <div className='card'>
      <h1>{props.item.title}</h1>
      <img src={props.item.image} />
      <h2>{props.item.description}</h2>
      <a href={props.item.deploy} target="_blank" rel="noopener noreferrer">
        <ion-icon name="logo-github"></ion-icon>
      </a>
    </div>
  )
}