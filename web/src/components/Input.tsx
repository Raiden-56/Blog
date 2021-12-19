import styles from "../styles/components/Input.module.scss";
import React, { useState } from "react";

const Input = ({
  placeholder,
  validation,
  onChange,
  icon,
}: {
  placeholder?: string | undefined;
  validation: (_: string) => boolean;
  onChange: (_: any) => any;
  icon?: string | undefined;
}) => {
  const [isValid, setValid] = useState<boolean>(true);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    /*Handle when validation is false*/
    const isValid = validation(event.target.value);
    setValid(isValid);
    if (!isValid) return;
    onChange(event.target.value);
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        required
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        style={{ outlineWidth: isValid ? 0 : 5 }}
      />
      <div className={styles.icon}>
        <i className={icon} />
      </div>
    </div>
  );
};

export default Input;
