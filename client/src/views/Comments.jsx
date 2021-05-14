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
import SearchIcon from '@material-ui/icons/Search';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Link } from 'react-router-dom';
import { Comment } from './../components/CommentCard';
const axios = require('axios');

export default class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      isSuccesful: '0'
    }
    this.commentHandler = this.commentHandler.bind(this);
    this.getComments = this.getComments.bind(this);
  }

  componentDidMount() {
    this.getComments();
  }

  getComments() {
    let result;
    let params = {
      commentedUserId: this.props.userInfo[0]._id
    };

    axios.get(
      'http://localhost:4000/api/User/GetComments', {
        params: params
      }
    ).then((response) => {
      this.setState({comments: response.data, isSuccesful: '1'});
    }).catch((error) => {
      console.log(error);
      this.setState({isSuccesful: '0'})
    });
  };

  commentHandler(e) {
    e.preventDefault();
    let result;
    let params = {
      comment: document.getElementById("commentInput").value,
      commentedUserId: this.props.userInfo[0]._id,
      commenterUserId: window.sessionStorage.getItem("USER_ID")
    };

    axios.post(
      'http://localhost:4000/api/User/UserComment', {
        params: params
      }
    ).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error);
    });
  };

  render() {
    return (
      (this.state.isSuccesful == '1')?
      <div className="Comments">
        <Grid container spacing={3} className="CommentArea">
          <Grid item xs={12} className="CommentList">
            {this.state.comments.map((comment) => <Comment comment = {comment} />)}
          </Grid>
          <Grid item xs={12} className="CommentEnter">
            <Grid container spacing={3}>
              <Grid item xs={8}>
                <TextField
                  id="commentInput"
                  className="CommentTextArea"
                  label="Mesajınızı Yazın"
                  placeholder="Placeholder"
                  multiline
                  variant="filled"
                  rows={4}
                />
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  className="Buttons"
                  endIcon={<SearchIcon className="Icon" />}
                  onClick = {this.commentHandler}
                >
                  Yorum Yap
                 </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>:<div></div>
    );
  }
}
