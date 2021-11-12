import React from "react";
import { Item } from "./styled"
import { Link } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

  let price = ``;
  if (!props.data.price) {
    price = `Preço Negociável`;
  } else {
    price = `R$ ${props.data.price}`;
  }
  // console.log(props.data.price);

  return (
    <Item className="aditem">
      <Link to={`/ad/${props.data.id}`}>
        <div className="itemImage">
          {props.data.images &&
            props.data.images.length > 0 &&
            props.data.images.map((image, index) =>
              < img key={index} src={`http://alunos.b7web.com.br:501/media/${image.url}`} alt="item" />
            )
          }
          {props.data.image &&
            <img src={props.data.image} alt="item" />
          }

        </div>
        <div className="itemName">
          {props.data.title}
        </div>
        <div className="itemPrice">
          {price}
        </div>
      </Link>
    </Item>
  )
}