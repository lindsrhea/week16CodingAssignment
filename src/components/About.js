import { Link } from 'react-router-dom';

export default function About() {
    return (
        <>
        <div className="About">
            <div className="wrapper">
                <span className="message">
                This is my final project for my Front-End Coding bootcamp. I have learned so much along the way.
            We started out easy, learning about JavaScript and all of the variables. Then we began the journey
            of learning about conditions and loops, arrays and functions before diving deeper into Javascript.
            I have enjoyed learning everything from the bootcamp. It has been so helpful and so knowledgeable.
            Just being able to see what I have accomplished is so awesome. Thank you to everyone who supported me
            along the way.
                </span>
            </div>
        </div>
        <div className='links'>
            <Link to="./home">Go to Home Page</Link>
            <br></br>
            <Link to="./quiz">Go to the Quiz</Link>
            <br></br>
            <Link to="./review">Submit a Review</Link>
        </div>
        </>
    );
}
