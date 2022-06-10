import styled from 'styled-components';

export const CharacterInfosHeader = styled.header`
  display: flex;
  padding-top: 30px;
  h1 {
    color: #000;
    font-weight: 600;
    font-family: 'Courgette', cursive;
  }
  p {
    font-weight: 200;
    padding-top: 8px;
  }
  img {
    justify-self: right;
    height: 300px;
    width: 300px;
    border-radius: 50%;
    box-shadow: 11px 17px 21px 4px rgba(0, 0, 0, 0.1);
  }
  input {
    border: none;
    border-radius: 5px;
    padding: 0 44px 0 8px;
    font-size: 18px;
    background-color: #d3d7de;
    opacity: 0.5;
    width: 192px;
    line-height: 28px;
    height: 34px;
  }
  button {
    border: none;
    background-color: #b7b7b7;
    padding: 5px;
    color: #fff;
    position: absolute;
    margin-left: 155px;
    border-radius: 5px 5px 5px 5px;
    z-index: 2;
  }
  .content-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .character-description {
    border-top: solid 1px;
    border-color: #dadde3;
  }
  @media (max-width: 992px) {
    .character-img {
      margin: 35px 0;
    }
  }
`;
