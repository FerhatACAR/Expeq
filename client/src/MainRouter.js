import React from 'react'
import {Route, Switch} from 'react-router-dom'
import MainPage from './views/MainPage'
import LoginPage from './views/LoginPage'
import SearchResult from './views/SearchResult'
import SignUp from './views/SignUp'
import UserProfile from './views/UserProfile'
//import EditProfile from './user/EditProfile'
//import PrivateRoute from './auth/PrivateRoute'
import Menu from './components/Menu'

const MainRouter = () => {
    return (<div>
      <Menu/>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route path="/LoginPage" component={LoginPage}/>
        <Route path="/SearchResult/:rfCity/:rfProfession" component={SearchResult}/>
        <Route path="/SignUp" component={SignUp}/>
        <Route path="/UserProfile" component={UserProfile}/>
        {/*<PrivateRoute path="/user/edit/:userId" component={EditProfile}/>*/}
      </Switch>
    </div>)
}

export default MainRouter
