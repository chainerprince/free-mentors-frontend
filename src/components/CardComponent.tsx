import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export interface MentorCardProps {
  image: string;
  title: string;
  description: string;
  actionButtons?: React.ReactNode;
}

const MentorCard: React.FC<MentorCardProps> = ({
  image,
  title,
  description,
  actionButtons,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      {actionButtons && (
        <CardActions>
          {actionButtons}
        </CardActions>
      )}
    </Card>
  );
}

export default MentorCard;
