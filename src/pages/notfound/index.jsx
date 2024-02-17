import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Social App
        </Typography>
      </Box>

      <Box
        width="100%"
        height={"90vh"}
        backgroundColor={theme.palette.background.default}
        p="1rem 6%"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        textAlign="center"
      >
        <Typography fontWeight="500" variant="h4" sx={{ mb: "1.5rem" }}>
          404 Not Found
        </Typography>
        <Typography fontWeight="500" variant="h4" sx={{ mb: "1.5rem" }}>
          The page you are looking for does not exist.
        </Typography>

        <FlexBetween>
          <Typography
            fontWeight="bold"
            fontSize="clamp(1rem, 2rem, 2.25rem)"
            color="primary"
            onClick={() => navigate("/home")}
            sx={{
              "&:hover": {
                color: theme.palette.primary.light.primaryLight,
                cursor: "pointer",
              },
            }}
          >
            Go To Home
          </Typography>
        </FlexBetween>
      </Box>
    </Box>
  );
};

export default NotFound;
