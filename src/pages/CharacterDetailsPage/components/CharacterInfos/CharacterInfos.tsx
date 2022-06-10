import React, { FormEvent, useState } from 'react';
import { CharacterInfosHeader } from './styles';
import { useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import {
  editSelectedCharacterName,
  editSelectedCharacterDescription,
} from '../../../../store/Stock/characters/characters.actions';

interface ICharacterInfos {
  name: string;
  description: string;
  imgUrl: string;
}

const CharacterInfos: React.FC<ICharacterInfos> = (props) => {
  const [newCharacterName, setNewCharacterName] = useState('');
  const [newCharacterDescription, setNewCharacterDescription] = useState('');
  const dispatch = useDispatch();
  const formData = new FormData();

  const handleSubmitName = (event: FormEvent) => {
    event.preventDefault();
    formData.append('name', newCharacterName);
    dispatch(editSelectedCharacterName(newCharacterName));
  };

  const handleSubmitDescription = (event: FormEvent) => {
    event.preventDefault();
    formData.append('description', newCharacterDescription);
    dispatch(editSelectedCharacterDescription(newCharacterDescription));
  };

  return (
    <>
      <CharacterInfosHeader>
        <Row className="w-100">
          <Col xs={12} lg={6} xl={3} className="text-center character-img">
            <img src={props.imgUrl} alt={`Image of ${props.name}`} />
          </Col>
          <Col xs={12} lg={6} xl={{ offset: 1 }} className="content-text">
            <Row className="w-100">
              <Col>
                <h1>
                  <em>{props.name}</em>
                </h1>
                <form action="" onSubmit={handleSubmitName}>
                  <button type="submit">SALVAR</button>
                  <input
                    type="text"
                    name="name"
                    placeholder="Editar nome"
                    onChange={(e) => {
                      setNewCharacterName(e.target.value);
                    }}
                  />
                </form>
              </Col>
            </Row>
            <Row className="pt-4 w-100">
              <Col className="character-description">
                <p>
                  <i>{props.description}</i>
                </p>
                <form action="" onSubmit={handleSubmitDescription}>
                  <button type="submit">SALVAR</button>
                  <input
                    type="text"
                    name="description"
                    placeholder="Editar descrição"
                    onChange={(e) => {
                      setNewCharacterDescription(e.target.value);
                    }}
                  />
                </form>
              </Col>
            </Row>
          </Col>
        </Row>
      </CharacterInfosHeader>
    </>
  );
};

export default CharacterInfos;
