import { useQuery, gql } from "@apollo/client";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import pic from "/home/takuaka/zemikadai2/frontend/src/component/images/user.png"

function Users(): any {
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
          <Button variant="primary" style={{ float: "right" }}>
            follow
          </Button>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">詳しく見る</Button>
        </Card.Body>
      </Card>
    )
  );
}
export default Users;
