import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
        <h1>Welcome to the Home Page</h1>
        <div className='links'>
            <Link to="./quiz">Go to the Quiz</Link>
            <br></br>
            <Link to="./review">Submit a Review</Link>
            <br></br>
            <Link to="./about">What we're about</Link>
        </div>
        </>
    )
}
