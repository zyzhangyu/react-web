import React from 'react';
import {Avatar, Button, Row, Col, Icon} from 'antd';
import avatar from './../../asset/images/avatar.jpg';
import './index.less'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "破烂王章鱼哥",
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
                            verticalAlign: 'middle',
                            width: '250px',
                            height: '250px'
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

                <Row type="flex" justify="center" align="middle">
                    <Col className="item" span={6}> <Button className="button-g">Twitter</Button> </Col>
                    <Col className="item" span={6}> <Button className="button-t">Twitter</Button> </Col>
                    <Col className="item" span={6}> <Button className="button-m">Twitter</Button> </Col>
                </Row>

                <Row type="flex" justify="center" align="middle">
                    <Col className="item" span={7}> <Button className="button-i">Twitter</Button> </Col>
                    <Col className="item" span={7}> <Button className="button-f">Twitter</Button> </Col>
                    <Col className="item" span={7}> <Button className="button-l">Twitter</Button> </Col>
                </Row>
            </div>
        );
    }
}

export default Home;

//问题1: span如何让span独占一行

