import React, { useState, useEffect } from "react";
import './login.css';

const Login = () => {

  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ site, setSite ] = useState("");

//   function validateForm() {
//     return username.length > 0 && password.length > 0 && site.length >0;
//   }

    const onInfoFetched = (result) => {
        console.log(result)
        var token = res.json().data.accessToken;
        console.log(`TOKEN:${token}`)
    }
      
    function handleSubmit(event) {
        event.preventDefault();
        console.log("submit")
        console.log(`${username}`)

        var siteId = "92132";
        var userId = "Admin";
        var password = "aaaaaaaa";
        var baseUrl = "https://terminalservices1010.tstpaypoint.services/PP.T3.TerminalServices.API";
        var loginUrl = baseUrl + '/site/' + siteId + '/user/' + userId + '/accesstoken';
        console.log("loginUrl:" +loginUrl);

        // fetch(`https://world.openfoodfacts.org/api/v0/product/1.json`, {

        const myHeaders = new Headers({
            'Accept': '*/*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });

        fetch('https://terminalservices1010.tstpaypoint.services/PP.T3.TerminalServices.API/site/92132/user/Admin/accessToken', {
            method: 'POST',
            // mode: 'cors', 
            headers: myHeaders,
            body: JSON.stringify({'Password': 'aaaaaaaa'})
        })
        .then(response => response.json())
        .then((data) => {
            console.log('Success:', data);
          })
          //Then with the error genereted...
          .catch((error) => {
            console.error('Error:', error);
          });
          
        // .then(res => onInfoFetched(res))
  
      }

  return (
      <div className="login_style">
      <form>
        <div>
          <label>Username:
            <input type="text" id="username" onInput={e => setUsername(e.target.value)} />
            </label>
        </div>
        <div>
            <label>password:
            <input type="text" id="password"  onInput={e => setPassword(e.target.value)} />
            </label>
        </div>
        <div>
            <label>Site:
                <input type="text" id="site"  onInput={e => setSite(e.target.value)} />
            </label>
        </div>
    </form>
    <button onClick={handleSubmit} type="submit" form="form1" value="Submit">Login</button>
      </div>
      
    );
};

export default Login;
