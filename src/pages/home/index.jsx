import React, {Component} from 'react';
import {Avatar, Button} from 'antd';
import {Text} from  "react";
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name : "Yu Zhang",
            color: 0xFF00FF,
            user: "我也不知道现在放点啥好",
            profession: "电冰箱，电视，修理",

        }
    }
    render() {
        return (
            <div>

                lkjhgfjkljlsdafgdfgfdhsga
                <Avatar style={{backgroundColor: this.state.color, verticalAlign: 'middle'}} size="large">
                    {this.state.user}
                </Avatar>

                <Text>
                    {this.state.name}
                </Text>

                <Text>
                    {this.state.profession}
                </Text>

                <Button>Twitter</Button>
                <Button>Twitter</Button>
                <Button>Twitter</Button>
                <Button>Twitter</Button>
                <Button>Twitter</Button>
                <Button>Twitter</Button>
            </div>
        );
    }
}

export default Home;
