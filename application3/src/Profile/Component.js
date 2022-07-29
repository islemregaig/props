import React from 'react'
import propTypes from 'prop-types'
const Component = ({fullName,bio,profession,handleName,age}) => {
return (
    <div  >
        {fullName} :
        {profession}<br/> 
        {age}<br/> <br/> 
        {bio } 
        <br/> <br/> <br/> 
        <button  className="btn" onClick={e=>handleName(fullName)}>User</button>
       

    </div>
);
};
Component.defaultProps={
age:"25 ans ",
}

Component.propTypes = {
fullName: propTypes.string,
bio: propTypes.string,
children: propTypes.string,
handleName: propTypes.func,
Profession: propTypes.string,
age: propTypes.number,
};


export default Component;