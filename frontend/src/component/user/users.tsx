import { useQuery, gql } from "@apollo/client";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { faker } from "@faker-js/faker";
import { FollowButton } from "../button/FollowButton";
import { UserDetailButton } from "../button/UserDetailButton";

function Users(): any {

  const pic = faker.image.avatar();
  const EXCHANGE_RATES = gql`
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

  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  if (loading) return <p>Loading...</p>;
  if (error) return `Error : ${error}`;

  return data.users.map(
    ({ id, name, email, description, createdAt, updatedAt }: any) => (
      <Card style={{ width: "24rem", height: "35rem", float: "left" }} key={id}>
        <Card.Img variant="top" src={pic} />
        <Card.Body>
          <FollowButton />
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          {/* TODO ここのbuttonを仕様変更する必要がある */}
          <Button className={id} variant="primary">
            詳しく見る
          </Button>
        </Card.Body>
      </Card>
    )
  );
}
export default Users;
