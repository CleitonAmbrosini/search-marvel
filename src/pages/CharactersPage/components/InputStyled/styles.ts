import styled from 'styled-components';

export const StyledInput = styled.header`
  padding-top: 20px;
  .search-box {
    background: #cb0000;
    height: 40px;
    border-radius: 50px;
    margin: 5px;

    &:hover {
      & > .search-input {
        width: 240px;
        padding: 0 15px;
      }
      & > .search-btn,
      + .search-btn,
      :not(:placeholder-shown) + .search-btn {
        background: #fff;
        color: #cb0000;
        border-radius: 50px 5px 5px 50px;
      }
    }

    .search-input {
      outline: none;
      border: none;
      background: none;
      width: 0;
      padding: 0;
      color: #fff;
      font-size: 16px;
      transition: 0.3s;
      line-height: 40px;

      &::placeholder {
        color: #dbc5b0;
      }

      &:focus,
      :not(:placeholder-shown) {
        width: 240px;
        padding-left: 15px;
      }
    }

    .search-btn {
      color: #fff;
      float: right;
      width: 40px;
      height: 40px;
      border-radius: 50px;
      background: #e61919;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      transition: 0.3s;

      .search-text {
        margin-right: 5px;
      }
    }
  }
`;
