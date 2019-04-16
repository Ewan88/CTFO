import React from 'react';

const JournalSelected = ({entry}) => {
  if(!entry){
    return null
  }

  return(
    <div className="journal-selected">
      <p>{entry}</p>
    </div>
  )

}

export default JournalSelected;
