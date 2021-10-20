import styled from "styled-components";

export const PageArea = styled.div`
  form{
    background-color: #fff;
    border-radius: 3px;
    padding: 10px;
    box-shadow: 0px 0px 3px  #999;
    .area{
      display: flex;
      align-items: center;
      padding: 10px;
      max-width: 500px;


      .area--title{
        width: 200px;
        text-align: right;
        padding-right: 20px;
        font-size: 14px;
        font-weight: bold;
      }
      .area--input{
        flex: 1;
        input,select,textarea{
          width: 100%;
          font-size: 14px;
          padding: 5px;
          border: 1px solid #ddd;
          border-radius: 3px;
          outline: none;
          transition:all ease 0.3s;

          &:focus{
            border: 1px solid #333;
            color: #333;
          }
        }
        
        textarea{
          height: 150px;
          resize: none;
        }

        button{
          background-color: #0089FF;
          border: none;
          outline: none;
          padding: 5px 10px;
          color: #fff;
          font-size: 15px;
          cursor: pointer;
          border-radius: 4px;

          &:hover{
            background-color: #006FCE;
          }
        }
      }
    }
  }
  @media (max-width: 600px) {
    
    form{
      .area{
        flex-direction: column;
        .area--title{
          width: 100%;
          text-align: left;
          margin-bottom: 10px;
        }
        .area--input{
          width: 100%;
        }
        .area--input button{
          width: 100%;
          padding: 10px;
        }
      }
      .area--checkbox{
        height: 30px;
        display: flex;
        flex-direction: row;     
        align-items: center;
        justify-content: center;
        .area--title{
          flex: 1;
          text-align: left;          
        }
        .area--input{
          width: 50%;
        }
      }
    }
  }
`;