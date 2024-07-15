import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  isSelected?: boolean;
  isCorrectSelection?: boolean;
  submitClicked?: boolean;
  progWidth?: number;
}

interface Question {
  answer?: string;
  options?: string[];
  question?: string;
}

interface Data {
  questions?: Question[] | null;
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
  gap: 20px;

  p{
    font-size: 20px;
    font-style: italic;
    color: ${({ theme }) => theme.text};
    transition: color 500ms ease-in;
  }
 
  @media only screen and (max-width: 600px) {
    gap: 0px;
    p{
      font-size: 15px;
    }
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
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none;    /* Firefox */
  -ms-user-select: none;     /* Internet Explorer/Edge */
  user-select: none; 
  
.submit-warning-container{
  width: 82% ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  .warning{
   
    margin:0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
    font-size: 15px;
    margin-top:10px;
    font-weight: bolder;
    height: 60px;
    width: 215px;
    @media only screen and (max-width: 400px) {
      margin-top: -5px;
      
    }
  }
    
  .submit-button{
  flex-shrink: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
 
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

    &:hover{
      background-color: #c16cf7;
    }


  

  @media only screen and (max-width: 600px) {
    
    height: 12vw;
    font-size: medium;
    }
    @media only screen and (max-width: 400px) {
        margin-top: 0px;
    }
  }
  .next-button{
  flex-shrink: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
 
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


  

    @media only screen and (max-width: 600px) {
      height: 12vw;
      font-size: medium;
    }
  
  }
   @media only screen and (max-width: 600px) {
      width: 91%;
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
   position: relative;

   .heading-container{
    width: 90%;
    margin: 0 auto;
    justify-content: start;
   }
   .exercise-container{
    position: relative;
    left: -10px;
    width: 86%;
  
   
   }
 }


  
`
const Text = styled.span<StyledProps>`
 font-size: 35px ;
  font-weight: ${({ fontWeight }) => fontWeight || "300"};
  font-style: ${({ fontStyle }) => fontStyle || "normal"};
  line-height: 45px;
  color: ${({ theme }) => theme.text};
  transition: color 500ms ease-in;

  @media only screen and (max-width: 600px) {
    font-size: ${({ fontSize }) => (fontSize ? `${fontSize / 1.6}px` : "1rem")};
    line-height:20px;
  }
  @media only screen and (max-width: 900px) {
    line-height:40px;
  }
  
  
  
`

const Exercise = styled.div<StyledProps>`
  width: 80%;
  height: 90px;
  display: flex;
  margin-left: -5px;
  align-items: center;
  gap: 40px;
  padding: 0px 10px ;
  
  font-size: 28px;
  font-weight: 600;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none;    /* Firefox */
  -ms-user-select: none;     /* Internet Explorer/Edge */
  user-select: none !important; 
  background-color:  ${({ theme }) => theme.backgroundSecondary};
  border-radius: 20px;
  transition: background-color 500ms ease-in;
  cursor: pointer;
  box-shadow: 0px 24px 25px 6px rgba(0,0,0,0.06);
  -webkit-box-shadow: 0px 24px 25px 6px rgba(0,0,0,0.06);
  -moz-box-shadow: 0px 24px 25px 6px rgba(0,0,0,0.06);  
  border: ${({ isSelected, isCorrectSelection, submitClicked }) => (isCorrectSelection && isSelected ? '3px solid #26D782' : isCorrectSelection == false && isSelected && submitClicked == true ? "3px solid #ee5454" : isSelected && submitClicked == false ? "3px solid #A729F5" : "3px solid transparent")};

  &:hover > .svg-container{
    background-color: ${({ isSelected }) => !isSelected && "#f2e6fe"};
    color: ${({ isSelected }) => !isSelected && "#A729F5"};
  }

  .svg-container{
    flex-shrink: 0;
    height: 60px;
    width: 60px;
    color:  ${({ isSelected }) => (isSelected ? 'white' : '#666b7e')};
    display: grid;
    place-items: center;
    background-color:  ${({ isSelected, isCorrectSelection, submitClicked }) => (isCorrectSelection && isSelected ? ' #26D782' : isCorrectSelection == false && isSelected && submitClicked == true ? "#EE5454" : isSelected && submitClicked == false ? "#A729F5" : "#F4F6FA")};
    border-radius:5px ;

    @media only screen and (max-width: 900px) {
    height: 8vw;
    width: 8vw;
  }
  }
  .text-and-svg{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .exercise-text{
     color: ${({ theme }) => theme.text};
     transition: color 500ms ease-in;
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
const ProgressBar = styled.div<StyledProps>`
display: flex;
align-items: center;
justify-content: start;
  background-color: ${({ theme }) => theme.backgroundSecondary};;
  height: 15px;
  width: 95%;
  padding: 0px 5px;
  border-radius: 10px;
  transition: background-color 500ms ease-in;
  
  .progress{
   background-color: #A729F5;
   height: 8px;  width: ${({ progWidth }) => `${progWidth ? (100 * ((progWidth + 1) / 10)) : "10"}%`};
  
   border-radius: 10px;
   margin-bottom: 1px;
   transition: all 300ms ease-in-out;
  }
`

function ExercisePage() {
  const [data, setData] = useState<Data | any>(null);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [score, setScore] = useState(0);
  const [isCorrectSelection, setIsCorrectSelection] = useState<boolean | undefined>(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [correctAnswer, setCorrectAnswer] = useState<string>(" ");



  const location = useLocation();
  const navigate = useNavigate();




  const updateIndex = (index: number) => {
    setSelectedIndex(index)
  }
  const handleSubmit = () => {
    setSubmitClicked(true)

    if (data?.questions && data?.questions[questionIndex]?.options && selectedIndex != null && questionIndex < data?.questions?.length && data != null) {
      if (data.questions[questionIndex]?.answer == data!.questions[questionIndex]!.options[selectedIndex]) {
        setIsCorrectSelection(true)
        setScore((prev) => prev + 1)
        if (data?.questions) {
          setCorrectAnswer(data?.questions[questionIndex].answer || "")
        }
      }
      else setIsCorrectSelection(false);
    }
  }

    useEffect(()=>{
      if (data?.questions) {
        setCorrectAnswer(data?.questions[questionIndex].answer || "")
      }
    },[questionIndex,correctAnswer])

  useEffect(() => {
    fetch('/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (location.pathname.includes("/html")) setData(data.quizzes[0])
        if (location.pathname.includes("/css")) setData(data.quizzes[1])
        if (location.pathname.includes("/js")) setData(data.quizzes[2])
        if (location.pathname.includes("/acc")) setData(data.quizzes[3])
        console.log(data)

      })


   

  }, []);

  return (
    <>
      <Container>
        <div className="heading-container">


          <div className="text-container">
            <p> Question {questionIndex + 1} of 10</p>
            {data && data.questions ? <Text fontWeight="600" textColor="#363c50" >{data.questions[questionIndex]?.question}</Text> : <Text fontWeight="600" textColor="#363c50" >No Questions Found</Text>}
            <ProgressBar progWidth={questionIndex} >
              <div className="progress">

              </div>
            </ProgressBar>
          </div>
        </div>

        <div className="exercise-container">
          {data && data.questions ? (
            data?.questions[questionIndex].options?.map((option: any, index: any) => (
              <Exercise submitClicked={submitClicked} isCorrectSelection={isCorrectSelection} isSelected={selectedIndex === index} onClick={() => {

                submitClicked == false && updateIndex(index)
              }} key={index} svgBgColor="#f5f6fa">
                {index == 0 && <div className="svg-container">
                  A

                </div>}
                {index == 1 && <div className="svg-container">
                  B
                </div>}
                {index == 2 && <div className="svg-container">
                  C
                </div>}
                {index == 3 && <div className="svg-container">
                  D
                </div>}
                <div className="text-and-svg">
                  <h6 className="exercise-text">{option}</h6>
                  <div style={{ height: "50px", width: "50px", display: "flex", placeItems: "center", flexShrink: 0 }}>
                    {submitClicked && (correctAnswer == option) && selectedIndex == index && <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill="#26D782" d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-1.875 15.105L25.3 15.41a1.25 1.25 0 0 1 1.915 1.593l-.145.174-8.06 8.08a1.25 1.25 0 0 1-1.595.148l-.175-.145-4.375-4.375a1.25 1.25 0 0 1 1.595-1.913l.175.143 3.49 3.49Z" /></svg>
                    }
                    { (correctAnswer == option)&&selectedIndex!=index &&submitClicked && <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill="#26D782" d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-1.875 15.105L25.3 15.41a1.25 1.25 0 0 1 1.915 1.593l-.145.174-8.06 8.08a1.25 1.25 0 0 1-1.595.148l-.175-.145-4.375-4.375a1.25 1.25 0 0 1 1.595-1.913l.175.143 3.49 3.49Z" /></svg>
                    }

                        {submitClicked && (correctAnswer != option) && selectedIndex == index && <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill="#EE5454" d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-5.402 7.415.142-.175a1.25 1.25 0 0 1 1.595-.143l.175.143L20 18.233l3.49-3.493a1.25 1.25 0 0 1 1.595-.143l.175.143a1.25 1.25 0 0 1 .142 1.595l-.142.175L21.767 20l3.493 3.49a1.25 1.25 0 0 1 .142 1.595l-.142.175a1.25 1.25 0 0 1-1.595.142l-.175-.142L20 21.767l-3.49 3.493a1.25 1.25 0 0 1-1.595.142l-.175-.142a1.25 1.25 0 0 1-.143-1.595l.143-.175L18.233 20l-3.493-3.49a1.25 1.25 0 0 1-.143-1.595Z" /></svg>
                    }
                    
                
                  </div>

                </div>



              </Exercise>
            ))
          ) : (
            <div></div>
          )}

          <div className="submit-warning-container">
            {
              submitClicked && selectedIndex != null ? <div onClick={() => {
                if (questionIndex < 9) {
                  setQuestionIndex((prev) => prev + 1)
                }
                else if (questionIndex == 9) {

                  navigate(`/completed${location.pathname}/${score}`)
                }

                setSelectedIndex(null)
                setIsCorrectSelection(undefined)
                setSubmitClicked(false)
              }} className="next-button">
                Next Question
              </div> : <div onClick={() => {
               
                selectedIndex && handleSubmit()
              }} className="submit-button">
                Submit Answer
              </div>
            }
            <div className="warning">
              {
                submitClicked && selectedIndex == null ? <div style={{ display: "flex", alignItems: "center" }}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 40 40"><path fill="#EE5454" d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-5.402 7.415.142-.175a1.25 1.25 0 0 1 1.595-.143l.175.143L20 18.233l3.49-3.493a1.25 1.25 0 0 1 1.595-.143l.175.143a1.25 1.25 0 0 1 .142 1.595l-.142.175L21.767 20l3.493 3.49a1.25 1.25 0 0 1 .142 1.595l-.142.175a1.25 1.25 0 0 1-1.595.142l-.175-.142L20 21.767l-3.49 3.493a1.25 1.25 0 0 1-1.595.142l-.175-.142a1.25 1.25 0 0 1-.143-1.595l.143-.175L18.233 20l-3.493-3.49a1.25 1.25 0 0 1-.143-1.595Z" /></svg>
                  <p>Please select an answer</p></div> : ""
              }
            </div>

          </div>

        </div>
      </Container>
    </>
  )
}

export default ExercisePage;
