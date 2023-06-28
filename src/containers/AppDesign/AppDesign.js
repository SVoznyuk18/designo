import MainLayout from "@/layout/MainLayout";
import {MainSection, Projects} from '@/components';


const AppDesign = ({projects}) => {
    return (
        <MainLayout
            title='App Design'
        >
            <MainSection
                title='App Design'
                subTitle='Our mobile designs bring intuitive digital solutions <br>
                to your customers right at their fingertips.'
            />
            <Projects projects={projects}/>
        </MainLayout>
    )
}

export default AppDesign;