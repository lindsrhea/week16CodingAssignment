export const Comment = (props) => {
    return (
      <div
        className="comment"
        style={{ backgroundColor: props.completed ? "green" : "white" }}
      >
        <h1>{props.reviewName}</h1>
        <button onClick={() => props.completeReview(props.id)}> Complete </button>
        <button onClick={() => props.deleteReview(props.id)}> X </button>
      </div>
    );
  };
