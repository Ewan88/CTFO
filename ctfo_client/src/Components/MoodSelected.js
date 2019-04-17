import React from 'react';
import CommentForm from "./CommentForm"

const MoodSelected = ({mood}) => {
  let index = null
  if (!mood){
    return null
  } else {
    index = randomNum(mood.quotes.length)
  }

  function randomNum(length){
    return Math.floor(Math.random()*length)
  }

  return(
    <div className="mood-selected">
      <p className="quote-text animation fadeIn">{mood.quotes[index].text}</p>
      <p className="quote-author animation fadeIn">-{mood.quotes[index].author}</p>
      <img width="415" height="415" src={mood.images[randomNum(mood.images.length)].imageUrl} alt=""></img>
      <iframe title="mood-video" width="420" height="235" src={mood.videos[randomNum(mood.videos.length)].videoUrl} frameBorder="0" allowFullScreen></iframe>
      <CommentForm />
    </div>
  )

}
export default MoodSelected;
