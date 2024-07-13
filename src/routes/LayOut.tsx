import React from 'react'
import { Outlet } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'


interface StyledProps{
    circleTop?:string;
    circleLeft?:string;
}


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Rubik';
    src: url('./assets/fonts/Rubik-VariableFont_wght.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Rubik';
    src: url('./assets/fonts/Rubik-Italic-VariableFont_wght.ttf') format('truetype');
    font-weight:300;
    font-style: italic;
  }


  

  html,body {
    position: relative;
    font-family: 'Rubik', sans-serif;
    color: #2b3041;
    background-color: #f5f6fa;
    height: 100dvh;
    width: 100dvw;
    overflow: hidden;
  }
`;

const Container=styled.div`
position: relative;
    margin-top: 100px;
    .banner{
        position: relative;
    }

    @media only screen and (max-width: 900px) {
        margin-top: 50px;
    }
    @media only screen and (max-width: 600px) {
        margin-top: 20px;
    }
`

const OutletContainer = styled.div`
 
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;

  @media only screen and (max-width: 900px) {
        padding-top: 30px;
    }

  
  

`;
const Circle=styled.div<StyledProps>`
     position: absolute;
        top: ${props=>props.circleTop || "0"};
        left: ${props=>props.circleLeft || "0"};
        z-index: 0;
        height: 1000px;
        width: 1000px;
        border:200px solid #eef0f8 ;
        border-radius: 100%;
`

const DarkModeContainer = styled.div`
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: end;
    position: relative;
   

    

    .darkmode-toggle{
        height: 50px;
        width: 120px;
    
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        .toggle-container{
            height: 30px;
            width: 50px;
            background-color: #A729F5;
            border-radius: 50px;
            position: relative;
            display: flex;
            align-items: center;
            cursor: pointer;
            
            .toggle{
                margin-left: 5px;
                margin-bottom: 1px;
                height: 25px;
                width: 25px;
                background-color: white;
                border-radius: 100%;
            }
        }

    }
    @media only screen and (max-width: 600px) {
        width: 80%;
        .darkmode-toggle{
            height: 30px;
           

            .toggle-container{
            height: 25px;
            width: 40px;

            .toggle{

                height: 20px;
                width: 20px;
                
            }
        }
        }  
       
   
 }
`


function LayOut() {
    return (
        <Container>
            <Circle circleLeft='-40%' circleTop='-50%' ></Circle>
            <Circle circleLeft='50%' circleTop='50%' ></Circle>
           
            <DarkModeContainer>
                <div className='darkmode-toggle'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#626C7F" d="M12 1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 1 1-1.5 0v-1.5A.75.75 0 0 1 12 1.5Zm0 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-1.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm9.75-2.25a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 1 0 0 1.5h1.5ZM12 19.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 1 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Zm-8.25-6.75a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 1 0 0 1.5h1.5Zm.969-8.031a.75.75 0 0 1 1.062 0l1.5 1.5a.751.751 0 0 1-1.062 1.062l-1.5-1.5a.75.75 0 0 1 0-1.062Zm1.062 14.562a.75.75 0 1 1-1.062-1.06l1.5-1.5a.75.75 0 1 1 1.062 1.06l-1.5 1.5Zm13.5-14.562a.75.75 0 0 0-1.062 0l-1.5 1.5a.751.751 0 0 0 1.062 1.062l1.5-1.5a.75.75 0 0 0 0-1.062Zm-1.062 14.562a.75.75 0 0 0 1.062-1.06l-1.5-1.5a.75.75 0 0 0-1.062 1.06l1.5 1.5Z" /></svg>

                    <div className='toggle-container' >
                        <div className='toggle'>

                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#626C7F" d="M11.775 4.522A7.5 7.5 0 1 1 4.898 16.09c2.104-.57 4.974-1.953 6.24-5.326.828-2.211.876-4.408.637-6.241ZM20.184 12a8.997 8.997 0 0 0-9.315-8.994.75.75 0 0 0-.713.888c.345 1.821.42 4.092-.424 6.342-1.2 3.201-4.203 4.26-6.115 4.606a.75.75 0 0 0-.542 1.066A9 9 0 0 0 20.184 12Z" /></svg>

                </div>
            </DarkModeContainer>
            <div className='banner'>
                <GlobalStyle />
                <OutletContainer>
                    <Outlet />
                </OutletContainer>
            </div>
        </Container>

    )
}

export default LayOut
