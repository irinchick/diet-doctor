import React, { useState, useEffect } from 'react';
import {
  Redirect,
} from "react-router-dom";


function Login() {
    const setToken = (tok) => {
        localStorage.setItem('token', tok);
    }
    
    useEffect(() => {
        async function fetchData() {
          const res = await fetch("https://ddapi.production.dietdoctor.com/auth/create",
          {
            method: 'POST',
            contentType: 'application/json',
            body: JSON.stringify({
                    "username": "stas.testuser1@dietdoctor.com",
                    "password": "C5(Pg5qwrwP^(WJ!eS%d38FI"
            })
          });
          res
            .json()
            .then(res => {
                setToken(res.token)})
            .catch(err => {});
        }
    
        fetchData();
      });

      
       
  

        return (
            <div >    
                <div>Not logged in</div>
            </div>
        );
      
}

export default Login;
