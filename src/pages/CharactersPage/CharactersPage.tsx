import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { Api } from '../../services/Api';
import { credentials } from '../../utils/credentials';
import ICharacter from '../../interfaces/ICharacter';
import { saveSelectedCharacter } from '../../store/Stock/characters/characters.actions';

import Card from '../../components/Molecules/Card/Card';
import Header from '../../components/Organisms/Header/Header';
import InputStyled from './components/InputStyled/InputStyled';
import { Container, CardList, LoadingStyled, ButtonMore } from './styles';

const CharactersPage: React.FC = () => {
  const [charactersList, setCharactersList] = useState<ICharacter[]>([]);
  const [searchName, setSearchName] = useState('');
  const [isLoadMoreCharacters, setIsLoadMoreCharacters] =
    useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getCharacters = async () => {
      try {
        if (searchName === '') {
          const response = await Api.get(`characters?${credentials}`);
          const { results } = response.data.data;
          setCharactersList(results);
        } else {
          const response = await Api.get(
            `characters?nameStartsWith=${searchName}&${credentials}`,
          );
          const { results } = response.data.data;
          setCharactersList(results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCharacters();
  }, [searchName]);

  const setSelectedCharacter = (selectedCharacter: ICharacter | undefined) => {
    if (selectedCharacter) dispatch(saveSelectedCharacter(selectedCharacter));
  };

  const findCharacterInList = (id: number | null) => {
    if (id) {
      const selectedCharacter = charactersList.find(
        (character) => character.id === id,
      );
      setSelectedCharacter(selectedCharacter);
    }
  };

  const updateName = (newValue: string) => {
    setSearchName(newValue);
  };

  const handleMore = useCallback(async () => {
    try {
      setIsLoadMoreCharacters(true);
      const offset = charactersList.length;
      const response = await Api.get(`characters?${credentials}`, {
        params: {
          offset,
        },
      });
      setCharactersList([...charactersList, ...response.data.data.results]);
    } catch (error) {
      console.log(error);
      setIsLoadMoreCharacters(false);
    }
    setIsLoadMoreCharacters(false);
  }, [charactersList]);

  return (
    <>
      <Header />
      <Container>
        <InputStyled updateName={updateName} />
        {charactersList.length === 0 ? (
          <LoadingStyled>Buscando dados...</LoadingStyled>
        ) : (
          <>
            <CardList>
              {charactersList.map((character) => {
                return (
                  <Link
                    to={'/character-details'}
                    key={character.id}
                    onClick={() => findCharacterInList(character.id)}
                  >
                    <Card
                      title={character.name}
                      description="Clique e saiba mais!"
                      urlImg={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    />
                  </Link>
                );
              })}
            </CardList>
            <ButtonMore onClick={handleMore}>
              {isLoadMoreCharacters ? (
                <h1>Buscando dados...</h1>
              ) : (
                <FontAwesomeIcon icon={faPlusCircle} />
              )}
            </ButtonMore>
          </>
        )}
      </Container>
    </>
  );
};

export default CharactersPage;
