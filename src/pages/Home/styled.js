import styled from "styled-components";


export const FakeDiv = styled.div`
  background-color: #999; 
  height:${props => props.height || 20}px;
  animation: fadeIn 5s linear infinite;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const SeachArea = styled.div`
background-color: #DDD;
border-bottom: 1px solid #CCC;
padding: 20px 0;
  .searchBox{
    background-color: #9Bb83c;
    padding:20px 10px;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 0.3px rgba(0,0,0,0.2);
    display: flex;
    form{
      flex: 1;
      display: flex;
      
      input,select{
        height: 40px;
        border: none;
        border-radius: 5px;
        outline: none;
        font-size: 15px;
        color: #000;
        margin-right: 20px;
      }
      input{
        flex: 1;
        padding: 0 10px;
      }
      select{
        width: 100px;
      }
      button {
        background-color: #49AEef;
        font-size: 15px;
        border: none;
        border-radius: 5px;
        color: #FFF;
        height: 40px;
        padding: 0 20px;
        cursor: pointer;
        &:hover{
          background-color: #3c9be9;
        }
      }

    }
  }

  .categoryList{
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    .categoryItem{
      width: 25%;
      display: flex;
      align-items: center;
      color: #000;
      text-decoration: none;
      height: 50px;
      margin-bottom: 10px;
      font-weight: bold;

      &:hover{
        color: #999;
      }
      img{
        width: 45px;
        height: 45px;
        margin-right: 10px;
      }
    }
  }

@media (max-width: 600px) {
  .searchBox form{
    flex-direction: column;
    input{
      padding:10px;
      margin: 0 0 10px 0;
    }
    select{
      width: 100%;
      margin: 0 0 10px 0;
    }
  }
  
  .categoryList .categoryItem{
    width: 50%;
    padding: 10px;
  }
}
`

export const PageArea = styled.div`
h2{
  font-size: 20px;
}
.list{
  display: flex;
  flex-wrap: wrap;
  .aditem{
    width: 25%;
  }
}
.seeAllLink{
  color: #000;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  margin-top: 10px;
}
@media (max-width: 600px) {
  &{
    margin : 10px;
  }
  .list .aditem {
    width: 50%;
  }

}
`
