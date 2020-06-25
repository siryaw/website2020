import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0 };
    }

    toggleCatergories() {

        if(this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{minwidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://create-react-app.dev/img/logo-og.png) center / cover'}}>MeetHub</CardTitle>
                        <CardText>
                        Video call application with React & Node.
                        </CardText>
                        <CardActions border>
                            <Button colored >GitHub</Button>
                            <Button colored >Code</Button>
                            <Button colored >Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                {/* Project 2 */}
                <Card shadow={5} style={{minwidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://create-react-app.dev/img/logo-og.png) center / cover'}}>Google Books</CardTitle>
                    <CardText>
                    React-based Google Books Search app
                    </CardText>
                    <CardActions border>
                        <Button colored >GitHub</Button>
                        <Button colored >Code</Button>
                        <Button colored >Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* Project 3 */}
                <Card shadow={5} style={{minwidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://create-react-app.dev/img/logo-og.png) center / cover'}}>Employee Directory</CardTitle>
                    <CardText>
                    Employee directory with React.
                    </CardText>
                    <CardActions border>
                        <Button colored >GitHub</Button>
                        <Button colored >Code</Button>
                        <Button colored >Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>This is Angular</h1></div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>This is VueJS</h1></div>
            )
        } else if (this.state.activeTab ===3) {
            return (
                <div><h1>This is MongoDB</h1></div>
            )
        }
    }
    render() {
        return (
            <div className="catergory-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) =>this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCatergories()}</div>
                        
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Portfolio;