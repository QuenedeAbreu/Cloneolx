import styled from 'styled-components';

export const HeaderArea = styled.div`
  height: 60px;
  border-bottom: 1px solid #CCC;
  background-color: #FFF;

  .container{
    max-width: 1000px;
    margin: auto;
    display: flex;
    a{
      text-decoration: none;
    }
    .logo{
      flex: 1;
      display: flex;
      align-items: center;
      height: 60px;
      
      .logo-1, .logo-2, .logo-3{
        font-size: 27px;
        font-weight: bold;
      }
      .logo-1{color: #FF0000;}
      .logo-2{color: #00FF00;}
      .logo-3{color: #0000FF;}
    }
  }

  nav{
    padding: 10px 0;
    ul,li{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    ul{
      display: flex;
      align-items: center;
      height: 40px;
      flex-direction: row;
      div{
        width: 100%;
        display: flex;
      }
    }
    li{
      margin-right: 20px;
      margin-left: 20px;
      a,button{
        border: none;
        color: #000;
        font-size: 14px;
        text-decoration: none;
        font-weight: bold;
        background: none;
        text-decoration: none;
        cursor: pointer;
        outline: none;
        &:hover{
          color: #999;
        } 
        &.button{
          background-color: #FF8100;
          border-radius: 5px;
          color: #FFF;
          padding: 5px 10px;
          transition: all 0.3s;

        }
        &.button:hover{
          background-color: #e57706;
        }
      }
    }
  }

@media (max-width: 600px) {
  &{
    height: auto;
  }
  .container{
    flex-direction: column;
  }
  .logo{
    justify-content: center;
    margin: 20px 0;
  }

  nav ul, nav ul div{
    flex-direction: column !important;
    height: auto;
    justify-content: center;
    align-items: center;

  }

  nav li{
    margin: 5px 20px;
  }
}
`;