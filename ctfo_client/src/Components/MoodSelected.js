import React from 'react';

const MoodSelected = ({mood}) => {
  // console.log(mood.quotes);
  if (!mood){
    return null
  }

  return(
    <div className="mood-selected">
      <p>{mood.quotes[0].text}</p>
    </div>
  )
}
export default MoodSelected;
