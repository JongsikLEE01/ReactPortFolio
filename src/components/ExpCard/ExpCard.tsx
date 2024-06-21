import React from 'react';
import './ExpCard.css';

function ExpCard({ experience }: Props) {
    const Fade = require('react-reveal/Fade');
    return (
        <Fade duration={800} bottom>
        <a className="expcard-card" href={experience.url} target="_blank" rel="noopener noreferrer">
            <div className="inner">    
                <div className="expcard-role">
                    {experience.role}
                </div>
                <div className="expcard-company">
                    {experience.company}
                </div>
                <div className="expcard-date">
                    {experience.date}
                </div>
            </div>
        </a>
        </Fade>
    );
}
interface Props {
    experience : {
        role: string,
        company: string,
        date: string | number
        url: string
    }
}
export default ExpCard;