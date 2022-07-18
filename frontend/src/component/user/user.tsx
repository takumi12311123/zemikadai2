import { useQuery, gql } from "@apollo/client";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-bootstrap/lib/Navbar";
import { BrowserRouter } from "react-router-dom";

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
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return `Error : ${error}`;

  return data.users.map(
    ({ id, name, email, description, createdAt, updatedAt }: any) => (
      <BrowserRouter>
        <Card
          style={{ width: "25rem", height: "25rem", float: "left" }}
          key={id}
        >
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Button variant="primary" style={{ float: "right" }}>
              follow
            </Button>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            {/* link to でここから個人ページを見れるようにする */}
            <Button variant="primary">詳しく見る</Button>
          </Card.Body>
        </Card>
      </BrowserRouter>
    )
  );
}
export default Users;
