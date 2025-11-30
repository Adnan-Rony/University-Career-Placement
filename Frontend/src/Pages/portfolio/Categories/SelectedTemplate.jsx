import React from 'react'
import { useParams } from 'react-router';
import portfolioTemplates from '../templates';
import { UseMyPortfolio } from '../../../hooks/usePortfolio';

export const SelectedTemplate = () => {
    const { data: portfolioData, isPending, isError, error } = UseMyPortfolio();
    const {id}=useParams()
const MyTemplate=portfolioTemplates.find((template)=>{
    return template.id===id
})
  const TemplateComponent = MyTemplate.component;

  return (
    <div>
   <TemplateComponent
    portfolioData={portfolioData}
     isPending={isPending} />
    </div>
  )
}
