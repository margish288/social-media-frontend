import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import MyPostWidget from "widgets/MyPostWidget";
import PostsWidget from "widgets/PostsWidget";
import FriendListWidget from "widgets/FriendListWidget";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const user = useSelector((state) => state.auth.user.user);

  const { _id, picturePath } = user;

  return (
    <Box>
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box
          flexBasis={isNonMobileScreens ? "70%" : undefined}
          mb={isNonMobileScreens ? "" : ""}
        >
          <MyPostWidget
            isNonMobileScreens={isNonMobileScreens}
            userId={_id}
            flexBasis={"100%"}
            picturePath={picturePath}
          />
          <PostsWidget userId={_id} />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="25%">
            <FriendListWidget userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
