import { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { useUpdateResumeMutation } from "../../redux/users/usersApi";

export default function RatingStars({ rating = 0, id = 1 }) {
  const [updateResume] = useUpdateResumeMutation();
  const [starsValue, setstarsValue] = useState(rating);

  return (
    <Box>
      <Rating
        name="rating"
        value={starsValue}
        onChange={(event, newValue) => {
          setstarsValue(newValue);
          updateResume({ id, rating: newValue });
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
