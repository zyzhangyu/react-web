import React, {Component, Context} from 'react';


///创建Context对象

export const {Provider, Consumer} = React.createContext("context默认值")

class CrossComponentSendMessage extends Component
{
    render()
    {
        return (
            <div>
                <Provider value={{
                    nickName:"快乐少年",
                    level:"50"
                }}>
                    <CrossComponentSendMessageHeader></CrossComponentSendMessageHeader>
                    <CrossComponentSendMessageBody></CrossComponentSendMessageBody>
                </Provider>

            </div>
        );
    }
}

export default CrossComponentSendMessage;



class CrossComponentSendMessageHeader extends Component
{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render()
    {
        return (
            <div>
                <Consumer>
                    {(item) => {
                        console.log("header")
                        console.log(item)
                        return (
                            <div>
                                <div>用户昵称  {item.nickName}</div>
                                <div>等级 {item.level}</div>
                            </div>
                        )
                    }}
                </Consumer>
            </div>
        );
    }
}


class CrossComponentSendMessageBody extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            nickName:"",
            level:""
        }
    }
    render()
    {
        return (
            <div>
                <Consumer>
                    {(item) =>
                    {
                        console.log("aa")
                        console.log(item);
                        return (
                            <div>
                                <div>
                                    <div>用户昵称  {item.nickName}</div>
                                    <div>等级 {item.level}</div>
                                </div>

                                <button onClick={()=>{
                                    item.nickName = "邪恶大魔王"
                                }}> 昵称变化</button>
                                <button onClick={()=>{
                                 }
                                }>等级+1</button>
                            </div>)
                    }


                    }
                </Consumer>

            </div>
        );
    }
}