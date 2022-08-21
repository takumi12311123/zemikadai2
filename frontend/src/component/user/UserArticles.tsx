import { gql, useQuery } from "@apollo/client";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Error } from "../Error";
import { Loading } from "../Loading";
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
  if (loading) return <Loading />;
  if (error) return <Error />;

  function articleId(e: any) {
    console.log(e.target.className);
    return;
  }

  // これのeにidを押したボタンのやつ格納できる
  // onClickで、これを発火させる

  return data.articlesByUser.map(
    ({ id, title, detail, createdAt, updatedAt }: any) => (
      <Card style={{ width: "25%", float: "left" }} key={id}>
        <Card.Img variant="top" src={pic} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{detail}</Card.Text>
          <Button style={{ float: "right" }} className={id}>
            いいね!
          </Button>
          <Card.Text>{createdAt}</Card.Text>
        </Card.Body>
      </Card>
    )
  );
}
export default UserArticles;
