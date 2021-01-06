import React, {Component} from 'react';

class UseSetStateComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter : 0,
        }
    }
    render()
    {
        return (
            <div>
                <h2>当前计数 {this.state.counter}</h2>
                <button onClick={()=>{
                    ///异步 多次setState render会被频繁调用 批量更新对性能更好
                    ///State和props 不同步 如果render没有运行完
                    this.setState({
                        counter : this.state.counter + 1
                    })
                }}>加1加1加1</button>


                ///setState同步更新的案例
                <button id="btn"></button>
            </div>
        );
    }


    ///setState同步更新的案例
    componentDidMount() {

        document.getElementById("btn").addEventListener("click",(e)=>{
            console.log("被点击")

        })
    }


    ///setState同步更新的案例
    changeText(){

        setTimeout(()=>{
            this.setState({
                message:"你好 李银河"
            })

            console.log(this.state.message)

        }, 0)
    }

    // setState数据的合并
    mergeData = () => {

        // setState的数据合并和下面这把是一样的 把obj2 和obj3的数据合并到obj1里面 然后返回obj1
        // Object.assign(ob1， obj2, obj3)
    }

    // setState本身的合并
    combineSetState = () => {

        ///问题在于这里是对象 还是 函数
        this.setState((prevState, props) => {
            return {
                counter: prevState + 1
            }
        })
    }

    ///react的更新机制
    // jsx -> 虚拟dom -> 真实dom

    //render之后产生新的dom数 然后计算diff  n的3此方 复杂度
    ///同层比较 不会跨节点比较



    ///setState只有render 没有改变的也会render 这样性能浪费 这样优化
    shouldComponentUpdate(nextProps, nextState, nextContext) {

        if (this.state.counter  !== nextState.counter){
            return true
        }

        ///return false会阻断
        return false

        ///上面太麻烦了

        ///只要改变继承PureComponent就好了 别继承Component



        ///true和false决定要不要进行render方法

        ///isPureCompo
    }
}

export default UseSetStateComponent;