import ContactForm from "../components/ContactForm.jsx";

export default function Contact() {
    return (
        <div>
            <h1>Contact Us</h1>

            <h3>Join PRSA</h3>
            <p>Fill out the following information to be added to the PRSA WhatsApp Groupchat</p>
            <ContactForm/>
            {/* TODO: Complete API to submit request, add response upon submit stating it may take a few days to be added */}

            <h3>Club Collaboration Inquiries</h3>
            <p>Email us at: <a href="mailto:PLACEHOLDER@wisc.edu"><strong>{/*TODO: ADD EMAIL */}@wisc.edu</strong></a></p>
        </div>
    )
}