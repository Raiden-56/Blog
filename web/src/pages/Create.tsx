import { useState } from "react";
import { Input, Markdown, Button } from "../components";
import styles from "../styles/pages/Creation.module.scss";

const Create = () => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState("");

  return (
    <div className={styles.container}>
      <Input
        {...{
          placeholder: "Title",
          validation: () => true,
          onChange: setTitle,
          icon: "fas fa-heading",
        }}
      />
      <Markdown />
      <Button text="Create Post" onClick={() => null} />
    </div>
  );
};

export default Create;
