import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

interface StyledProps {
  bgColor?: string;
  color?: string;
  fontSize?:number;
  hoverColor?: string;
  fontWeight?: string;
  fontStyle?: string;
  lineHeight?: string;
  svgBgColor?: string;
  textColor?: string;
  


}

const Container = styled.div<StyledProps>`
  display: flex;
  align-items: start;
  height:fit-content;
  width:80%;

  .score-card{
    width: 80%;
  height: 40dvh;
  display: flex;
  flex-direction: column;
 margin-left: -20px;
  align-items: center;
  justify-content: center;

  padding: 0px 25px ;
  user-select: none;
  font-size: 28px;
  background-color:${({theme})=>theme.backgroundSecondary};;
  border-radius: 20px;
  box-shadow: 0px 24px 25px 6px rgba(0,0,0,0.06);
-webkit-box-shadow: 0px 24px 25px 6px rgba(0,0,0,0.06);
-moz-box-shadow: 0px 24px 25px 6px rgba(0,0,0,0.06);
 .score{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
    p{
        margin-top: -100px;
        color: ${({theme})=>theme.text};
    }
    h1{
        font-size: 150px;
        margin-top: -1px;
        color: ${({theme})=>theme.text};
        @media only screen and (max-width: 600px) {
            margin-top: -30px;
        }
        @media only screen and (max-width: 380px) {
            margin-top: -40px;
        }
        
    }
 }
 @media only screen and (max-width: 400px) {
    margin-left: 0;
   
 }
@media only screen and (max-width: 900px) {
    height: 40dvh;
  }
  @media only screen and (max-width: 600px) {
  height: 45dvh;
  width: 88%;
  padding: 1px 10px ;
  gap: 20px;
  .exercise-text{
    font-size:15px;
  }
  .svg-container{
    height: 45px;
    width: 45px;
    
  }
 }
  }

  .exercise-indicator{
        position: relative;
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 18px;
        margin-bottom: -25px;
       
        .indicator-text{
            font-size: 30px;
            
            @media only screen and (max-width: 600px) {
                font-size: 20px;
            }
            @media only screen and (max-width: 380px) {
                font-size: 25px;
            }
            @media only screen and (max-width: 900px) {
                font-size: 25px;
            }
              
        }

        @media only screen and (max-width: 600px) {
            gap: 10px;
        }

    }



  .heading-container{
  flex: 0.5;
  display: flex;
  justify-content: end;
 
 }
 .text-container{
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media only screen and (max-width: 490px) {
    gap: 20px;
 }
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
 }
 .score-container{
  flex: 0.5;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  
  
  
  .play-again-button{
  width: 80%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 0px 25px ;
  margin-top: 15px;
  margin-left: -18px;
  user-select: none;
  font-size: 28px;
  color: white;
  font-weight: 600;
  background-color: #A729F5;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 24px 25px 6px rgba(0,0,0,0.06);
-webkit-box-shadow: 0px 24px 25px 6px rgba(0,0,0,0.06);
-moz-box-shadow: 0px 24px 25px 6px rgba(0,0,0,0.06);




  .svg-container{
    height: 60px;
    width: 60px;
    display: grid;
    place-items: center;
    background-color: ${props => props.svgBgColor || "white"};
    border-radius:5px ;
  }

  @media only screen and (max-width: 600px) {
    height: 12vw;
    font-size: medium;
    
  }

  @media only screen and (max-width: 400px) {
    margin-left: 0;
 }
}


 
 }
 //Media breakpoints for PHONES
 

  //Media breakpoints for TABLETS
  @media only screen and (max-width: 900px) {
   flex-direction: column;
   align-items: center;
   gap: 50px;
   width: 100%;

   .heading-container{
    width: 80%;
    margin: 0 auto;
    justify-content: start;
    
   }
   

   .score-container{
    width: 80%;
    margin: 0 auto;
   }
} 

@media only screen and (max-width: 600px) {
  margin-top: 20px;
 margin-left: 10px;
  flex-direction: column;
   align-items: center;
   gap: 20px;
   width: 100%;

   .heading-container{
    width: 90%;
    margin: 0 auto;
    justify-content: start;
   }
   .score-container{
    width: 86%;
    margin-top: 30px;
   }
 }


  
`
const Text = styled.span<StyledProps>`
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "2rem")};
  font-weight: ${({ fontWeight }) => fontWeight || "300"};
  font-style: ${({ fontStyle }) => fontStyle || "normal"};
  line-height: 45px;
  color: ${({theme})=>theme.text};

  @media only screen and (max-width: 600px) {
    font-size: 2.2rem;
    line-height:20px;
  }
  
  
  
`
const SvgContainer = styled.div<StyledProps>`
    height: 40px;
    width: 40px;
    border-radius: 10px ;
    background-color:${props => props.svgBgColor || ""};
    display: flex;
    align-items: center;
    justify-content: center;
`




function CompletedPage() {
    const [pathname, setPathname] = useState('');
    const svgBgColor = pathname.includes("/acc")
        ? '#dfc3fa'
        : pathname.includes('/css')
            ? '#cffddd'
            : pathname.includes('/html')
                ? '#fcdabd'
                : pathname.includes('/js')
                    ? '#c2c9ff'
                    : '';
    const location = useLocation();
    const navigate =useNavigate();

    useEffect(() => {
        setPathname(window.location.pathname)

        

    }, [location.pathname]);

  return (
    <>
      <Container>
        <div className="heading-container">


          <div className="text-container">

            <Text fontSize={50}  textColor="#363c50" >Quiz completed</Text>
            <Text fontSize={50} fontWeight="600" textColor="#363c50" >You scored...</Text>
           
          </div>
        </div>
        <div className="score-container">
          <div className="score-card">
            
            <div className='exercise-indicator'>
                    <SvgContainer svgBgColor={svgBgColor}>
                        {/* acc */}
                        {
                            pathname.includes("/acc") && <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 40 40"><path fill="#A729F5" d="M16.875 8.125a3.125 3.125 0 1 1 6.25 0 3.125 3.125 0 0 1-6.25 0ZM20 2.5a5.625 5.625 0 0 0-5.475 6.915l-4.03-1.625a4 4 0 0 0-5.19 2.18 3.95 3.95 0 0 0 2.175 5.175l5.02 2.027v5.96l-4.532 8.525a3.98 3.98 0 0 0 7.024 3.738L20 25.975l5.01 9.42a3.978 3.978 0 0 0 7.025-3.735L27.5 23.13v-5.957l5.02-2.028a3.95 3.95 0 0 0 2.175-5.175 4 4 0 0 0-5.19-2.183l-4.027 1.628A5.626 5.626 0 0 0 20 2.5ZM7.618 10.922a1.5 1.5 0 0 1 1.94-.817l8.57 3.463a5 5 0 0 0 3.744 0l8.57-3.463a1.5 1.5 0 0 1 1.94.817 1.45 1.45 0 0 1-.8 1.905l-5.02 2.025A2.5 2.5 0 0 0 25 17.175v5.957c0 .41.1.814.293 1.175l4.535 8.528a1.48 1.48 0 0 1-2.61 1.39l-5.01-9.425a2.5 2.5 0 0 0-4.415 0l-5.008 9.418a1.477 1.477 0 1 1-2.61-1.388l4.532-8.525A2.5 2.5 0 0 0 15 23.133v-5.96a2.5 2.5 0 0 0-1.563-2.318l-5.02-2.03a1.45 1.45 0 0 1-.8-1.902Z" /></svg>
                        }
                        {/*css */}
                        {
                            pathname.includes("/css") && <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 40 40"><path fill="#2FD887" d="M10 2.505a1.25 1.25 0 0 0-1.25 1.25V21.25a5 5 0 0 0 5 5H15v6.25a4.999 4.999 0 0 0 9.615 1.913c.25-.607.38-1.257.38-1.913v-6.25h1.255a5 5 0 0 0 5-5V3.755A1.25 1.25 0 0 0 30 2.505H10ZM28.75 17.5h-17.5V5.005h7.5V8.76a1.25 1.25 0 0 0 2.5 0V5.005h2.5v6.24a1.25 1.25 0 0 0 2.5 0v-6.24h2.5V17.5Zm-17.5 3.75V20h17.5v1.25a2.5 2.5 0 0 1-2.5 2.5h-2.505a1.25 1.25 0 0 0-1.25 1.25v7.5a2.497 2.497 0 1 1-4.995 0V25a1.25 1.25 0 0 0-1.25-1.25h-2.5a2.5 2.5 0 0 1-2.5-2.5Z" /></svg>
                        }
                        {/* html*/}
                        {
                            pathname.includes("/html") && <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 40 40"><path fill="#FF7E35" d="M24.508 7.607a1.25 1.25 0 0 1 .634 1.65l-10 22.5a1.25 1.25 0 1 1-2.284-1.015l10-22.5a1.251 1.251 0 0 1 1.65-.635ZM10.832 13.44a1.249 1.249 0 0 1 .1 1.765L6.674 20l4.263 4.795a1.25 1.25 0 1 1-1.87 1.66l-5-5.625a1.25 1.25 0 0 1 0-1.66l5-5.625a1.25 1.25 0 0 1 1.764-.105Zm18.337 0a1.25 1.25 0 0 1 1.765.105l5 5.625a1.25 1.25 0 0 1 0 1.66l-5 5.625a1.25 1.25 0 1 1-1.87-1.66L33.327 20l-4.262-4.795a1.25 1.25 0 0 1 .105-1.765Z" /></svg>
                        }
                        {/* js*/}
                        {
                           pathname.includes("/js") && <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 40 40"><path fill="#306AFF" d="M21.25 18.75A3.75 3.75 0 0 1 25 15h3.75a1.25 1.25 0 0 1 0 2.5H25a1.25 1.25 0 0 0-1.25 1.25V20A1.25 1.25 0 0 0 25 21.25h1.25A3.75 3.75 0 0 1 30 25v1.25A3.75 3.75 0 0 1 26.25 30H22.5a1.25 1.25 0 0 1 0-2.5h3.75a1.25 1.25 0 0 0 1.25-1.25V25a1.25 1.25 0 0 0-1.25-1.25H25A3.75 3.75 0 0 1 21.25 20v-1.25ZM20 16.25a1.25 1.25 0 0 0-2.5 0v10a1.25 1.25 0 0 1-1.25 1.25h-2.5a1.25 1.25 0 0 0 0 2.5h2.5A3.75 3.75 0 0 0 20 26.25v-10Zm-15-5A6.25 6.25 0 0 1 11.25 5h17.5A6.25 6.25 0 0 1 35 11.25v17.5A6.25 6.25 0 0 1 28.75 35h-17.5A6.25 6.25 0 0 1 5 28.75v-17.5Zm6.25-3.75a3.75 3.75 0 0 0-3.75 3.75v17.5a3.75 3.75 0 0 0 3.75 3.75h17.5a3.75 3.75 0 0 0 3.75-3.75v-17.5a3.75 3.75 0 0 0-3.75-3.75h-17.5Z" /></svg>
                        }
                    </SvgContainer>
                    <div className='indicator-text'>
                        {pathname.includes("/acc") && <h2>Accessibility</h2>}
                        {pathname.includes("/css") && <h2>CSS</h2>}
                        {pathname.includes("/html") && <h2>HTML</h2>}
                        {pathname.includes("/js") && <p>Javascript</p>}
                    </div>
                </div>
                <div className="score">
                        <h1>{window.location.pathname.split("/")[3]}</h1>
                        <p>out of 10</p>
                </div>
           
          </div>
          <div onClick={()=>navigate('/')} className="play-again-button">
            Play Again
          </div>


        </div>
      </Container>
    </>
  )
}

export default CompletedPage;
