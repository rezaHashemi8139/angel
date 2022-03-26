
import { FastField, FormikErrors, FormikTouched } from "formik";
import { IMember } from "../interFace/member";
import { StyledFieldContainer } from "./styleFields";

const Field = (props: {
  errors: FormikErrors<IMember>,
  touched: FormikTouched<IMember>,
  name: keyof IMember,
  placeholder: string
}) => {

  const { name, touched, placeholder, errors } = props
  return (
    <StyledFieldContainer>
      <label>{placeholder}</label>
      <FastField
        className={
          touched[name]
            ? errors[name]
              ? "error"
              : "success"
            : ""
        }
        name={name}
        placeholder={placeholder}
      />
      {touched[name] && errors[name] ? (
        <span>{errors[name]}</span>
      ) : null}

    </StyledFieldContainer>
  );
};

export default Field;
