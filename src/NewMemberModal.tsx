import { useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";

import { StyledContainer } from "./styleModal";
import { IMember, IMemberId } from "./interFace/member";
import { addNewMember, updateMemberById } from "./api/member";
import Field from "./components/fields";

interface IActions {
  resetForm: Function
  setValues: Function
}

const NewMember = (props: {
  updateMemberList: Function,
  handleClose: Function,
  open: boolean,
  initials?: IMemberId
}) => {
  const { updateMemberList, open, handleClose, initials } = props;
  const [isShow, setIsShow] = useState<boolean>(open)

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
      if (initials?.member_id) {
        await updateMemberById(initials.member_id, values);
      } else {
        await addNewMember(values);
      }
      actions.setValues(initialValues)
      updateMemberList();
    } catch (error) {
      console.error(error);
    }
  }



  return (
    <StyledContainer
      open={open}
      onTransitionEnd={() => setIsShow(open)}
    >
      <div>
        {isShow || open ?
          <Formik initialValues={initials || initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}>
            {props => (
              <Form>
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
          </Formik> : null}
      </div>
    </StyledContainer>
  );
}

export default NewMember;
