import React, { useState, useEffect } from "react";
import './login.css';

const Login = () => {

  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ site, setSite ] = useState("");

  const [ loginMessage, setLoginMessage ] = useState("");
  const [ serverResponse, setServerResponse ] = useState("1");
  const [ serverResponse2, setServerResponse2 ] = useState("2");
  const [ serverResponse3, setServerResponse3 ] = useState("3");

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
        setLoginMessage(`Attempting login as site[${site}] user[${username}] pass[${password}]`);
        
        // var siteId = site;
        // var userId = username;
        // var password = "aaaaaaaa";
        var baseUrl = "https://terminalservices1010.tstpaypoint.services/PP.T3.TerminalServices.API";
        var loginUrl = baseUrl + '/site/' + site + '/user/' + username + '/accesstoken';
        // console.log("loginUrl:" +loginUrl);
        setLoginMessage(loginUrl);


        // // fetch(`https://world.openfoodfacts.org/api/v0/product/1.json`, {

        const myHeaders = new Headers({
            'Accept': '*/*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });

        fetch('https://terminalservices1010.tstpaypoint.services/PP.T3.TerminalServices.API/site/92132/user/Admin/accessToken', {
            method: 'POST',
            // mode: 'cors', 
            headers: myHeaders,
            body: JSON.stringify({'Password': password})
        })
        .then(response => {
            var r = response.json();
            setServerResponse('done:', r)
            return r;
            })
        .then((data) => {
            setServerResponse2('Success:', data)
            console.log('Success:', data);
        })
        //Then with the error genereted...
        .catch((error) => {
              setServerResponse3('Error:', data)
            console.error('Error:', error);
          });
          
        // .then(res => onInfoFetched(res))
      }

  return (
      <div className="login_style">
      <form>
      <div>
            <label>Site:
                <input type="text" id="site" onInput={e => setSite(e.target.value)} />
            </label>
        </div>
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
   
    </form>
    <button onClick={handleSubmit} type="submit" form="form1" value="Submit">Login</button>
    <div>
<p/>
    {loginMessage}
<p/>
    {serverResponse}
<p/>
    {serverResponse2}
<p/>
    {serverResponse3}
    </div>
      </div>
      
    );
};

export default Login;
