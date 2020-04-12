/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from "react"
import Layout from "./src/components/Layout"
import awsconfig from "./src/aws-exports"

let configUpdate = awsconfig
if (typeof window !== `undefined`) {
  const hostedDomainName = "d1fju52soaxewq.amplifyapp.com/"
  let redirectUrl = "https://" + hostedDomainName + "/"
  if (window.location.hostname === "localhost") {
    redirectUrl = "http://localhost:8000/"
  } else if (window.location.hostname.endsWith(hostedDomainName)) {
    redirectUrl = "https://" + window.location.hostname + "/"
  }
  const oauth = {
    domain: "auth.gracelongbeach.com",
    scope: [
      "phone",
      "email",
      "openid",
      "profile",
      "aws.cognito.signin.user.admin",
    ],
    redirectSignIn: redirectUrl + "admin/",
    redirectSignOut: redirectUrl,
    responseType: "code",
  }

  configUpdate.oauth = oauth
}

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props} awsconfig={configUpdate}>
      {element}
    </Layout>
  )
}
