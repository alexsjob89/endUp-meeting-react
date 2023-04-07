import React from 'react';
import MeetingEndedModal from './MeetingEndedModal';

const Meeting = () => {
 const [meetingEnded, setMeetingEnded] = React.useState(false)

 const handleMeetingEnd =() => {
   setMeetingEnded(true)
 }

 const handleModalClose = () => {
   setMeetingEnded(false)
 }

 return (
  <div>
   {meetingEnded && <MeetingEndedModal onClose={handleModalClose}/>}
   <button className='endUp-btn' onClick={handleMeetingEnd}>End Meeting</button>
  </div>
 );
}

export default Meeting;
