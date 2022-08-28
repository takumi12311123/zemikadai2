import { gql, useQuery } from "@apollo/client";
import { faker } from "@faker-js/faker";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FollowButton } from "../button/FollowButton";

function Users(): any {
  const pic = faker.image.avatar();
  const getUsers = gql`
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

  const getUser = gql`
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

  function getUserId(e: any) {
    console.log(e.target.className);
    // userIDをボタンから入手

    return;
  }

  const { loading, error, data } = useQuery(getUsers);
  if (loading) return <p>Loading...</p>;
  if (error) return `Error : ${error}`;

  return data.users.map(({ id, name, description }: any) => (
    <Card style={{ width: "24rem", height: "35rem", float: "left" }} key={id}>
      <Card.Img variant="top" src={pic} />
      <Card.Body>
        <FollowButton />
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {/* TODO ここのbuttonを仕様変更する必要がある */}
        <Button onClick={getUserId} className={id} variant="primary">
          詳しく見る
        </Button>
      </Card.Body>
    </Card>
  ));
}
export default Users;
