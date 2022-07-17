import { useQuery, gql } from "@apollo/client";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Users(): any {
  const EXCHANGE_RATES = gql`
    query GetUsers {
      users {
        id
        name
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

  return data.users.map(({ id, name, email, createdAt, updatedAt }: any) => (
    <Card style={{ width: "18rem" }} key={id}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">詳しく見る</Button>
      </Card.Body>
    </Card>
    // <div key={id}>
    //   <p>{id}</p>
    //   <p>{name}</p>
    //   <p>{email}</p>
    //   <p>{createdAt}</p>
    //   <p>{updatedAt}</p>
    // </div>
  ));
}
export default Users;
