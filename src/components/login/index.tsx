import React from "react";


export function Login(){
   
   
   
    return(
        <div className="login_wrapper">
            <h1>
                Welcome back! Please login to continue
            </h1>
            <form >
                <fieldset>
                    <label htmlFor="email">Email :</label>
                    <input type="email" id="email" placeholder="please enter user email here"/>
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Password :</label>
                    <input type="password" id="password" placeholder="please enter user password here"/>
                </fieldset>
            </form>
        </div>
    )
}