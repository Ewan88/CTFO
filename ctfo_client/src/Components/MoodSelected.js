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
<<<<<<< HEAD
      <p>{mood.quotes[randomNum(mood.quotes.length)].text}</p>
      <img width="450" height="450" src={mood.images[randomNum(mood.images.length)].imageUrl} alt=""></img>
      <iframe width="560" height="315"
      src={mood.videos[randomNum(mood.videos.length)].videoUrl}
      frameBorder="0"  allowFullScreen></iframe>
=======
      <p>{mood.name}</p>
      <p>{mood.quotes[index].text}</p>
      <p>{mood.quotes[index].author}</p>
      <img src={mood.images[randomNum(mood.images.length)].imageUrl} alt=""></img>
      <iframe width="560" height="315" src={mood.videos[randomNum(mood.videos.length)].videoUrl} frameborder="0" allow="accelerometer autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
>>>>>>> 203dee3688e7f97491685834f60b4fd35486311d
    </div>
  )

}
export default MoodSelected;
