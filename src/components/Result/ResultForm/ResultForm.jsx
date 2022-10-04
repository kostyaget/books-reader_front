import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { useAddResultsMutation } from "../../../redux/users/usersApi";
import { selectCurrentUser } from "../../../redux/auth/auth";

import {
  FormResult,
  InputWrapper,
  Label,
  LabelText,
  Input,
  DateInput,
  ErrorText,
  Button,
} from "./ResultForm.styled";

const schema = yup.object().shape({
  trainingDate: yup
    .date()
    .max(new Date(), "Select valid date")
    .required("Enter a date"),
  pagesAmount: yup
    .number()
    .positive("Enter a whole number between 1 and 1000")
    .integer("Enter a whole number between 1 and 1000")
    .max(999, "Enter a whole number between 1 and 1000")
    .required("Enter a whole number between 1 and 1000"),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={(message) => <ErrorText>{message}</ErrorText>}
    />
  );
};

export default function ResultForm() {
  const [addResult] = useAddResultsMutation();
  const { _id } = useSelector(selectCurrentUser);
  const id = _id;

  const handleSubmit = (values, { resetForm }) => {
    const now = new Date();
    values.trainingDate.setHours(now.getHours());
    values.trainingDate.setMinutes(now.getMinutes());
    values.trainingDate.setSeconds(now.getSeconds());
    resetForm();
    addResult({ id, ...values });
  };

  return (
    <>
      <Formik
        initialValues={{ trainingDate: "", pagesAmount: "" }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormResult autoComplete="off">
          <InputWrapper>
            <Label>
              <LabelText>Date</LabelText>
              <DateInput name="trainingDate" />
              <FormError name="trainingDate" />
            </Label>
            <Label>
              <LabelText>Amount of pages</LabelText>
              <Input type="number" name="pagesAmount" />
              <FormError name="pagesAmount" />
            </Label>
          </InputWrapper>
          <Button type="submit">Add result</Button>
        </FormResult>
      </Formik>
    </>
  );
}
