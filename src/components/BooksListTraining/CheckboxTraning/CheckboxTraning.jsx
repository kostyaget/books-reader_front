import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { useUpdateStatusMutation } from "../../../redux/users/usersApi";
import { useUpdateTrainingStatusMutation } from "../../../redux/trainings/trainingsApi";

export default function CheckboxTraning({
  id,
  statusBook,
  idTraning,
  isAlready,
}) {
  const [updateStatus] = useUpdateStatusMutation();
  const [updateTrainingStatus] = useUpdateTrainingStatusMutation();

  let statusLoad = false;
  if (statusBook === "completed") {
    statusLoad = true;
  }
  if (statusBook === "inprogress") {
    statusLoad = false;
  }
  const [value, setValue] = React.useState(statusLoad);

  const statusCompleted = {
    id,
    status: "completed",
  };
  const statusInprogress = {
    id,
    status: "inprogress",
  };
  const statusTrainingA = {
    id: idTraning,
    status: "active",
  };
  return (
    <div>
      <Checkbox
        checked={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          isAlready(newValue);
          if (newValue) {
            updateStatus(statusCompleted);
            updateTrainingStatus(statusTrainingA);
          }
          if (!newValue) {
            updateStatus(statusInprogress);
            updateTrainingStatus(statusTrainingA);
          }
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
