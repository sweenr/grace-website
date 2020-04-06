/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAboutPage = /* GraphQL */ `
  mutation CreateAboutPage(
    $input: CreateAboutPageInput!
    $condition: ModelAboutPageConditionInput
  ) {
    createAboutPage(input: $input, condition: $condition) {
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
export const updateAboutPage = /* GraphQL */ `
  mutation UpdateAboutPage(
    $input: UpdateAboutPageInput!
    $condition: ModelAboutPageConditionInput
  ) {
    updateAboutPage(input: $input, condition: $condition) {
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
export const deleteAboutPage = /* GraphQL */ `
  mutation DeleteAboutPage(
    $input: DeleteAboutPageInput!
    $condition: ModelAboutPageConditionInput
  ) {
    deleteAboutPage(input: $input, condition: $condition) {
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
export const createHomePage = /* GraphQL */ `
  mutation CreateHomePage(
    $input: CreateHomePageInput!
    $condition: ModelHomePageConditionInput
  ) {
    createHomePage(input: $input, condition: $condition) {
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
export const updateHomePage = /* GraphQL */ `
  mutation UpdateHomePage(
    $input: UpdateHomePageInput!
    $condition: ModelHomePageConditionInput
  ) {
    updateHomePage(input: $input, condition: $condition) {
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
export const deleteHomePage = /* GraphQL */ `
  mutation DeleteHomePage(
    $input: DeleteHomePageInput!
    $condition: ModelHomePageConditionInput
  ) {
    deleteHomePage(input: $input, condition: $condition) {
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
