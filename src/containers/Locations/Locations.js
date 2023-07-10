import dynamic from "next/dynamic";

const LocationsSection = dynamic(() => import('../../components/LocationsSection/LocationsSection'), {loading: () => <p>Loading...</p>});

const Locations = () => {
  return (
    <>
      <LocationsSection/>
    </>
  )
}

export default Locations;