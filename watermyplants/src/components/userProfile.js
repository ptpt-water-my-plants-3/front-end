import React, { useState, useEffect } from 'react'

<<<<<<< HEAD
const userProfileComp = () => { 
    const { details, setDetails } = useState(null)

    return (
        <div className='profileContainer'>
            <h2>User Profile</h2>
            {
                <>
                    <a>User name</a>
                    <a>{details.user.username}</a>
                    <a>Password</a>
                    <a>{details.user.password}</a>
                    <a>Phone number</a>
                    <a>{details.user.phoneNumber}</a>
                </>
            }
            <button>complete</button>
            <button>cancel</button> 
        </div>
    )
}

=======
const userProfileComp = () => {
    return (
    <div>
        <div>
            <div className='userName'>
                <label>User name</label>
                <a>`${username}`</a>
            </div>
            <div className='password'>
                <label>password</label>
                <a>`${password}`</a>
            </div>
            <div className='phoneNumber'>
                <label>Phone number</label>
                <a>`${phoneNumber}`</a>
            </div>
        </div>
        <div>
            <button>complete</button>
            <button>cancel</button>
        </div>
    </div>
    )
}



>>>>>>> 4f9f90bdeb3950e5ddb0bdf63106e5df12f816dc
export default userProfileComp;