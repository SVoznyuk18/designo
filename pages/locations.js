import dynamic from "next/dynamic";

const Locations = dynamic(() => import('../src/containers/Locations/Locations'));

const LocationsPage = () => {
    return (
        <Locations/>
    )
}

export default LocationsPage;
