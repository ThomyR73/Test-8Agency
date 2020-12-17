import React, { useReducer } from "react";
import styles from "../styles/form.module.scss";

const formReducer = (state, action) => {
  switch (action.type) {
    case "updateValue":
      return {
        ...state,
        values: { ...state.values, [action.input]: action.text },
        validation: { ...state.validation, [action.input]: action.validation },
      };
    case "updateBlur":
      return {
        ...state,
        touched: { ...state.touched, [action.input]: true },
      };
    case "showErrors":
      return {
        ...state,
        touched: {
          name: true,
          email: true,
          subject: true,
          message: true,
        },
      };
    case "reset":
      return intitialValue;
  }
};

const intitialValue = {
  values: {
    name: "",
    email: "",
    subject: "",
    message: "",
  },
  validation: {
    name: false,
    email: false,
    subject: false,
    message: false,
  },
  touched: {
    name: false,
    email: false,
    subject: false,
    message: false,
  },
};

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Form = () => {
  const [formState, dispatchFormState] = useReducer(formReducer, intitialValue);

  const handleChange = (text, input) => {
    let validation = true;
    if (text.length === 0) {
      validation = false;
    }
    if (input === "email" && !emailRegex.test(text.toLowerCase())) {
      validation = false;
    }
    dispatchFormState({ type: "updateValue", input, text, validation });
  };

  const handleBlur = (input) => {
    dispatchFormState({ type: "updateBlur", input });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formState.validation.name ||
      !formState.validation.email ||
      !formState.validation.subject ||
      !formState.validation.message
    ) {
      dispatchFormState({ type: "showErrors" });
      return;
    }
    dispatchFormState({ type: "reset" });
  };

  return (
    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
      <input
        placeholder="Name"
        type="text"
        id="name"
        name="name"
        onChange={(e) => handleChange(e.target.value, "name")}
        onBlur={() => handleBlur("name")}
        value={formState.values.name}
      />
      <label htmlFor="name">Name</label>
      <br />
      {!formState.validation.name && formState.touched.name && (
        <span>Please, enter a valid name</span>
      )}
      <input
        placeholder="E-mail"
        type="email"
        name="email"
        id="email"
        onChange={(e) => handleChange(e.target.value, "email")}
        onBlur={() => handleBlur("email")}
        value={formState.values.email}
      />
      <label htmlFor="email">E-mail</label>
      <br />
      {!formState.validation.email && formState.touched.email && (
        <span>Please, enter a valid email</span>
      )}
      <input
        placeholder="Subject"
        type="text"
        name="subject"
        id="subject"
        onChange={(e) => handleChange(e.target.value, "subject")}
        onBlur={() => handleBlur("subject")}
        value={formState.values.subject}
      />
      <label htmlFor="subject">Subject</label>
      <br />
      {!formState.validation.subject && formState.touched.subject && (
        <span>Please, enter a valid subject</span>
      )}
      <textarea
        placeholder="Message"
        name="message"
        id="message"
        onChange={(e) => handleChange(e.target.value, "message")}
        onBlur={() => handleBlur("message")}
        value={formState.values.message}
      ></textarea>
      <label htmlFor="message">Message</label>
      <br />
      {!formState.validation.message && formState.touched.message && (
        <span>Please, enter a valid message</span>
      )}
      <input type="submit" value="SEND MESSAGE" />
    </form>
  );
};

export default Form;
