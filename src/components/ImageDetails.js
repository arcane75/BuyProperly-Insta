import React, { useEffect, useState } from "react";
import comments from "../data/comments";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import posts from "../data/posts";
import { Counter } from "./HomePage";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import insta from "../instagram.png";

const ImageDetails = () => {
  const { id } = useParams();
  const [keyFound, setKeyFound] = useState([]);
  const [name, setName] = useState(null);
  const [comment, setComment] = useState(null);

  let tmpName, tmpComment;

  const onNameChange = (e) => {
    e.preventDefault();
    tmpName = e.target.value;
  };

  const onCommentChange = (e) => {
    e.preventDefault();
    tmpComment = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(tmpName);
    setComment(tmpComment);
  };

  useEffect(() => {
    Object.entries(comments).forEach((entry) => {
      if (id === entry[0]) {
        setKeyFound(entry[1]);
      }
    });
  }, [id]);

  //comment length
  let length;
  for (let key in comments) {
    if (id === key) {
      length = `${comments[key].length}`;
    }
  }

  return (
    <div style={{ margin: "20px 200px", overflowX: "hidden", padding: "20px" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img src={insta} alt="" loading="lazy" height="200px" />
      </Box>
      <Box sx={{ border: "5px solid #F9F9F9" }}>
        <Grid container spacing={3}>
          <Grid md={7}>
            {posts.map((post) =>
              id === post.code ? (
                <Box sx={{ margin: "30px" }}>
                  <img
                    src={post.display_src}
                    alt=" "
                    style={{
                      height: "450px",
                      margin: "15px",
                    }}
                  />
                  <Typography
                    sx={{ marginLeft: "15px" }}
                    variant="body"
                    color="text.primary"
                  >
                    {post.caption}
                  </Typography>

                  <Box>
                    <Counter like={post.likes} />

                    <IconButton aria-label="comments">
                      <MessageOutlinedIcon sx={{ color: "black", mr: 1 }} />{" "}
                      {length}
                    </IconButton>
                  </Box>
                </Box>
              ) : (
                <></>
              )
            )}
          </Grid>

          <Grid md={5} sx={{ mt: 3 }}>
            {keyFound.map((item) => (
              <>
                <div style={{ marginTop: "30px" }}>
                  <span
                    style={{
                      color: "blue",
                      fontWeight: "bold",
                      marginRight: "10px",
                    }}
                  >
                    {item.user}
                  </span>

                  {item.text}
                </div>
                <Divider sx={{ mt: 2 }} />
              </>
            ))}
            <span
              style={{
                color: "blue",
                fontWeight: "bold",
                marginRight: "10px",
              }}
            >
              {name}
            </span>
            {comment}

            {name ? <Divider sx={{ mt: 2 }} /> : <> </>}

            <form onSubmit={handleSubmit}>
              <TextField
                id="standard-basic"
                fullWidth
                required
                label="Author"
                variant="standard"
                onChange={onNameChange}
              />
              <TextField
                id="standard-basic"
                fullWidth
                required
                label="Comment"
                variant="standard"
                onChange={onCommentChange}
              />
              <Button type="submit"></Button>
            </form>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ImageDetails;
