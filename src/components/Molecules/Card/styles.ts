import styled from 'styled-components';

interface IStylesInfos {
  urlImg: string;
}

const urlImg = (props: IStylesInfos) => props.urlImg;

export const CardStyled = styled.div`
  .card-styled {
    position: relative;
    width: 300px;
    height: 400px;
    margin: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${urlImg}) no-repeat center;
    background-size: cover;
    transition: 0.3s ease;

    &:hover {
      -webkit-transform: scale(1.02);
      -ms-transform: scale(1.02);
      transform: scale(1.02);
    }

    .bg {
      width: 300px;
      height: 400px;
      background: rgb(0, 0, 0);
      position: absolute;
      border-radius: 15px;
      opacity: 0.3;
    }

    &:hover {
      .bg {
        opacity: 0.7;
      }
    }

    .content {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      transition: 0.5s;
    }

    &:hover .content {
      transform: translateY(-100px);
    }

    .content .contentBx h3 {
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 500;
      font-size: 18px;
      text-align: center;
      margin: 20px 0 10px;
      line-height: 1.1em;
    }

    .content .contentBx h3 span {
      font-size: 12px;
      font-weight: 300;
      text-transform: initial;
    }

    .sci {
      position: absolute;
      bottom: 50px;
      display: flex;
      padding: 0;
    }

    .sci li {
      list-style: none;
      margin: 0 10px;
      transform: translateY(40px);
      transition: 0.5s;
      opacity: 0;
    }

    &:hover .sci li {
      transform: translateY(0px);
      opacity: 1;
    }
    .sci li {
      color: #fff;
      font-size: 14px;
    }
  }
`;
