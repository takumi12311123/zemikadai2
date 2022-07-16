import "./App.css";
import Users from "./component/user/user";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Users />
      </div>
    </ApolloProvider>
  );
}

export default App;
