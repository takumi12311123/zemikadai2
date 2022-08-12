import { gql, useQuery } from "@apollo/client";
import { Button } from "react-bootstrap";
import { Loading } from "../Loading";

export const FollowButton = () => {
  const CHECK_FOLLOW = gql`
    query followers(){
      id
      name
    }
  `;

  const { loading, error, data } = useQuery(CHECK_FOLLOW);
  if (loading) return <Loading />;
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
