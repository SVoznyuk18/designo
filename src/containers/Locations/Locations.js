import MainLayout from "@/layout/MainLayout";

import {LocationsSection} from '@/components';
import { Container } from '@/styledComponents';

const Locations = () => {
    return (
        <MainLayout title='Locations'>
            <LocationsSection/>
        </MainLayout>
    )
}

export default Locations;