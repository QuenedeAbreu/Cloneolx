import styled from "styled-components";

export const FakeAd = styled.div`
  background-color: #CCC; 
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



export const PageArea = styled.div`
display: flex;
margin-top: 20px;

  .box{
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #ccc;
  margin-bottom: 20px;
}
.box--padding{
  padding: 10px;
}
  .leftSide {
  flex: 1;
  margin-right: 20px;
  .box{
    display: flex;
  }
    
    .adImage { 
      width: 320px;
      height: 320px;
      margin-right: 20px;
      .each-slide img{
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;
        height: 320px;
      }
    }

    .adInfos{
    flex: 1;
      .adName{
        h2{
          margin-top:20px;
        }
        small{
          color: #999;
        }
      margin-bottom: 20px;
    }
      .adDescription{ 
        small{
          color: #999;
        }
      }
  }

}
  .rightSide {

  width: 250px;
}
`;