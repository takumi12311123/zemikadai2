import { gql, useQuery } from "@apollo/client";
import { Card } from "react-bootstrap";
import { Error } from "../Error";
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
  if (error) {
    return <Error />;
  }
  const num = data.numFollowings.numberOfFollowings;

  return (
    <div style={{ float: "left", display: "inline-block" }}>
      <Card style={{ height: "50%" }}>
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
