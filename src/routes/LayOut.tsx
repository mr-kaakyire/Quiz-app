import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'


interface StyledProps {
    circleTop?: string;
    circleLeft?: string;
    svgBgColor?: string;
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

const Container = styled.div`
position: relative;
    margin-top: 100px;
    .banner{
        position: relative;
        @media only screen and (max-width: 400px) {
        left: -20px;
  }
    }

    @media only screen and (max-width: 900px) {
        margin-top: 50px;
    }
    @media only screen and (max-width: 600px) {
        margin-top: 20px;
    }
`
const SvgContainer = styled.div<StyledProps>`
    height: 50px;
    width: 50px;
    border-radius: 10px ;
    background-color:${props => props.svgBgColor || ""};
    display: flex;
    align-items: center;
    justify-content: center;
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
        padding-left: 25px;
    }

  
  

`;
const Circle = styled.div<StyledProps>`
     position: absolute;
        top: ${props => props.circleTop || "0"};
        left: ${props => props.circleLeft || "0"};
        z-index: 0;
        height: 1000px;
        width: 1000px;
        border:200px solid #eef0f8 ;
        border-radius: 100%;
`

const BarContainer = styled.div`
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
   

    .exercise-indicator{
        position: relative;
        display: flex;
        align-items: center;
        gap: 20px;
        font-size: 18px;
        .indicator-text{
            font-size: 30px;
            font-weight: 600;
            @media only screen and (max-width: 600px) {
                font-size: 20px;
                font-weight: 600;
            }
              
        }

        @media only screen and (max-width: 600px) {
            gap: 10px;
        }
font-weight: 300;
    }

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
 @media only screen and (max-width: 400px) {
   
    margin-left: 20px;
    margin-right: 0;
    justify-content: space-between;
 

    .darkmode-toggle{
        justify-content: end;
        gap:2px;
    }
 }
 @media only screen and (max-width: 900px) {
    width: 75% ;
 }
`


function LayOut() {
    const [pathname, setPathname] = useState('');
    const svgBgColor = pathname.includes('/acc')
        ? '#dfc3fa'
        : pathname.includes('/css')
            ? '#cffddd'
            : pathname.includes('/html')
                ? '#fcdabd'
                : pathname.includes('/js')
                    ? '#c2c9ff'
                    : '';
    const location = useLocation();
    useEffect(() => {
        setPathname(window.location.pathname)

        console.log(pathname)

    }, [location.pathname]);
    return (
        <Container>
            <Circle circleLeft='-40%' circleTop='-50%' ></Circle>
            <Circle circleLeft='50%' circleTop='50%' ></Circle>

            <BarContainer>
                <div className='exercise-indicator'>
                    <SvgContainer svgBgColor={svgBgColor}>
                        {/* acc */}
                        {
                            pathname.includes('/acc') && <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill="#A729F5" d="M16.875 8.125a3.125 3.125 0 1 1 6.25 0 3.125 3.125 0 0 1-6.25 0ZM20 2.5a5.625 5.625 0 0 0-5.475 6.915l-4.03-1.625a4 4 0 0 0-5.19 2.18 3.95 3.95 0 0 0 2.175 5.175l5.02 2.027v5.96l-4.532 8.525a3.98 3.98 0 0 0 7.024 3.738L20 25.975l5.01 9.42a3.978 3.978 0 0 0 7.025-3.735L27.5 23.13v-5.957l5.02-2.028a3.95 3.95 0 0 0 2.175-5.175 4 4 0 0 0-5.19-2.183l-4.027 1.628A5.626 5.626 0 0 0 20 2.5ZM7.618 10.922a1.5 1.5 0 0 1 1.94-.817l8.57 3.463a5 5 0 0 0 3.744 0l8.57-3.463a1.5 1.5 0 0 1 1.94.817 1.45 1.45 0 0 1-.8 1.905l-5.02 2.025A2.5 2.5 0 0 0 25 17.175v5.957c0 .41.1.814.293 1.175l4.535 8.528a1.48 1.48 0 0 1-2.61 1.39l-5.01-9.425a2.5 2.5 0 0 0-4.415 0l-5.008 9.418a1.477 1.477 0 1 1-2.61-1.388l4.532-8.525A2.5 2.5 0 0 0 15 23.133v-5.96a2.5 2.5 0 0 0-1.563-2.318l-5.02-2.03a1.45 1.45 0 0 1-.8-1.902Z" /></svg>
                        }
                        {/*css */}
                        {
                            pathname.includes('/css') && <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill="#2FD887" d="M10 2.505a1.25 1.25 0 0 0-1.25 1.25V21.25a5 5 0 0 0 5 5H15v6.25a4.999 4.999 0 0 0 9.615 1.913c.25-.607.38-1.257.38-1.913v-6.25h1.255a5 5 0 0 0 5-5V3.755A1.25 1.25 0 0 0 30 2.505H10ZM28.75 17.5h-17.5V5.005h7.5V8.76a1.25 1.25 0 0 0 2.5 0V5.005h2.5v6.24a1.25 1.25 0 0 0 2.5 0v-6.24h2.5V17.5Zm-17.5 3.75V20h17.5v1.25a2.5 2.5 0 0 1-2.5 2.5h-2.505a1.25 1.25 0 0 0-1.25 1.25v7.5a2.497 2.497 0 1 1-4.995 0V25a1.25 1.25 0 0 0-1.25-1.25h-2.5a2.5 2.5 0 0 1-2.5-2.5Z" /></svg>
                        }
                        {/* html*/}
                        {
                           pathname.includes('/html') && <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill="#FF7E35" d="M24.508 7.607a1.25 1.25 0 0 1 .634 1.65l-10 22.5a1.25 1.25 0 1 1-2.284-1.015l10-22.5a1.251 1.251 0 0 1 1.65-.635ZM10.832 13.44a1.249 1.249 0 0 1 .1 1.765L6.674 20l4.263 4.795a1.25 1.25 0 1 1-1.87 1.66l-5-5.625a1.25 1.25 0 0 1 0-1.66l5-5.625a1.25 1.25 0 0 1 1.764-.105Zm18.337 0a1.25 1.25 0 0 1 1.765.105l5 5.625a1.25 1.25 0 0 1 0 1.66l-5 5.625a1.25 1.25 0 1 1-1.87-1.66L33.327 20l-4.262-4.795a1.25 1.25 0 0 1 .105-1.765Z" /></svg>
                        }
                        {/* js*/}
                        {
                            pathname.includes('/js') && <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill="#306AFF" d="M21.25 18.75A3.75 3.75 0 0 1 25 15h3.75a1.25 1.25 0 0 1 0 2.5H25a1.25 1.25 0 0 0-1.25 1.25V20A1.25 1.25 0 0 0 25 21.25h1.25A3.75 3.75 0 0 1 30 25v1.25A3.75 3.75 0 0 1 26.25 30H22.5a1.25 1.25 0 0 1 0-2.5h3.75a1.25 1.25 0 0 0 1.25-1.25V25a1.25 1.25 0 0 0-1.25-1.25H25A3.75 3.75 0 0 1 21.25 20v-1.25ZM20 16.25a1.25 1.25 0 0 0-2.5 0v10a1.25 1.25 0 0 1-1.25 1.25h-2.5a1.25 1.25 0 0 0 0 2.5h2.5A3.75 3.75 0 0 0 20 26.25v-10Zm-15-5A6.25 6.25 0 0 1 11.25 5h17.5A6.25 6.25 0 0 1 35 11.25v17.5A6.25 6.25 0 0 1 28.75 35h-17.5A6.25 6.25 0 0 1 5 28.75v-17.5Zm6.25-3.75a3.75 3.75 0 0 0-3.75 3.75v17.5a3.75 3.75 0 0 0 3.75 3.75h17.5a3.75 3.75 0 0 0 3.75-3.75v-17.5a3.75 3.75 0 0 0-3.75-3.75h-17.5Z" /></svg>
                        }
                    </SvgContainer>
                    <div className='indicator-text'>
                        {pathname.includes("/acc") && <p>Accessibility</p>}
                        {pathname.includes("/css") && <p>CSS</p>}
                        {pathname.includes("/html") && <p>HTML</p>}
                        {pathname.includes("/js")&& <p>Javascript</p>}
                    </div>
                </div>
                <div className='darkmode-toggle'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#626C7F" d="M12 1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 1 1-1.5 0v-1.5A.75.75 0 0 1 12 1.5Zm0 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-1.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm9.75-2.25a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 1 0 0 1.5h1.5ZM12 19.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 1 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Zm-8.25-6.75a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 1 0 0 1.5h1.5Zm.969-8.031a.75.75 0 0 1 1.062 0l1.5 1.5a.751.751 0 0 1-1.062 1.062l-1.5-1.5a.75.75 0 0 1 0-1.062Zm1.062 14.562a.75.75 0 1 1-1.062-1.06l1.5-1.5a.75.75 0 1 1 1.062 1.06l-1.5 1.5Zm13.5-14.562a.75.75 0 0 0-1.062 0l-1.5 1.5a.751.751 0 0 0 1.062 1.062l1.5-1.5a.75.75 0 0 0 0-1.062Zm-1.062 14.562a.75.75 0 0 0 1.062-1.06l-1.5-1.5a.75.75 0 0 0-1.062 1.06l1.5 1.5Z" /></svg>

                    <div className='toggle-container' >
                        <div className='toggle'>

                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#626C7F" d="M11.775 4.522A7.5 7.5 0 1 1 4.898 16.09c2.104-.57 4.974-1.953 6.24-5.326.828-2.211.876-4.408.637-6.241ZM20.184 12a8.997 8.997 0 0 0-9.315-8.994.75.75 0 0 0-.713.888c.345 1.821.42 4.092-.424 6.342-1.2 3.201-4.203 4.26-6.115 4.606a.75.75 0 0 0-.542 1.066A9 9 0 0 0 20.184 12Z" /></svg>

                </div>
            </BarContainer>
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
