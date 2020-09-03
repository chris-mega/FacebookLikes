/*!

=========================================================
* Now UI Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { connect } from 'react-redux';
import axios from 'axios';
import config from "../config"
// reactstrap components
import {
  Card,
  CardBody,
  Row,
  Col
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";
import Sidebar from "components/Sidebar/Sidebar";

class User extends React.Component {
  state = {
    pic: null
  }
  async componentWillMount(){
    const { accessToken, id } = this.props.user;
    const url = config.graphApi + `/${id}/picture?type=large&access_token=${accessToken}`;
    const res = await axios.get(url);
    this.setState({pic: res.request.responseURL})
  }

  render() {
    const { name, email } = this.props.user;
    const { pic } = this.state;
    return (
      <>
        <Sidebar {...this.props}/>
        <div className="main-panel" ref={this.mainPanel}>
          <PanelHeader size="sm" />
          <div className="content">
            <Row>        
              <Col >
                <Card className="card-user">
                  <CardBody>
                    <div className="author">
                      <div>
                        <img
                          alt="profile picture"
                          className="avatar border-gray"
                          src={pic}
                        />
                        <h5 className="title">{name}</h5>
                      </div>
                      <p className="description">{email}</p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
  }
}

export default connect((state) => ({
  user: state.authReducer.user
}))(User);
