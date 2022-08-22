import { gql, useQuery } from "@apollo/client";
import { Card } from "react-bootstrap";
import { Error } from "../Error";
import { Loading } from "../Loading";

export const Follower = () => {
  const GET_FOLLOWERS = gql`
    query numOfFollowers {
      numFollowers {
        numberOfFollowers
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_FOLLOWERS, {
    fetchPolicy: "no-cache",
  });
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  const num = data.numFollowers.numberOfFollowers;

  return (
    <div style={{ float: "left", display: "inline-block" }}>
      <Card style={{ height: "50%" }}>
        <Card.Body>
          <Card.Title>Follower</Card.Title>
          <Card.Title className="mb-2 text-muted" style={{ float: "right" }}>
            {num}
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};
