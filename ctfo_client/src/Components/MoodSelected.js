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
      <p>{mood.quotes[index].text}</p>
      <p>{mood.quotes[index].author}</p>
      <img src={mood.images[randomNum(mood.images.length)].imageUrl} alt=""></img>
      <iframe width="560" height="315" src={mood.videos[randomNum(mood.videos.length)].videoUrl} frameborder="0" allow="accelerometer autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )


}
export default MoodSelected;
