import "./App.css";
import Users from "./component/user/users";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/client";
import { Header } from "./component/header/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserArticles from "./component/user/UserArticles";
import AddArticlePage from "./component/article/AddArticle";
import AddArticle from "./component/article/AddArticle";
import AddArticleButton from "./component/button/AddArticleButton";

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Users />} />
          <Route path={`/user`} element={<UserArticles />} />
          <Route path={`/article/create`} element={<AddArticle />} />
        </Routes>
        <AddArticleButton />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
