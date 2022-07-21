import { gql, useQuery } from "@apollo/client";
import React from "react";

export const Following = () => {
  const GET_FOLLOWING = gql`
    query getNumFollowings {
      numFollowings {
        numberOfFollowings
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_FOLLOWING);
  // const numberOfFollowings = data.numFollowings.numberOfFollowings;
  // console.log(numberOfFollowings);
  // return <div>Following {numberOfFollowings}</div>;
  return <>Following</>;
};
