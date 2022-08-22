import { gql, useQuery } from "@apollo/client";
import { Button } from "react-bootstrap";
import { Error } from "../Error";
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
  if (error) return <Error />;

  // ここよくないと思う
  // どうにかして、follow済みなのかを把握して、ボタンを変えたい
  let buttonName = "follow";
  if (data.id) {
    buttonName = "unFollow";
  }

  return data.followButton.map(
    <Button
      className="followButton"
      variant="primary"
      style={{ float: "right" }}
    >
      {buttonName}
    </Button>
  );
};
