import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { UserLoginInfo, UserSignupInfo } from "./AuthSlice";
const GRAPHQL_API_URL = "http://127.0.0.1:8000/graphql";

const client = new ApolloClient({
  uri: GRAPHQL_API_URL,
  cache: new InMemoryCache(),
});


const SIGNUP_MUTATION = gql`
  mutation SignupUser($userInfo: SignupInput!) {
    signupUser(userInfo: $userInfo) {
      id,
      firstName,
      lastName,
      email
    }
  }
`;


export const signupUserAPI = async (userInfo: UserSignupInfo) => {
  try {
  
    const response = await client.mutate({
      mutation: SIGNUP_MUTATION,
      variables: { userInfo },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const loginUserAPI = async (userInfo: UserLoginInfo) => {
  try {    
    const response = await client.mutate({
      mutation: SIGNUP_MUTATION,
      variables: { userInfo },
    });
    return response.data; 
  } catch (error) {
    throw error; 
  }
};
