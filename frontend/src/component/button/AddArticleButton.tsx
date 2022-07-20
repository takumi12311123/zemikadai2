import React from "react";
import { Button } from "react-bootstrap";

const AddArticleButton = () => {
  return (
    <Button
      href={`/article/create`}
      style={{
        fontSize: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        borderRadius: "50px",
        width: "100px",
        height: "100px",
        position: "fixed",
        right: "20px",
        bottom: "10px",
      }}
    >
      +
    </Button>
  );
};

export default AddArticleButton;
