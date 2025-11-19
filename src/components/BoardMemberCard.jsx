import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function BoardMemberCard(props){
    return (
        <Card>
            <div>
                <img src={props.img}/>
            </div>
            <div>
                <h3>{props.name}</h3>
                <h4>{props.position}</h4>
                <h5>Major: {props.major}</h5>
                <h6>Class of {props.class}</h6>
                <p>{props.aboutme}</p>
            </div>
        </Card>
    );
}