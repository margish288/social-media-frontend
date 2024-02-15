import React from "react";
import { Box } from "@mui/material";
import Navbar from "components/Navbar";
import UserWidget from "widgets/UserWidget";
import { useSelector } from "react-redux";
import ProfilePage from "pages/profilePage";

const SearchPage = () => {
  const { searchResult } = useSelector((state) => state);
  // TODO : ADD a search data to page

  const { user, posts = [] } = searchResult || {};

  return (
    <Box>
      <Box
        width="100%"
        padding="2rem 6%"
        display="flex"
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis="40%">
          <ProfilePage />
        </Box>
        <Box flexBasis="60%">2</Box>
      </Box>
    </Box>
  );
};

export default SearchPage;
