import MainLayout from "@/layout/MainLayout";
import {MainSection, Projects} from '@/components';

import {Container} from '@/styledComponents';

const GraphicDesign = ({projects}) => {
  return (
    <MainLayout title='Graphic Design'>
      <MainSection
        title='Graphic Design'
        subtitle='We deliver eye-catching branding materials that are <br>
        tailored to meet your business objectives.
        '
      />
      <Projects projects={projects}/>
    </MainLayout>
  )
}

export default GraphicDesign;