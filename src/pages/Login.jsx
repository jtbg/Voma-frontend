import React from 'react';
import OAuth2Login from 'react-simple-oauth2-login'

const onSuccess = ({ code }) => {
  console.log(code);
};
const onFailure = response => console.error(response);

export default function Oauth() {
  // const onSuccess = ({ code }) => fetch(process.env.REACT_APP_AUTH_ENDPOINT, {
  //     method: 'POST',
  //     body: JSON.stringify({ code }),
  //     headers: {
  //       'Content-type': 'application/json',
  //     }
  //   });

  return (
    <OAuth2Login 
      authorizationUrl="https://slack.com/openid/connect/authorize"
      responseType="code"
      clientId={process.env.REACT_APP_SLACK_CLIENT_ID}
      scope="email,openid,profile"
      redirectUri="https://4cdf-205-178-101-24.ngrok.io/slack/authenticate"
      onSuccess={onSuccess}
      onFailure={onFailure}/>
  );
}