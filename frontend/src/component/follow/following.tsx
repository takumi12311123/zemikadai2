import { gql, useQuery } from "@apollo/client";
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

  return <div>Followings {num}</div>;
};
