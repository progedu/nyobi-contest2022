import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Image, OpenInNew } from '@mui/icons-material';
import { Chip, Link } from '@mui/material';

export default function ContentCard(props) {
  return (
    <Card className='content-card'>
      <CardMedia
        component="img"
        image={props.img_url}
        style={{borderBottom: '1px solid #6bd6fa'}}
      />
      <CardContent>
        <Chip size="small" label={props.label_name} color={props.label_color} style={{marginBottom: 5}} />
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.author}
        </Typography>
      </CardContent>
      <CardActions>
        <Link target="_blank" href={props.website_url}>
          <Button variant="contained" component="label" color="success" style={{whiteSpace: 'nowrap'}}>Webサイト<OpenInNew /></Button>
        </Link>
        <Link target="_blank" href={props.github_url}>
          <Button variant="contained" component="label" color="info" style={{whiteSpace: 'nowrap'}}>
            <img src="./GitHub-Mark-64px.png" height={25} />&nbsp;<img src="./GitHub_Logo_White.png" height={25} /><OpenInNew />
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}