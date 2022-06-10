import React from 'react';
import { CardStyled } from './styles';

interface ICardInfos {
  title: string;
  description: string | null;
  urlImg: string;
}

const Card: React.FC<ICardInfos> = (props) => {
  return (
    <div>
      <CardStyled urlImg={props.urlImg}>
        <div className="card-styled">
          <div className="bg" />
          <div className="content">
            <div className="contentBx">
              <h3>{props.title}</h3>
            </div>
          </div>
          <ul className="sci">
            {props.description ? (
              <li>{props.description}</li>
            ) : (
              <li>Essa série não possui descrição :(</li>
            )}
          </ul>
        </div>
      </CardStyled>
    </div>
  );
};

export default Card;
