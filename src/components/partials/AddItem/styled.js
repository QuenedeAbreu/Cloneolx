import Styled from 'styled-components';

export const Item = Styled.div`
  a{
    display: block;
    border: 1px solid #fff;
    padding: 10px;
    text-decoration: none;
    margin: 10px;
    border-radius: 5px;
    color: #000;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
    
    &:hover{
      border: 1px solid #ccc
    }

    .itemImage img{
      width: 100%;
      border-radius: 5px;

    }
    .itemName{
     
      font-weight: bold;

    }
    .itemPrice{

    }
  }
`