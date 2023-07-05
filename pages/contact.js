import dynamic from "next/dynamic";

const Contact = dynamic(() => import('../src/containers/Contact/Contact'));

const ContactPage = () => {
    return (
        <Contact/>
    );
}

export default ContactPage;