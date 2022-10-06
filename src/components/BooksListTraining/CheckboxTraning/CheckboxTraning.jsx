import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { useUpdateStatusMutation } from "../../../redux/users/usersApi";
import { useDeleteTrainingBookMutation } from "../../../redux/trainings/trainingsApi";

export default function CheckboxTraning({ id, statusBook, idTraning }) {
  const [updateStatus] = useUpdateStatusMutation();
  const [deleteBook] = useDeleteTrainingBookMutation();
  //   const [value, setValue] = React.useState(false);
  //   console.log("Chackbox:", value);
  // console.log(updateStatus);
  const newStatus = {
    id,
    status: "completed",
  };
  return (
    <div>
      <Checkbox
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
        onChange={() => {
          updateStatus(newStatus);
          deleteBook(idTraning);
        }}
        size="small"
        sx={{
          "&.Mui-checked": {
            color: "#FF6B08",
          },
          "&.MuiCheckbox-root": {
            padding: "0",
          },
        }}
      />
    </div>
  );
}
