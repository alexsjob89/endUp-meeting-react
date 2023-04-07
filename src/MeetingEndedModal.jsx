import React from 'react';
import {BiStar} from "react-icons/bi";

const MeetingEndedModal = ({onClose}) => {
 const [rating, setRating] = React.useState(0)

 const handleSubmit = () => {
   console.log(`Rating: ${rating}`)
   onClose()
 }

 return (
  <div className='modal' >
  <h2>Meeting Ended</h2>
  <p>Please rate you experience:</p>
  <div>
   {[1, 2, 3, 4, 5].map((star) => (
    <span
    className={star <= rating ? 'star-filled' : ''}
    onClick={() => setRating(star)}
    key={star}>
<BiStar size={24}/>
    </span>
   ))}

  </div>
   <button onClick={handleSubmit}>Submit</button>
  </div>
 );
}

export default MeetingEndedModal;
