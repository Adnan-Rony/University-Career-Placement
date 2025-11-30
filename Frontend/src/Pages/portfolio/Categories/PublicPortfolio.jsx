import React from 'react'
import { useParams } from 'react-router';
import { UsePublicPortfolio } from '../../../hooks/usePortfolio';
import portfolioTemplates from '../templates';
import { Spinner } from '../../../Components/loading/loader/Spinner';

export const PublicPortfolio = () => {
    const { slug } = useParams();
    const { data: portfolioData, isPending, isError } = UsePublicPortfolio(slug);
   if (isPending) return <Spinner/>;
   if (isError || !portfolioData) return <p>Portfolio not found</p>;
  const MyTemplate = portfolioTemplates.find(
    (template) => template.id === portfolioData?.templateId
  );



 const TemplateComponent = MyTemplate.component;


   
 
  if (!MyTemplate) return <p>Template not found</p>;
  
    return (
      <TemplateComponent 
      portfolioData={portfolioData} isPending={isPending} />
  )
}
