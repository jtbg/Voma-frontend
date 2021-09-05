/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { AuthProvider } from "@50000feet/oidc-slack-open-id-react"

const oidcConfig = {
  authority: 'https://slack.com',
  metadata: {
    issuer: 'https://slack.com',
    authorization_endpoint: "https://slack.com/openid/connect/authorize",
    token_endpoint: "https://slack.com/api/openid.connect.token",
    userinfo_endpoint: "https://slack.com/api/openid.connect.userInfo",
    jwks_uri: "https://slack.com/openid/connect/keys",
  },
  clientId: process.env.REACT_APP_SLACK_CLIENT_ID,
  responseType: 'code',
  redirectUri:
    process.env.NODE_ENV === 'development'
      ? 'https://localhost:3000/slack/authenticate'
      : 'https://localhost:3000/slack/authenticate',
};

export default function Login() {
  return (
    <AuthProvider {...oidcConfig}>
      Test
    </AuthProvider>
  );
}
