import { Card, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function SuggestionBox() {
    return (
        <Card style={{maxWidth: "70%", margin: "auto"}}>
            <Form>
                <Form.Group>
                    <Form.Label style={{maxWidth: "70%", paddingTop: "1em", paddingBottom:"1em"}}>Have ideas for events? Share them with us by submitting the form below!</Form.Label>
                    <Form.Control as="textarea" rows={4} style={{maxWidth:"90%", margin: "auto"}} placeholder="Share your suggestions here!"/>
                </Form.Group>
                <Button style={{marginBottom:"1em"}}className="mt-3">Submit</Button>
            </Form>
        </Card>
    );
}
