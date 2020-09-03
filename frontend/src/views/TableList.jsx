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

// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
  Input,
  FormGroup,
  Label,
  Button
} from "reactstrap";
import Sidebar from "components/Sidebar/Sidebar";
import axios from 'axios'
import config from "../config"
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";
import { connect } from 'react-redux';

class RegularTables extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      pages: [],
      nextLink: ''
    }
    this.callMore = this.callMore.bind(this);
  }
  
  
  async callMore(){
    const { nextLink } = this.state;
    await this.callFb(nextLink)
  }

  async callFb(url){
    const { pages } = this.state;
    const res = await axios.get(url);
    if(res && res.data){
      for(var page of res.data.data){
        page.toDelete = false;
        pages.push(page);
      }
      this.setState({
        nextLink: res.data.paging.next,
        pages: pages
      })
    }
  }

  async componentWillMount(){
    const { accessToken, id } = this.props.user;
    const url = config.graphApi + `/${id}/likes?summary=true&limit=100&fields=id,name,link&access_token=${accessToken}`;
    await this.callFb(url)
  }

  render() {
    const { pages } = this.state;
    return (
      <>
        <Sidebar {...this.props}/>
        <div className="main-panel" ref={this.mainPanel}>
          <PanelHeader size="sm" />
          <div className="content">
            <Row>
              <Col xs={12}>
                <Card>
                  <CardHeader>
                    <CardTitle tag="h4">Simple Table</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Table responsive>
                      <thead className="text-primary">
                        <tr>
                          <th>Page Name</th>
                          <th>Unlike?</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pages.map((page, key) => 
                          <tr key={key}>
                            <td><a href={page.link}>{page.name}</a></td>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input type="checkbox" />
                                  <span className="form-check-sign" />
                                </Label>
                              </FormGroup>
                            </td>
                          </tr>
                        )}
                        <tr>
                          <td><Button onClick={this.callMore}>Load More</Button></td>
                          <td><Button>Unlike Pages</Button></td>
                        </tr>
                      </tbody>
                    </Table>
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
}))(RegularTables);
