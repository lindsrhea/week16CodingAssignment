import { useState } from "react";
import { Comment } from "./Comment";
import { Link } from 'react-router-dom';


export default function Review() {
  const [reviewList, setReviewList] = useState([]);
  const [newReview, setNewReview] = useState("");

  const handleChange = (event) => {
    setNewReview(event.target.value);
  };

  const addReview = () => {
    const review = {
      id: reviewList.length === 0 ? 1 : reviewList[reviewList.length - 1].id + 1,
      reviewName: newReview,
      completed: false,
    };
    setReviewList(review.reviewName !== "" ? [...reviewList, review] : reviewList);
  };

  const deleteReview = (id) => {
    setReviewList(reviewList.filter((review) => review.id !== id));
  };

  const completeReview = (id) => {
    setReviewList(
      reviewList.map((review) => {
        if (review.id === id) {
          return { ...review, completed: true };
        } else {
          return review;
        }
      })
    );
  };

  return (
    <>
    <h1>Leave us a review on your thoughts about the quiz!</h1>
      <div className="App">
      <div className="addReview">
        <input onChange={handleChange} />
        <button onClick={addReview}> Add Review</button>
      </div>
      <div className="list">
        {reviewList.map((review) => {
            return (
                <Comment
                reviewName={review.reviewName}
                id={review.id}
                completed={review.completed}
                deleteReview={deleteReview}
                completeReview={completeReview}
                />
                );
            })}
      </div>
    </div>
    <div className='links'>
            <Link to="./home">Go to Home Page</Link>
            <br></br>
            <Link to="./quiz">Go to the Quiz</Link>
            <br></br>
            <Link to="./about">What we're about</Link>
        </div>
    </>
  );
}
