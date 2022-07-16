import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    // ここのURLを自分のbackendのURLに変える
    // ちなみにgraphqlに接続
    uri: "http://localhost:3000/graphql",
  }),
});
