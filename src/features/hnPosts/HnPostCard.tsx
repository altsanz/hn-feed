import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { HnItem } from "../../services/hn/hn.types";
import { useNavigate } from "react-router-dom";

export interface HnPostCardProps {
  post: HnItem;
}

export default function HnPostCard({ post }: HnPostCardProps) {
  const navigate = useNavigate();
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {post.author}
        </Typography>
        <Typography variant="body2">
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate(`/post/${post.objectID}`)}>
          See detail
        </Button>
      </CardActions>
    </Card>
  );
}
