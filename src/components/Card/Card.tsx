import React from "react";

import Button from '../Button';
import "./Card.css";

export interface CardProps {
  title: string;
  desc: string;
  cardbg?: string;
  imgbg?: string;
  imgURL?: string;
  imgvisible: boolean | true;
  buttonText?: string;
  buttonHref: string;
  buttonbg?: string;
}

const Card = (props: CardProps) => {
  const isletter = /^[a-zA-Z]+$/.test(props.title);

  return (
    <div className="cardBox" style={{ background: props.cardbg || '#a06aff' }}>
      {props.imgvisible &&
        <div className="imgBox" style={{ background: props.imgbg || '#773ae7' }}>
          <img src={props.imgURL || 'https://static.apiseven.com/202108/book_icon.svg'} alt="" />
        </div>
      }
      <div className="cardBody">
        <div className="titleBox" style={{ display: isletter ? 'table-caption' : '' }}>
          <p>{props.title}</p>
        </div>
        <p>{props.desc}</p>
      </div>
      <div>
        <div className="cardButton">
          <a href={props.buttonHref} target='_blank'>
            <Button style={{ border: 'none', backgroundColor: props.buttonbg || '#773ae7' }} label={props.buttonText || props.title} />
          </a>
        </div>
      </div>
    </div>
  )
};

export default Card;
