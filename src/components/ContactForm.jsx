import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function ContactForm(){
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);

    const submitContactForm = () => {
        {/*TODO: Add regex check for email before to set isValidEmail to true before fetching */}
    }

    return (
        <div style={{maxWidth:"50%", margin: "auto"}}>
            <Form className="mb-4">
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Your name" maxLength="32" value={fullName} onChange={setFullName}/>
                </Form.Group>

                <Form.Group className="mt-2">
                    <Form.Label>Email</Form.Label>
                    <Form.Control placeholder="you@wisc.edu" maxLength="32" value={email} onChange={setEmail}/>
                </Form.Group>
                {!isValidEmail &&  <p style={{color: "crimson"}}>The email you have entered is invalid</p>}
                <Button className="mt-3" disabled={fullName.trim() === "" || email.trim() === ""}>Request to Join</Button>
            </Form>
        </div>
    );
}