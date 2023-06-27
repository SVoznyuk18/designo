import MainLayout from "@/layout/MainLayout";
import {MainSection, Projects} from '@/components';

import {Container} from '@/styledComponents';

const WebDesign = ({projects}) => {
  return (
    <MainLayout title='Web Design'>
      <MainSection
        title='Web Design'
        subtitle='We build websites that serve as powerful marketing tools <br/>and bring memorable brand experiences.'
      />
      <Projects projects={projects}/>
    </MainLayout>
  )
}

export default WebDesign;