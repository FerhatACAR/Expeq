import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Link } from 'react-router-dom';
import { Comment } from './../components/CommentCard';
import Macmiller from './../assets/images/Mac-Miller-press-by-G-L-Askew-II-billboard-1548-compressed.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Comments() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="">
      <Grid container spacing={3}>
        <Grid item xs={12} className="CardList">
          <Comment/>
          <Comment/>
          <Comment/>
        </Grid>
        <Grid item xs={12} className="CardList">
          <form className={classes.root} noValidate autoComplete="off">
            <div>
              <TextField
                id="filled-textarea"
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline
                variant="filled"
              />
            </div>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
