import styled from "styled-components";

interface StyledProps {
  bgColor?: string;
  color?: string;
  fontSize?: number;
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


  .heading-container{
  flex: 0.5;
  display: flex;
  justify-content: center;
 
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
 .exercise-container{
  flex: 0.5;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  
  
  .submit-button{
  width: 80%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 0px 25px ;
  margin-top: 15px;
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
    margin-left: -8px;
    font-size: medium;
    
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
   

   .exercise-container{
    width: 80%;
    margin: 0 auto;
   }
} 

@media only screen and (max-width: 600px) {
  flex-direction: column;
   align-items: center;
   gap: 20px;
   width: 100%;

   .heading-container{
    width: 90%;
    margin: 0 auto;
    justify-content: start;
   }
   .exercise-container{
    width: 86%;
    margin: 0 auto;
   }
 }


  
`
const Text = styled.span<StyledProps>`
 font-size: 35px ;
  font-weight: ${({ fontWeight }) => fontWeight || "300"};
  font-style: ${({ fontStyle }) => fontStyle || "normal"};
  line-height: 45px;
  color: ${({ textColor }) => textColor || "#000"};

  @media only screen and (max-width: 600px) {
    font-size: ${({ fontSize }) => (fontSize ? `${fontSize / 1.6}px` : "1rem")};
    line-height:20px;
  }
  
  
  
`

const Exercise = styled.div<StyledProps>`
  width: 80%;
  height: 100px;
  display: flex;
  margin-left: -5px;
  align-items: center;
  gap: 40px;
  padding: 0px 25px ;
  user-select: none;
  font-size: 28px;
  font-weight: 600;
  background-color: white;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 24px 25px 6px rgba(0,0,0,0.06);
-webkit-box-shadow: 0px 24px 25px 6px rgba(0,0,0,0.06);
-moz-box-shadow: 0px 24px 25px 6px rgba(0,0,0,0.06);

  .svg-container{
    height: 60px;
    width: 60px;
    color: #666b7e;
    display: grid;
    place-items: center;
    background-color: ${props => props.svgBgColor || "white"};
    border-radius:5px ;

    @media only screen and (max-width: 900px) {
    height: 8vw;
    width: 8vw;
  }
  }
  .exercise-text{
    color: #363c50;
  }
  @media only screen and (max-width: 900px) {
    height: 10vw;
  }
  @media only screen and (max-width: 600px) {
  height: 60px;
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

  
`
const ProgressBar=styled.div`
display: flex;
align-items: center;
justify-content: center;
  background-color: white;
  height: 15px;
  width: 95%;
  padding: 0px 5px;
  border-radius: 10px;
  
  .progress{
   background-color: #A729F5;
   height: 8px;
   width: 100%;
   border-radius: 10px;
   margin-bottom: 1px;
  }
`

function ExercisePage() {


  return (
    <>
      <Container>
        <div className="heading-container">


          <div className="text-container">

            <Text fontWeight="600" textColor="#363c50" >Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?</Text>
            <ProgressBar>
              <div className="progress">

              </div>
            </ProgressBar>
          </div>
        </div>
        <div className="exercise-container">
          <Exercise svgBgColor="#f5f6fa ">
            <div className="svg-container">
              A
            </div>
            <text className="exercise-text">4.5:1</text>
          </Exercise>
          <Exercise svgBgColor="#f5f6fa ">
            <div className="svg-container">
              B
            </div>
            <text className="exercise-text">3:1</text>
          </Exercise>
          <Exercise svgBgColor="#f5f6fa ">
            <div className="svg-container">
              C
            </div>
            <text className="exercise-text">2.5:1</text>
          </Exercise>
          <Exercise svgBgColor="#f5f6fa ">
            <div className="svg-container">
              D
            </div>
            <text className="exercise-text">5:1</text>
          </Exercise>
          <div className="submit-button">
            Submit Answer
          </div>


        </div>
      </Container>
    </>
  )
}

export default ExercisePage;
