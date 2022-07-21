import { gql, useQuery } from "@apollo/client";
import React from "react";

export const Follower = () => {
  const GET_FOLLOWERS = gql`
  query numOfFollowers{
    numFollowers{numberOfFollowers}
  }
  
  `;
  const { loading, error, data } = useQuery(GET_FOLLOWERS);
  // const numberOfFollowers = data.numFollowers.numberOfFollowers;
  // console.log(numberOfFollowers)
  return (
    // <div>follower {numberOfFollowers}</div>
    <div>follower</div>
  );
};
