import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={12}>
                        <h2>Samuel J Appiahene</h2>
                        <img
                        src="samuel1.png"
                        alt="avatar"
                        style={{height: '250px'}}
                        />
                        <List>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '20px'}}>
                                    <i className= "fa fa-phone-square" aria-hidden="true"></i>
                                    (407)-326-6522
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{ fontSize: '20px'}}>
                                    <i className= "fa fa-envelope" aria-hidden="true"></i>
                                    samappjnr@aol.com
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{ fontSize: '20px'}}>
                                    <i className= "fa fa-linkedin-square" aria-hidden="true"></i>
                                    https://www.linkedin.com/in/samuel-appiahene-828b151b0/
                                </ListItemContent>
                            </ListItem>



                        </List>
                        
                    </Cell>
                </Grid>
                
            </div>
        )
    }
}

export default Contact;