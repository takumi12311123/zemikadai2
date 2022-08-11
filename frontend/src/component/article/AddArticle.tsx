import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const CREATE_ARTICLE = gql`
  mutation CreateMutation($title: String!, $detail: String!) {
    createArticle(createArticleInput: { title: $title, detail: $detail }) {
      id
      title
      detail
    }
  }
`;

// これなら動いているから、ふつうにデータ渡せてないんだと思う
// inputから渡す方法模索すべし

const AddArticle = () => {
  const [formState, setFormState] = useState({
    title: "",
    detail: "",
  });

  const [createArticle] = useMutation(CREATE_ARTICLE, {
    variables: {
      title: formState.title,
      detail: formState.detail,
    },
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createArticle();
        }}
      >
        <div>
          <input
            value={formState.title}
            onChange={(e) =>
              setFormState({
                ...formState,
                title: e.target.value,
              })
            }
            style={{
              width: "50%",
              alignItems: "flex-end",
              padding: "10px 10px",
            }}
            type="text"
            placeholder="A description for the link"
          ></input>
          <input
            value={formState.detail}
            onChange={(e) =>
              setFormState({
                ...formState,
                detail: e.target.value,
              })
            }
            type="text"
            placeholder="The URL for the link"
            style={{
              width: "50%",
              alignItems: "flex-start",
              padding: "10px 10px",
            }}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddArticle;
