import Styled from 'styled-components';

export const Item = Styled.div`
.aditem--all{
    display: block;
    border: 1px solid #fff;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    
    background-color: #fff;
    transition: all 0.3s ease-in-out;
    
    &:hover{
      border: 1px solid #ccc
    }

    a{
      text-decoration: none;
      color: #000;
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
    button{
      width: 100%;
      height: 30px;
      background-color: #0089FF;
      border: none;
      outline: none;
      padding: 5px 10px;
      color: #fff;
      font-size: 15px;
      cursor: pointer;
      border-radius: 4px;
      font-weight: bold;

      &:hover{
        background-color: #006FCE;
      }
    }
  }
`