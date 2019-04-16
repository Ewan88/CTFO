import React from 'react';

const CommentForm = (props) => {

  function handleSubmit(event){
  event.preventDefault();
  const comment = {
    "date": event.target.date.value,
    "comment": event.target.comment.value,
    "endMood": event.target.endMood.value
  }
  props.handleCommentPost(comment);
 }

 return (
  <div>
  <form onSubmit={handleSubmit}>
  <input type="date" placeholder="Date" name="date"/>
  <input type="text" placeholder="Comment" name="comment"/>
  <input type="text" placeholder="End Mood" name="endMood"/>
  <button type="submit">Save</button>
  </form>
  </div>
)
}

export default CommentForm;
