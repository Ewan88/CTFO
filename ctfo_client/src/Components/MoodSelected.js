import React from 'react';

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
      <p>{mood.name}</p>
      <p>{mood.quotes[index].text}</p>
      <p>{mood.quotes[index].author}</p>
      <img width="415" height="415" src={mood.images[randomNum(mood.images.length)].imageUrl} alt=""></img>
      <iframe width="560" height="315" src={mood.videos[randomNum(mood.videos.length)].videoUrl} frameBorder="0" allowFullScreen></iframe>
    </div>
  )

}
export default MoodSelected;
