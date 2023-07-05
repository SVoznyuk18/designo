import dynamic from "next/dynamic";

const MainLayout = dynamic(() => import('@/layout/MainLayout'));
const LocationsSection = dynamic(() => import('../../components/LocationsSection/LocationsSection'), {loading: () => <p>Loading...</p>});

const Locations = () => {
    return (
        <MainLayout title='Locations'>
            <LocationsSection/>
        </MainLayout>
    )
}

export default Locations;