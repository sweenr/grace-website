/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAboutPage = /* GraphQL */ `
  query GetAboutPage($id: ID!) {
    getAboutPage(id: $id) {
      id
      aboutTitle
      about
      missionTitle
      mission
      messageTitle
      message
      believeTitle
      believe
    }
  }
`;
export const listAboutPages = /* GraphQL */ `
  query ListAboutPages(
    $filter: ModelAboutPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAboutPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        aboutTitle
        about
        missionTitle
        mission
        messageTitle
        message
        believeTitle
        believe
      }
      nextToken
    }
  }
`;
export const getHomePage = /* GraphQL */ `
  query GetHomePage($id: ID!) {
    getHomePage(id: $id) {
      id
      worshipTimes {
        id
        name
        startTime
      }
      about
      newsHeadline
      newsBody
    }
  }
`;
export const listHomePages = /* GraphQL */ `
  query ListHomePages(
    $filter: ModelHomePageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHomePages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        about
        newsHeadline
        newsBody
      }
      nextToken
    }
  }
`;
