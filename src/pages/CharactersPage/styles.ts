import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

export const LoadingStyled = styled.h6`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 120px;
  position: absolute;
`;

export const ButtonMore = styled.div`
  font-size: 40px;
  cursor: pointer;
  &:hover {
    color: red;
  }
  h1 {
    font-size: 18px;
    color: #cb0000;
  }
`;
