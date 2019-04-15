import React from 'react';

const MoodSelected = ({mood}) => {
  // console.log(mood.quotes);
  if (!mood){
    return null
  }

  function randomNum(length){
    return Math.floor(Math.random()*length)
  }

  return(
    <div className="mood-selected">
      <p>{mood.quotes[randomNum(mood.quotes.length)].text}</p>
      <img src={mood.images[randomNum(mood.images.length)].imageUrl} alt=""></img>
      <video width="320" height="240" controls>
      <source src={mood.videos[randomNum(mood.videos.length)].videoUrl}/>
      </video>
    </div>
  )
}
export default MoodSelected;
