import { Box, Typography, useTheme, Divider } from "@mui/material";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriends } from "store/action/friendsAction";

const FriendListWidget = ({ userId }) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const friendData = useSelector((state) => state.friends);
  const friends = friendData?.friends || []; // TODO: fix this

  const getFriendsList = () => {
    dispatch(getFriends(userId));
  };

  useEffect(() => {
    getFriendsList();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (friendData.isLoading) {
    return <WidgetWrapper>Loading...</WidgetWrapper>;
  }

  return (
    <WidgetWrapper>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Friend List
      </Typography>
      <Divider sx={{ margin: "1rem 0" }} />
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {!friends.length ? (
          <Typography
            color={palette.neutral.dark}
            variant="h5"
            fontWeight="500"
            sx={{ mb: "1.5rem" }}
          >
            No Friends
          </Typography>
        ) : (
          friends.map((friend) => (
            <Friend
              key={friend._id}
              friendId={friend._id}
              name={`${friend.firstName} ${friend.lastName}`}
              subtitle={friend.occupation}
              userPicturePath={friend.picturePath}
            />
          ))
        )}
      </Box>
    </WidgetWrapper>
  );
};

export default FriendListWidget;
