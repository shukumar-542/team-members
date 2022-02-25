import React, { useState } from 'react';

const Users = (props) => {
      // console.log(props);
      const {name,email,picture,phone} =props.user
      const userStyle ={
            display: 'flex',
            border : '2px solid lightgray',
            width : '40%',
            padding : '10px',
            borderRadius : '10px',
            margin : '10px'
      }
      const [mobile, setMobile] = useState('');
      const showPhone =()=> setMobile(phone);
      const addMember = props.addMember;
      const fullName =  name.first+ ' '+ name.last

      return (
            <div style={userStyle}>
                  <div style={{marginTop:'25px'}}>
                        <img src={picture.large} alt="" />
                  </div>
                  <div style={{marginLeft:'20px'}}>
                        <h2>Name: {fullName}</h2>
                        <p>Email:{email}</p>
                        <p>Phone: {mobile} </p>
                        <button onClick={showPhone}>Show phone Number</button>
                        <button onClick={()=>addMember(fullName)}> Add Me </button>
                  </div>
                  
            </div>
      );
};

export default Users;