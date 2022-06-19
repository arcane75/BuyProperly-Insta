import React, { useState } from "react";
import posts from "../data/posts";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import { useNavigate } from "react-router-dom";
import insta from "../instagram.png";

export const Counter = ({ like }) => {
  const [count, setCount] = useState(0);
  const handleLike = () => {
    setCount(count + 1);
  };

  return (
    <>
      <IconButton onClick={handleLike} aria-label="add to favorites">
        <FavoriteIcon sx={{ color: "red", mr: 1 }} />
        {like + count}
      </IconButton>
    </>
  );
};

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img src={insta} alt="" loading="lazy" height="200px" />
      </Box>
      <Grid container spacing={3} sx={{ mt: 5, mb: 5 }}>
        {posts.map((post) => (
          <>
            <Grid key={post.id} item md={4}>
              <Card sx={{ height: "100%", width: "350px" }}>
                <CardMedia
                  onClick={() => navigate(`/imagedetails/${post.code}`)}
                  component="img"
                  height="250"
                  image={post.display_src}
                  alt={post.caption}
                />
                <CardContent>
                  <Typography variant="body" color="text.primary">
                    {post.caption}
                  </Typography>
                </CardContent>
                <Divider />
                <CardActions disableSpacing>
                  <Counter like={post.likes} />
                  <IconButton
                    onClick={() => navigate(`/imagedetails/${post.code}`)}
                    aria-label="comments"
                  >
                    <MessageOutlinedIcon sx={{ color: "black", mr: 1 }} />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
