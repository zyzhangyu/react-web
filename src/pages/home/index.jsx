import React from 'react';
import {Avatar, Button, Row, Col} from 'antd';
import avatar from './../../asset/images/avatar.jpg';
import './index.less'

// import {Text} from  "react";
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Yu Zhang",
            color: 0xFF00FF,
            user: "我也不知道现在放点啥好",
            profession: "回收旧电视，冰箱，洗衣机，电脑手机电动车",
        }
    }

    render() {
        return (
            <div className="home-view">

                <div className="avatar-view">
                    <Avatar
                        style={{
                            backgroundColor: this.state.color,
                            verticalAlign: 'middle',
                            width: '150px',
                            height: '150px'
                        }}

                        shape='circle' src={avatar}>
                        {this.state.user}
                    </Avatar>
                </div>

                <div>
                <span className='name'>
                    {this.state.name}
                </span>
                </div>

                <div className='profession'>
                <span className="profession-text">
                    {this.state.profession}
                </span>
                </div>

                <Row>
                    <Col span={8}> <Button>Twitter</Button> </Col>
                    <Col span={8}> <Button>Twitter</Button> </Col>
                    <Col span={8}> <Button>Twitter</Button> </Col>
                </Row>

                <Row>
                    <Col span={8}> <Button>Twitter</Button> </Col>
                    <Col span={8}> <Button>Twitter</Button> </Col>
                    <Col span={8}> <Button>Twitter</Button> </Col>
                </Row>
            </div>
        );
    }
}

export default Home;

//问题1: span如何让span独占一行

