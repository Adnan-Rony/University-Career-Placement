import React from 'react'
import { useLocation, useNavigate } from 'react-router';
import { useGetAssessmentQuestions } from '../../hooks/useSkillAssesment';
import Loading from '../../Components/loading/Loading';

export const AllQuestions = () => {
    const location = useLocation();
  const navigate = useNavigate();
  
  const { attemptId } = location.state || {};
   const { data: questionsData, isLoading:isStarting, error } = useGetAssessmentQuestions(attemptId);
  console.log(questionsData);
  
  if(isStarting){
    return    <Loading/>
  }
  return (
    <div className='py-16 container mx-auto'>AllQuestions{attemptId}
    {/* <h1>Total Quitions{questionsData.length}</h1> */}
 
    </div>
  )
}
