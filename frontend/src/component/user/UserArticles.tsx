import { useQuery, gql } from "@apollo/client";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import pic from "/home/takuaka/zemikadai2/frontend/src/component/images/user.png";

function UserArticles(): any {
  const EXCHANGE_RATES = gql`
    query articlesByUser {
      articlesByUser {
        id
        title
        detail
        createdAt
        updatedAt
      }
    }
  `;
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  if (loading) return <p>Loading...</p>;
  if (error) return `Error : ${error}`;

  return data.articlesByUser.map(
    ({ id, title, detail, createdAt, updatedAt }: any) => (
      <Card style={{ width: "25%", float: "left" }} key={id}>
        <Card.Img variant="top" src={pic} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{detail}</Card.Text>
          <Button style={{ float: "right" }}>いいね!</Button>
          <Card.Text>{createdAt}</Card.Text>
        </Card.Body>
      </Card>
    )
  );
}
export default UserArticles;
