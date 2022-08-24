import { gql } from "@apollo/client";

export const UserDetailButton = () => {
  function getUserDetail(userId: string): any {
    gql``;
    // userDetailを取得するgqlをここに置く
    // どうやって、userIdを取得するか考える
    // userIdをkeyに置きたい
    // この問題を送った側で処理するようになるかも
    return;
  }

  return <div onClick={getUserDetail("user-id-1")}>UserDetailButton</div>;
};
