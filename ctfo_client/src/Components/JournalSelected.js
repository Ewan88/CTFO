import React from 'react';

const JournalSelected = ({entry}) => {
  if(!entry){
    return null
  }

  return(
    <div className="journal-selected">
      <p>{entry.date}</p>
      <p>{entry.comment}</p>
      <p>{entry.endMood}</p>
    </div>
  )

}

export default JournalSelected;
