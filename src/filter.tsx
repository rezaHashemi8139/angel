
import { Formik, Form } from "formik";
import { IMember } from "./interFace/member";
import Field from "./components/fields";
import { StyledContainer, StyledButton } from "./styleFilter";

const NewMember = (props: {
  updateMemberList: Function,
  list: Array<IMember>,
}) => {
  const { updateMemberList, list } = props;

  const initialValues: IMember = {
    email: "",
    first_name: "",
    last_name: "",
    phone: ""
  }

  const handleSubmit = async (values: IMember) => {
    const newList = list.filter(x => x.email.indexOf(values.email) > -1 &&
      x.first_name.indexOf(values.first_name) > -1 &&
      x.last_name.indexOf(values.last_name) > -1 &&
      x.phone.indexOf(values.phone) > -1
    );
    updateMemberList(newList);
  }

  return (
    <StyledContainer>
      <Formik initialValues={initialValues}
        onSubmit={handleSubmit}>
        {props => (
          <Form>
            <Field {...props} name="first_name" placeholder="first name" />
            <Field {...props} name="last_name" placeholder="last name" />
            <Field {...props} name="phone" placeholder="phone number" />
            <Field {...props} name="email" placeholder="email" />
            <StyledButton type="submit">apply filter</StyledButton>
            <StyledButton onClick={() => {
              props.resetForm();
              updateMemberList(list);
            }}
              className="cancel" type="button">remove filter</StyledButton>
          </Form>
        )}
      </Formik>
    </StyledContainer>
  );
}

export default NewMember;
