import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function EventCard(props){
    return (
        <Card>
            <div className="row">
                <div className="col">
                    <h1>{props.date}</h1>
                    <h2>{props.time}</h2>
                </div>
                <div className="col">
                    <h2>{props.title}</h2>
                    <h3>{props.location}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </Card>
    );
}