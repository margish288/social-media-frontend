import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "store/slice";
import PostWidget from "./PostWidget";
import { API_URL } from "config";
import { fetchPosts } from "store/action/postsAction";

const PostsWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const postsData = useSelector((state) => state.posts);
  const authUser = useSelector((state) => state.auth);
  const { token } = authUser.user;
  const posts = postsData.posts;

  const getPosts = () => {
    dispatch(fetchPosts());
  };

  const getUserPosts = async () => {
    const response = await fetch(`${API_URL}/posts/${userId}/posts`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
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
      {posts.map(
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
          <>
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
          </>
        )
      )}
    </>
  );
};

export default PostsWidget;
