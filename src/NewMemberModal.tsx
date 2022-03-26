import * as Yup from "yup";
import { Formik, Form, FastField } from "formik";
import { StyledContainer } from "./styleModal";
import { IMember } from "./interFace/member";
import { addNewMember } from "./api/member";
import Field from "./components/fields";

interface IActions {
  resetForm: Function
}

const NewMember = (props: {
  updateMemberList: Function,
  handleClose: Function,
  open: boolean,
  initials?: IMember
}) => {
  const { updateMemberList, open, handleClose, initials } = props;

  const initialValues: IMember = {
    email: "",
    first_name: "",
    last_name: "",
    phone: ""
  }

  const schema = Yup.object().shape({
    email: Yup.string().required().email(),
    first_name: Yup.string().required().min(3),
    last_name: Yup.string().required().min(3),
    phone: Yup.number().required()
  })

  const handleSubmit = async (values: IMember, actions: IActions) => {
    try {
      await addNewMember(values);
      actions.resetForm()
      updateMemberList();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <StyledContainer open={open} >
      <div>
        <Formik initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}>
          {props => (
            <Form>
              {initials ? props.setValues(initials) : null}
              <i className="fa fa-close" onClick={() => {
                handleClose()
                props.resetForm()
              }} />
              <Field {...props} name="first_name" placeholder="first name" />
              <Field {...props} name="last_name" placeholder="last name" />
              <Field {...props} name="phone" placeholder="phone number" />
              <Field {...props} name="email" placeholder="email" />
              <button type="submit">submit</button>
              <button onClick={() => {
                handleClose()
                props.resetForm()
              }} className="cancel" type="button">cancel</button>
            </Form>
          )}
        </Formik>
      </div>
    </StyledContainer>
  );
}

export default NewMember;
