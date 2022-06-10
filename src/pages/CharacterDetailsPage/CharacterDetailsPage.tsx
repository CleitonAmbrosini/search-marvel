import React, { useState, useEffect } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import ICharacter from '../../interfaces/ICharacter';
import ISeries from '../../interfaces/ISeries';
import { Api } from '../../services/Api';
import { credentials } from '../../utils/credentials';
import INITIAL_STATE from '../../store/Stock/State';

import CharacterInfos from './components/CharacterInfos/CharacterInfos';
import Header from '../../components/Organisms/Header/Header';
import Card from '../../components/Molecules/Card/Card';
import { CardList, LoadingStyled } from './styles';

const CharacterDetailsPage: React.FC = () => {
  const [seriesList, setSeriesList] = useState<ISeries[]>([]);
  const [isGettingData, setIsGettingData] = useState<boolean>(true);
  const [characterDetails, setCharacterDetails] = useState<ICharacter>(
    INITIAL_STATE.selectedCharacter,
  );
  const { selectedCharacter } = useSelector(
    (state: RootStateOrAny) => state.characterReducer,
  );

  useEffect(() => {
    setCharacterDetails(selectedCharacter);
    const getSeries = async () => {
      await Api.get(
        `characters/${String(selectedCharacter.id)}/series?${credentials}`,
      )
        .then((resp) => {
          const { results } = resp.data.data;
          setSeriesList(results);
          setIsGettingData(false);
        })
        .catch((error) => {
          console.error('Failed to load series data.', error);
        });
    };
    getSeries();
  }, [selectedCharacter]);

  return (
    <>
      <Header />
      <Container>
        {isGettingData ? (
          <Row>
            <Col>
              <LoadingStyled>Buscando dados...</LoadingStyled>
            </Col>
          </Row>
        ) : (
          <>
            <Row>
              <Col>
                <CharacterInfos
                  name={characterDetails.name}
                  description={characterDetails.description}
                  imgUrl={`${characterDetails.thumbnail.path}.${characterDetails.thumbnail.extension}`}
                />
              </Col>
            </Row>
            <Row>
              <Col className="pt-5">
                {seriesList.length !== 0 ? (
                  <>
                    <h6>{characterDetails.name} já apareceu nessas séries: </h6>
                    <CardList>
                      {seriesList.map((serie) => {
                        return (
                          <Card
                            title={serie.title}
                            description={serie.description}
                            key={serie.id}
                            urlImg={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
                          />
                        );
                      })}
                    </CardList>
                  </>
                ) : (
                  <h6>
                    Esse personagem não teve participação em nenhuma série :(
                  </h6>
                )}
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
};

export default CharacterDetailsPage;
