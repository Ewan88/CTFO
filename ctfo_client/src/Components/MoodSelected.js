import React from 'react';

const MoodSelected = ({mood}) => {
  // console.log(mood.quotes);
  if (!mood){
    return null
  }

  return(
    <div className="mood-selected">
      <p>{mood.quotes[0].text}</p>
      <img src={mood.images[0].imageUrl} alt=""></img>
      <video width="320" height="240" controls>
      <source src={mood.videos[0].videoUrl}/>
      </video>
    </div>
  )
}
export default MoodSelected;
