import { gql, useQuery } from "@apollo/client";
import { Card } from "react-bootstrap";
import { Loading } from "../Loading";

export const Following = () => {
  const GET_FOLLOWING = gql`
    query {
      numFollowings {
        numberOfFollowings
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_FOLLOWING, {
    fetchPolicy: "no-cache",
  });
  if (loading) {
    return <Loading />;
  }
  const num = data.numFollowings.numberOfFollowings;

  return (
    <div style={{ float: "left", display: "inline-block" }}>
      <Card style={{ width: "35rem" }}>
        <Card.Body>
          <Card.Title>Following</Card.Title>
          <Card.Title className="mb-2 text-muted" style={{ float: "right" }}>
            {num}
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};
