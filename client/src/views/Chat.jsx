import React from 'react';
import io from 'socket.io-client'
import { Grid, Row, Col } from "react-flexbox-grid"
import EnterChat from './../components/EnterChat/EnterChat'
import ChatBox from './../components/ChatBox/ChatBox'

const socket = io()

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isLoggedIn: false,
      status: false,
      message: ''
    }
    this.loginHandler = this.loginHandler.bind(this);
    // this.getComments = this.getComments.bind(this);
  }

  componentDidMount() {
    this.setState({
      username: (window.sessionStorage.getItem('USER_NAME'))?window.sessionStorage.getItem('USER_NAME'):'',
      isLoggedIn: (window.sessionStorage.getItem('USER_LOGGED'))?window.sessionStorage.getItem('USER_LOGGED'):false
    })
    if (this.state.isLoggedIn) {
      this.loginHandler();
    }
  }

  loginHandler(){
    e.preventDefault()
    const username = this.state.username

    if (username === '') {
      this.setState({ status: true, message: '*Invalid username!' })
      return
    }

    if (username.match(/\d/)) {
      this.setState({ status: true, message: '*Numbers are not allowed!' })
      return
    }

    this.setState({ username, isLoggedIn: true })
    this.setState({ status: false, message: '' })
    socket.emit('user:connected', { username })
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12}>
          {/*kullanıcı sessiondan okuttur burayı*/}
            {(this.state.isLoggedIn)? <ChatBox user={this.state} />: <div>giriş yap</div>}
          </Col>
        </Row>
      </Grid>
    )
  }
}

export { socket }
