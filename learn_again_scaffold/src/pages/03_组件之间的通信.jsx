
import React from "react";
import PropTypes from "prop-types";


class BigComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter : 1
        }
    }

    render() {
        return (
            <div>
                我是一个复杂的组件 --我要让子组件 通过函数 修改我的值{this.state.counter}
                <div>
                    <Header01></Header01>
                    <Body01>
                    </Body01>
                    <div>
                        <Banner01>13123</Banner01>
                    </div>
                    <div>
                        <FatherGiveSon></FatherGiveSon>
                    </div>
                    <Footer01></Footer01>
                </div>

                <ChildMethodComponent changeCounter={(event)=>{
                    this.setState({
                        counter: event
                    })
                }}></ChildMethodComponent>
            </div>
        );
    }
}

function Header01() {
    return (<h2>我是Header</h2>)
}

function Body01() {
    return (<div>我是Body</div>)
}
function Banner01(){
    return (
        <ul>
            <li>1111</li>
            <li>2222</li>
            <li>3333</li>
            <li>4444</li>
        </ul>
    )
}

function Footer01() {
    return (<h2>我是footer</h2>)
}

function ComponentSendMessage() {

    return (
        <div>
            <Header01></Header01>
            <Body01></Body01>
            <Footer01></Footer01>
        </div>
    )
}


class FatherGiveSon extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            message1 : "我是要给子组件的数据111",
            message2 : "我是要给子组件的数据222",
         }
    }
    render()
    {
        return (
            <div>
                <div>父传子 类组件之间传值  {this.state.sonMessage}</div>
                <SonComponent sonMessageChange={this.sonMessageChange} message={this.state.message1}></SonComponent>


                <div>父传子 函数组件之间传值</div>
                <ChildComponent message1={this.state.message1} message1={this.state.message2}></ChildComponent>


                <div>父传子通信---函数 - 属性验证
                    <ChildVerifiedComponent></ChildVerifiedComponent>
                </div>


                <div>父传子通信--- 类- 属性验证
                    <ChildVerifiedComponent></ChildVerifiedComponent>
                </div>

                <div>子传父通信 ---- 函数传递 然后通过回调修改父函数中的值</div>

            </div>
        );
    }
    sonMessageChange = (event) =>{
        console.log("父组件的方法")
        console.log(event)
        this.setState({
            sonMessage: event
        })
    }}

export  {BigComponent, FatherGiveSon};


class SonComponent extends  React.Component{
    render() {
        return (
            <div>
                我是子组件-----
                {this.props.message}
            </div>)
    }
}

function ChildComponent(props) {
    const {message1, message2} = props;
    return (
        <h2>我是子组件 --- 父传子  --- 函数组件   --  {props.message1} -- {props.message2}</h2>
    )
}

ChildVerifiedComponent.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    height: PropTypes.number,
    names: PropTypes.array
}

ChildVerifiedComponent.defaultProps = {
    name: "why",
    age: 30,
    height: 1.98,
    names: ["aaa", "bbb"]
}

function ChildVerifiedComponent(props) {
    const {name, age, height} = props;
    console.log(name, age, height);
    const {names} = props;
    return(
        <div>
            <h2>{name + age + height}</h2>
            <ul>
                {
                    names.map((item, index) => {
                        return <li>{item}</li>
                    })
                }
            </ul>
        </div>
    );
}

class ChildCpn2 extends React.Component {
    // es6中的class fields写法
    static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        height: PropTypes.number,
        names: PropTypes.array
    }

    static defaultProps = {
        name: "why",
        age: 30,
        height: 1.98,
        names: ["aaa", "bbb"]
    }

    render() {
        const {name, age, height} = this.props;
        const {names} = this.props;

        return (
            <div>
                <h2>{name + age + height}</h2>
                <ul>
                    {
                        names.map((item, index) => {
                            return <li>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

class ChildMethodComponent extends React.Component{

    render() {
        return (
            <div>
                我是子组件
                <button onClick={(e)=>{
                    this.props.changeCounter(10)
                }}>修改父组件的值</button>
            </div>
        )
    }
}

