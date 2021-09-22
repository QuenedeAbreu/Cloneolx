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
    
    .adImage { }

    .adInfos{
    padding: 10px;
      .adName{
      margin-bottom: 20px;
    }
      .adDescription{ }
  }

}
  .rightSide {

  width: 250px;
}
`;