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
    <div className='award-content-card'>
      <img
        className="header"
        src={props.img_url}
        style={{borderBottom: '1px solid #6bd6fa'}}
      />
      <Typography gutterBottom variant="h5" component="div">
        {props.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {props.author}
      </Typography>
      <Link target="_blank" href={props.website_url}>
        <Button variant="contained" component="label" color="success" style={{whiteSpace: 'nowrap'}}>Webサイト<OpenInNew /></Button>
      </Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link target="_blank" href={props.github_url}>
        <Button variant="contained" component="label" color="info" style={{whiteSpace: 'nowrap'}}>
          <img src="./GitHub-Mark-64px.png" height={25} />&nbsp;<img src="./GitHub_Logo_White.png" height={25} /><OpenInNew />
        </Button>
      </Link>
    </div>
  );
}