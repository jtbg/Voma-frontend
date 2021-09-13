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
  signingKeys: [{ // Copy of the keys publicly available at https://slack.com/openid/connect/keys 
    e: "AQAB",
    n: "zQqzXfb677bpMKw0idKC5WkVLyqk04PWMsWYJDKqMUUuu_PmzdsvXBfHU7tcZiNoHDuVvGDqjqnkLPEzjXnaZY0DDDHvJKS0JI8fkxIfV1kNy3DkpQMMhgAwnftUiSXgb5clypOmotAEm59gHPYjK9JHBWoHS14NYEYZv9NVy0EkjauyYDSTz589aiKU5lA-cePG93JnqLw8A82kfTlrJ1IIJo2isyBGANr0YzR-d3b_5EvP7ivU7Ph2v5JcEUHeiLSRzIzP3PuyVFrPH659Deh-UAsDFOyJbIcimg9ITnk5_45sb_Xcd_UN6h5I7TGOAFaJN4oi4aaGD4elNi_K1Q",
    kty: "RSA",
    kid: "mB2MAyKSn555isd0EbdhKx6nkyAi9xLq8rvCEb_nOyY",
    alg: "RS256"
  }],
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
