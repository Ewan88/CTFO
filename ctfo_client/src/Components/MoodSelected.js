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
      <img width="450" height="450" src={mood.images[randomNum(mood.images.length)].imageUrl} alt=""></img>
      <iframe width="560" height="315"
      src={mood.videos[randomNum(mood.videos.length)].videoUrl}
      frameBorder="0"  allowFullScreen></iframe>
    </div>
  )

}
export default MoodSelected;
