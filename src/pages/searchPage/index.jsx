import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import UserImage from "../../components/UserImage";
import FlexBetween from "../../components/FlexBetween";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const SearchPage = () => {
  const { palette } = useTheme();
  const main = palette.neutral.main;
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const searchResult = useSelector((state) => state.searchResponse);

  if (searchResult.status === "failed" || !searchResult.searchResult) {
    return (
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          color={main}
          variant="h5"
          fontWeight="500"
          sx={{
            "&:hover": {
              color: palette.primary.light,
              cursor: "pointer",
            },
          }}
        >
          NO USER FOUND
        </Typography>
      </Box>
    );
  }

  const user = searchResult?.searchResult?.user;
  const posts = searchResult?.searchResult?.posts;
  const { firstName, lastName, picturePath, friends } = user;

  return (
    <Box
      width="50%"
      padding="2rem 6%"
      display="flex"
      gap="0.5rem"
      justifyContent="space-between"
    >
      <FlexBetween gap="1rem">
        <UserImage image={picturePath} />
        <Box>
          <Typography variant="h4" color={dark} fontWeight="500">
            {firstName} {lastName}
          </Typography>
          <Typography color={medium}>{friends?.length} friends</Typography>
          <Typography color={medium}>{posts.length} Posts</Typography>
        </Box>
        <Box>
          {/* add friend */}
          <Typography
            variant="h5"
            color={main}
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <PersonAddIcon />
          </Typography>
        </Box>
      </FlexBetween>
    </Box>
  );
};

export default SearchPage;
