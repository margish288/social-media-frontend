import { useEffect } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import PostWidget from "./PostWidget";
import { fetchPosts, fetchUserPosts } from "store/action/postsAction";

const PostsWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const postsData = useSelector((state) => state.posts);
  const posts = postsData.posts;

  const getPosts = () => {
    dispatch(fetchPosts());
  };

  const getUserPosts = () => {
    dispatch(fetchUserPosts(userId));
  };

  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {!posts.length ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50%",
            color: "gray",
            textAlign: "center",
            fontSize: "1.5rem",
            fontWeight: "500",
            margin: "2rem 0",
          }}
        >
          No Posts yet !
        </Box>
      ) : (
        posts.map(
          ({
            _id,
            userId,
            firstName,
            lastName,
            description,
            location,
            picturePath,
            userPicturePath,
            likes,
            comments,
          }) => (
            <div key={_id}>
              <PostWidget
                key={_id}
                postId={_id}
                postUserId={userId}
                name={`${firstName} ${lastName}`}
                description={description}
                location={location}
                picturePath={picturePath}
                userPicturePath={userPicturePath}
                likes={likes}
                comments={comments}
              />
            </div>
          )
        )
      )}
    </>
  );
};

export default PostsWidget;
