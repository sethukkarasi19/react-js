import React, { Component } from "react";
import axios from 'axios';
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Logo from "./logo.png";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            userdetails: [], 
        };
    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    componentDidMount() {
        const { user } = this.props.auth;
        axios.get('http://localhost:4000/user/'+ user.id)
             .then(response => {
                 this.setState({userdetails: response.data});
             })
             .catch(function(error) {
                 console.log(error);
             })
    }

    render() {
        const { user } = this.props.auth;
        let UserOptions;
        if(this.state.userdetails.role === "applicant")
        {
            UserOptions = 
            <ul> 
                <br></br>
        <br></br>
                 <center><img src="https://www.federalbank.co.in/image/journal/article?img_id=65100795&t=1633947402386&fileName=22927570" width="1000"></img></center>
                 <br></br>
                 <br></br>
<div class="container">
  <div class="row">
    <div class="col-sm">
    <img src="https://www.superprocure.com/wp-content/uploads/2021/11/Group-33@2x.png" width="500" height="300"></img><br></br>
    <center><a href="/jobsList">View Jobs</a></center>
    </div>
    <div class="col-sm">
    <img src="https://static1.shine.com/l/m/images/blog/job-application_letter.png" width="500" height="300"></img><br></br>
      <center><a href="/myApplications">My Applications</a></center>
    </div>
  </div>
  <br></br>
    <br></br>
    <br></br>
<div className="container">
                                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="work-process">
                        <center><img src="https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png" width="70" height="70"></img></center>
                            <center><h4>Create an Account</h4>
                            <p>Post a job to tell us about your project. We'll quickly match you with the right freelancers
                                find place best.</p></center>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="work-process step-2">
                        <center><img src="https://cdn-icons-png.flaticon.com/512/3917/3917754.png" width="50" height="50"></img></center><br></br>
                            <center><h4>Search Jobs</h4>
                            <p>Post a job to tell us about your project. We'll quickly match you with the right freelancers
                                find place best.</p></center>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="work-process step-3">
                        <center><img src="https://www.pngfind.com/pngs/m/438-4383390_apply-icon-png-apply-for-leave-icon-transparent.png" width="50" height="50"></img></center><br></br>
                            <center><h4>Apply</h4>
                            <p>Post a job to tell us about your project. We'll quickly match you with the right freelancers
                                find place best.</p></center>
                        </div>
                    </div>
                </div>
                                    </div>
                                    <br></br>
<br></br>
                                    <div class="col-sm">
    <center><img src={require('./logo.png')} height="500" width={1100}/><br></br></center>
      <center><a href="http://localhost/oph/?page=my_transactions">Payment</a></center>
    </div>
</div>
            </ul>
        }
        else if(this.state.userdetails.role === "recruiter")
        {
            UserOptions = 
            <ul>
                <center><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx_jIjKyFU-QuJaYVCPA-GX7YkNH3yumgUBQ&usqp=CAU" width="1000" ></img></center>
                <br></br>
                <br></br>
  <div class="container">
  <div class="row">
    <div class="col-sm">
    <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202205/job_1200x768.jpeg?VersionId=T_LbEbcsxeruhC02vZ5XPe8rT_LtAUkF&size=690:388" width="300" height="200"></img><br></br>
    <center><a href="/addJob">Add Job</a><br></br></center>
    </div>
    <div class="col-sm">
    <img src="https://reviewed-com-res.cloudinary.com/image/fetch/s--LRjOvULS--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1636655501000/Abscent84.png" width="300" height="200"></img><br></br>
     <center><a href="/viewMyActiveJobs">My Job Listings</a><br></br></center>
    </div>
    <div class="col-sm">
    <img src="https://y26uq11r8xr1zyp0d3inciqv-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/32-1-1024x597.jpg" width="300" height="200"></img><br></br>
      <center><a href="/employees">Candidates</a><br></br></center>
    </div>
    <div class="col-sm">
    <br></br>
    <br></br>
    <center><img src="https://www.careeraddict.com/uploads/article/58639/illustration-man-interview-panel.jpg" width="300" height="200"></img><br></br>
      <a href="http://localhost/recuriter/">interview</a><br></br></center>
    </div>
  </div>
</div>
            </ul>
        }
                    return (
            <div style={{ height: "75vh" }} className="container valign-wrapper m-5">
                <center><img src="https://pulsehrm.com/wp-content/uploads/2020/10/Job-Portal-Software-2-2.png" ></img></center>
                <div className="row">
                    <div className="col s12 center-align">
                        <Card style={{ width: '117%' }}>
                            <Card.Header>
                                <h4><b>Hey {user.name.split(" ")[0]} !</b></h4>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    <p className="flow-text grey-text text-darken-1">
                                        welcome!
                                    You are logged into the {" "}
                                    <span style={{ fontFamily: "monospace" }}><b>JobsPlanet</b></span>
                                    </p>
                                    <br></br>
                                    <br></br>
                                </Card.Title>
                                <Card.Text>
                                    {UserOptions}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br></br>
                        <button
                            style={{
                            width: "150px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px",
                            marginTop: "1rem"
                            }}
                            onClick={this.onLogoutClick}
                            className="btn btn-primary btn-large waves-effect waves-light hoverable blue accent-3"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        );
        
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);
