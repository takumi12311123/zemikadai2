import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Button } from "react-bootstrap";

export const FollowButton = () => {
  const CHECK_FOLLOW = gql`
    query GetUsers {
      users {
        id
        name
        description
        email
        createdAt
        updatedAt
      }
    }
  `;

  const { loading, error, data } = useQuery(CHECK_FOLLOW);
  // if (loading) return <p>Loading...</p>;
  // if (error) return `Error : ${error}`;

  return (
    <Button
      className="followButton"
      variant="primary"
      style={{ float: "right" }}
    >
      follow
    </Button>
  );
};
