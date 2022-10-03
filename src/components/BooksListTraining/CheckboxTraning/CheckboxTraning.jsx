import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

export default function CheckboxTraning({ id, statusBook }) {
  //   const [value, setValue] = React.useState(false);
  //   console.log("Chackbox:", value);
  return (
    <div>
      <Checkbox
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
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
