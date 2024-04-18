import {
  EditOutlined,
  DeleteOutlined,
  ImageOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Typography,
  InputBase,
  useTheme,
  Button,
  IconButton,
} from "@mui/material";
import { toast } from "react-toastify";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FlexBetween from "components/FlexBetween";
import Dropzone from "react-dropzone";
import UserImage from "components/UserImage";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "store/action/postsAction";
import DateTimePicker from "components/DatePicker";

const MyPostWidget = ({ userId, picturePath }) => {
  const dispatch = useDispatch();

  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [toggleSchedulePostModal, setToggleSchedulePostModal] = useState(false);
  const [post, setPost] = useState("");
  const { palette } = useTheme();
  const [timeValue, onTimeChange] = useState(null);
  const mediumMain = palette.neutral.mediumMain;
  const medium = palette.neutral.medium;

  const handlePost = async () => {
    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("description", post);
    if (image) {
      formData.append("picture", image);
      formData.append("picturePath", image.name);
    }
    if (timeValue !== null) {
      formData.append("scheduleTime", timeValue);
      formData.append("isSchedulePost", true);
    } else {
      formData.append("isSchedulePost", false);
    }
    dispatch(createPost(formData));

    !timeValue
      ? toast("Post created successfully")
      : toast("Post scheduled successfully");

    setImage(null);
    setPost("");
    setToggleSchedulePostModal(false);
    onTimeChange(null);
  };

  const toggleScheduleMenu = () => {
    setToggleSchedulePostModal(!toggleSchedulePostModal);
  };

  return (
    <WidgetWrapper mb={"2rem"}>
      <FlexBetween gap="1.5rem">
        <UserImage image={picturePath} size="40px" />
        <InputBase
          placeholder="What's on your mind..."
          onChange={(e) => setPost(e.target.value)}
          value={post}
          sx={{
            height: "100px",
            width: "100%",
            backgroundColor: palette.neutral.light,
            borderRadius: "12px",
            padding: "0.5rem 1rem",
          }}
        />
      </FlexBetween>
      {isImage && (
        <Box
          border={`1px solid ${medium}`}
          borderRadius="5px"
          mt="1rem"
          p="1rem"
        >
          <Dropzone
            acceptedFiles=".jpg,.jpeg,.png"
            multiple={false}
            onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
          >
            {({ getRootProps, getInputProps }) => (
              <FlexBetween>
                <Box
                  {...getRootProps()}
                  border={`2px dashed ${palette.primary.main}`}
                  p="1rem"
                  width="100%"
                  sx={{ "&:hover": { cursor: "pointer" } }}
                >
                  <input {...getInputProps()} />
                  {!image ? (
                    <p>Add Image Here</p>
                  ) : (
                    <FlexBetween>
                      <Typography>{image.name}</Typography>
                      <EditOutlined />
                    </FlexBetween>
                  )}
                </Box>
                {image && (
                  <IconButton
                    onClick={() => setImage(null)}
                    sx={{ width: "15%" }}
                  >
                    <DeleteOutlined />
                  </IconButton>
                )}
              </FlexBetween>
            )}
          </Dropzone>
        </Box>
      )}

      <Divider sx={{ margin: "1.25rem 0" }} />

      <FlexBetween>
        <FlexBetween gap="0.25rem" onClick={() => setIsImage(!isImage)}>
          <ImageOutlined sx={{ color: mediumMain }} />
          <Typography
            color={mediumMain}
            sx={{ "&:hover": { cursor: "pointer", color: medium } }}
          >
            Image
          </Typography>
        </FlexBetween>

        {/* {isNonMobileScreens ? (
          <>
            <FlexBetween gap="0.25rem">
              <GifBoxOutlined sx={{ color: mediumMain }} />
              <Typography color={mediumMain}>Clip</Typography>
            </FlexBetween>

            <FlexBetween gap="0.25rem">
              <AttachFileOutlined sx={{ color: mediumMain }} />
              <Typography color={mediumMain}>Attachment</Typography>
            </FlexBetween>

            <FlexBetween gap="0.25rem">
              <MicOutlined sx={{ color: mediumMain }} />
              <Typography color={mediumMain}>Audio</Typography>
            </FlexBetween>
          </>
        ) : (
          <FlexBetween gap="0.25rem">
            <MoreHorizOutlined sx={{ color: mediumMain }} />
          </FlexBetween>
        )} */}

        <Button
          disabled={!post}
          onClick={toggleScheduleMenu}
          sx={{
            color: palette.background.alt,
            backgroundColor: palette.primary.main,
            borderRadius: "3rem",
            cursor: "pointer",
          }}
        >
          Schedule Time
        </Button>

        <Button
          disabled={!post}
          onClick={handlePost}
          sx={{
            color: palette.background.alt,
            backgroundColor: palette.primary.main,
            borderRadius: "3rem",
            cursor: "pointer",
          }}
        >
          {post && timeValue && <AccessTimeIcon />}
          <Typography
            sx={{
              marginLeft: "0.1rem",
            }}
          >
            POST
          </Typography>
        </Button>
      </FlexBetween>
      <Box gap="1rem" textAlign={"center"} m="0.5rem">
        {toggleSchedulePostModal ? (
          <>
            <DateTimePicker
              onChange={onTimeChange}
              value={timeValue}
              toggleScheduleMenu={toggleScheduleMenu}
            />
          </>
        ) : null}
      </Box>
    </WidgetWrapper>
  );
};

export default MyPostWidget;
