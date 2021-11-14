import styled from 'styled-components';

export const PageArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  
  
  .pageTop{
    margin-top: 20px;
    width: 100%;
    height: auto;
    // background-color: blue;
    display: flex;
    margin-bottom: 20px;
    .pageTopLeft{
      width: 300px;
      height: auto;
      // background-color: green;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .imgProfile{
        img{
          width: 150px;
          height: 150px;
          border-radius: 50%;
        }
      }
    }
    
      .infoProfile{
        width: 80%;
        height: auto;
        text-align: center;
        // background-color: yellow;
        h1{
          margin-top: 10px;
          font-size: 15px;
          font-family: 'Roboto', sans-serif;
          color: #000;
        }
        p{
          margin: 10px 0;
          color: #999;
        }
      }
    }


    .pageTopRight {
      flex: 1;
      border: 1px solid #999;
      border-radius: 5px;
      
      // display: flex;
      // flex-direction: column;

      .formRight{
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
         .alignerButton{
           align-items: flex-end;
         }
        .area{
          display: flex;
          // align-items: center;
          padding: 10px;
           width: 50% ;
          // max-width: 500px;
          // flex:1;
          flex-direction: column;
          // background-color: blue;

          .area--title{
            width: 100%;
            text-align: left;
            padding-right: 20px;
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 10px;
          }
          .area--input{
            flex: 1;
            input,select{
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
              span{
                font-size: 12px;
                color: red !important;
              }
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
}


  .pageBottom{
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    .adsList{
      width: 100%;
    .slick-prev, .slick-next {
      &:before{
        color: #000 !important;
      }
    }
  
      .aditem{
        width:100%;
      }

   
    }
  }


  @media (max-width: 600px) {
    .pageTop{
      align-items: center;
      flex-direction: column;
      .pageTopLeft{
        width: 100%;
      }
      .pageTopRight{
        width: 90%;
        .formRight{
          width: 100%;
          flex-direction: column;
          .alignerButton{
            align-items: center !important;
          }

          .area{
            width: 100%;
            .area--input{
              input,select{
                font-size: 18px;
                width: 100%;
                height: 40px;
              }
              span{
                font-weight: bold;
              }
              button{
                width: 300px;
                height: 40px;
                background-color: #0089FF;
                border: none;
                outline: none;
                padding: 5px 10px;
                color: #fff;
                font-size: 20px;
                font-weight: bold;
                cursor: pointer;
                border-radius: 4px;
                
                &:hover{
                  background-color: #006FCE;
                }
            }
            }
          }
        }
       
      }
    }
    


    .pageBottom{
      margin: 0 auto;
      width: 80%;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      .adsList{
        width: 100%;
      .slick-prev, .slick-next {
        &:before{
          color: #000 !important;
        }
      }
     
        .aditem{
          width:100%;
        }
      }
    }
`;

export const ModalAll = styled.div`
  width: 100% ;
  height: 100% ;
  // background-color: red ;
  // color:yellow ;
  display: flex;

  form{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .area--button{
      flex: 1;
     margin-bottom: 10px;
      // background-color: red;
      display: flex;
      justify-content: flex-end;
      margin-right: 10px;
      button{
        width: 300px;
        height: 40px;
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
    .modalContent{
      width: 100%;
      height: 100%;
      display: flex;
      .modalLeft{
        width: 50%;
        height: 100%;
        // background-color: blue;
      }
      .modalRight{
        width: 50%;
        height: 100%;
        // background-color: green;
      } 
    }
   
    .area--checkbox{
      // height: 30px;
      display: flex;
      flex-direction: column !important;     
      // align-items: center !important;
      justify-content: center !important;
      // background-color: #ddd !important;
      
      
      .area--title{
        // flex: 1;
        width: 100% !important;
        height: 100% !important;
        text-align: left;   
        // background-color: red !important;       
      }
      .area--input{
        display: flex;
        width: 15px !important;
        // height: 100% !important;
        // background-color: green !important;
      }
    }
    .alignerButton{
      align-items: flex-end;
      flex:none !important;
    }
    .area{
   
      display: flex;
      // align-items: center;

      padding: 10px;
       width: 100% ;
      // max-width: 500px;
      // flex:1;
      flex-direction: column;
      // background-color: blue;
      border-bottom: 1px solid #ddd !important;
 
      .area--title{
        width: 100%;
        text-align: left;
        padding-right: 20px;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      .area--input{
        flex: 1;
        input,select{
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
       
          span{
            font-size: 12px;
            color: red !important;
          }
          textarea{
            width: 100%;
            height: 100px;
            resize: none;
          }
    }
    
    
  }

@media (max-width: 600px) {
  &{
   
    flex-direction: column;
    .modalContent{
      flex-direction: column;
      // background-color: yellow;
      height: auto;
      
      .modalLeft{
        width: 100% !important;
      }
      .modalRight{
        width: 100% !important;
            }
     
    }
    .area--button{
      flex: 1;
      margin-right: 0px;
      // background-color: red;
      justify-content: center;
      button{
        margin-bottom: 10px !important; 
      }
    }
  }
}

`;