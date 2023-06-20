import React from 'react';
import axios from 'axios';

const contactus = () => {
  const sendmail = () => {
        axios.get('http://localhost:8080/beverltmotorsbackend/beverlymotors/web-mail/public/api/send/email'
        ).then(res=>
        {
          console.log(res.data['message']);
          });
        
        }


  return (
    <div>
        <h1>Therichpost.com</h1>
         <button onClick={e => {sendmail()}}>Click Me!! To Send Mail</button>
    </div>
  )
}

export default contactus