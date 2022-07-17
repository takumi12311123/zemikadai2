import { useQuery, gql } from "@apollo/client";

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
    <div key={id}>
      <p>{id}</p>
      <p>{name}</p>
      <p>{email}</p>
      <p>{createdAt}</p>
      <p>{updatedAt}</p>
    </div>
  ));
}
export default Users;
