import "./App.css";
import Users from "./component/user/user";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/client";
import { Header } from "./component/header/header";

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <Users />
      </div>
    </ApolloProvider>
  );
}

export default App;
