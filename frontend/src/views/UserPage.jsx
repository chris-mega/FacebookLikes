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
  render() {
    const { name, email } = this.props.user;
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
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="avatar border-gray"
                          src={require("assets/img/mike.jpg")}
                        />
                        <h5 className="title">{name}</h5>
                      </a>
                      <p className="description">michael24</p>
                    </div>
                    <p className="description text-center">
                      {email}
                    </p>
                  </CardBody>
                  <hr />
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
