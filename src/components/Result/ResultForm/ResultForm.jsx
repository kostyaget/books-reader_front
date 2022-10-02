import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
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
  date: yup
    .date()
    .max(new Date(), "Select valid date")
    .required("Enter a date"),
  page: yup
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
  const handleSubmit = (values, { resetForm }) => {
    const now = new Date();
    values.date.setHours(now.getHours());
    values.date.setMinutes(now.getMinutes());
    values.date.setSeconds(now.getSeconds());
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ date: "", page: "" }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormResult autoComplete="off">
        <InputWrapper>
          <Label>
            <LabelText>Date</LabelText>
            <DateInput name="date" />
            <FormError name="date" />
          </Label>
          <Label>
            <LabelText>Amount of pages</LabelText>
            <Input type="number" name="page" />
            <FormError name="page" />
          </Label>
        </InputWrapper>
        <Button type="submit">Add result</Button>
      </FormResult>
    </Formik>
  );
}
