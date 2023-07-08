import dynamic from "next/dynamic";

const MainLayout = dynamic(() => import('@/layout/MainLayout'));
const MainSection = dynamic(() => import('../../components/MainSection/MainSection'), {loading: () => <p>Loading...</p>});
const DescriptionTeam = dynamic(() => import('../../components/DescriptionTeam/DescriptionTeam'), {loading: () => <p>Loading...</p>});
const CountriesSection = dynamic(() => import('../../components/CountriesSection/CountriesSection'), {loading: () => <p>Loading...</p>})


import about from "@/public/about/about.jpg";
import talent from "@/public/about/talent.jpg";
import deal from "@/public/about/deal.jpg";

const About = () => {
  return (
    <MainLayout
      title='About'
    >
      <MainSection
        title='About Us'
        subTitle='Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.'
        image={about}
        alt=''
        variant='withImg'
      />
      <DescriptionTeam
        title='World-class talent'
        subTitle='We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.

        Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.'
        image={talent}
        alt='image_talent'
        variant='imageLeft'
      />
      <CountriesSection/>
      <DescriptionTeam
        title='The real deal'
        subTitle='As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.

        We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.'
        image={deal}
        alt='image_deal'
      />
    </MainLayout>
  );
}

export default About;