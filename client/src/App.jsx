import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LoginPage from "./components/pages/LoginPage"
import FrontPage from "./components/pages/FrontPage"
import UserRoute from "./components/pageroutes/UserRoute"
import GuestRoute from "./components/pageroutes/GuestRoute"

import SignupPage from "./components/pages/SignupPage";
import NavBar from './components/misc/Navigation';
import NewThreadPage from './components/pages/NewThreadPage';
import ThreadPage from './components/pages/ThreadPage';
import HistoryPage from "./components/pages/HistoryPage";

import About from './components/About/about';
import Faculty from './components/Faculty/faculty'
import Announcement from './components/Announcements/announcement';
import Opportunity from './components/Opportunites/opportunity'
import Society from './components/Society/society';
import MainBody from './components/HomePage/MainBody/mainBody';
import Creators from './components/Creators/creators'

const ForumAndNavbar = () => {
        return(
            <div>
                <NavBar/>
                <FrontPage />
            </div>
        );
}

const App =({location,isAuthenticated}) => (
        <div className="normal-page" style={{marginLeft: "25vw"}}>
            {console.log(location)}
            <GuestRoute location={location} path="/" exact component={MainBody} />
            <GuestRoute location={location} path="/about" exact component={About} />
            <GuestRoute location={location} path="/faculty" exact component={Faculty} />
            <GuestRoute location={location} path="/announcement" exact component={Announcement} />
            <GuestRoute location={location} path="/opportunity" exact component={Opportunity} />
            <GuestRoute location={location} path="/society" exact component={Society} />
            <GuestRoute location={location} path="/creators" exact component={Creators}/>

            <div className="ui container">
                <UserRoute location={location} path="/forum" component={ForumAndNavbar}/>
                <GuestRoute location={location} path="/login" exact component={LoginPage}/>
                <GuestRoute location={location} path="/signup" exact component={SignupPage}/>
                <UserRoute location={location} path="/newthread" exact component={NewThreadPage}/>
                <UserRoute location={location} path="/thread/:id" exact component={ThreadPage} />
                <UserRoute location={location} path="/users/:username" exact component={HistoryPage} />
            </div>
            
        </div> 
);

App.propTypes ={
    location:PropTypes.shape({
        pathname:PropTypes.string.isRequired
    }).isRequired,
    isAuthenticated:PropTypes.bool.isRequired
}
function mapStateToProps(state){
    return{
        isAuthenticated: !!state.user.token
    }

}
export default connect(mapStateToProps)(App);
