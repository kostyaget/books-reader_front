import { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function RatingStars({ rating = 0, id = 1 }) {
  const [value, setValue] = useState(rating);

  return (
    <Box>
      <Rating
        name="rating"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        precision={1}
        size="small"
        sx={{
          "& .MuiRating-iconFilled": {
            color: "#FF6B08",
          },
          "& .MuiRating-iconHover": {
            color: "#FF6B08",
          },
          "& .MuiRating-iconEmpty": {
            color: "#FF6B08",
          },
        }}
      />
    </Box>
  );
}
