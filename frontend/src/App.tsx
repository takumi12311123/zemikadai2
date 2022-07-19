import "./App.css";
import Users from "./component/user/users";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/client";
import { Header } from "./component/header/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserArticles from "./component/user/UserArticles";

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Users />} />
          <Route path={`/user`} element={<UserArticles />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
