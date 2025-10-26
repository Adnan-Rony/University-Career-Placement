import React from 'react'
import { StudentTemp2 } from '../ResumeBuilder/Templates/Students/StudentTemp2'
import FeaturedPayment from '../Payments/FeaturedPayment/FeaturedPayment'
import { Designertemplate } from '../ResumeBuilder/Templates/Designer/Designertemplate'
import { PdfDesignerTemp1 } from '../ResumeBuilder/PdfTemplates/PdfDesignerTemp1'

export const Demo = () => {
  return (
    <div className='py-16 container mx-auto'>
       <Designertemplate/>
       <PdfDesignerTemp1/>
    </div>
  )
}
