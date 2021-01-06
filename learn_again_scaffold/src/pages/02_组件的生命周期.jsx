import React, {Component} from 'react';

class ComponentLifeCycleDemo extends Component {

    ///在Mounting阶段执行 创建组件
    constructor(props) {
        ///this.state 初始化数据
        super(props);
        this.state = {
            counter:1,
            isShow:true,
        }
        console.log("执行了组件的constructor方法")

        // 在这个方法中可以给我们的函数绑定实例,就好像这样
        this.aFunction.bind(this)
    }


    ///如果需要操作dom 一般在这里执行
    ///在我们此处我们可以发送网络请求 这里也是官方建议的网络请求发送的地方
    componentDidMount() {
        console.log("执行了组件的componentDidMount方法")
    }

    ///有一些dom如果是组件更新之后 你希望操作的
    ///如果在组件更新之后 您希望对props做一个对比
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("执行了组价您的ComponentDidUpdate方法")
    }

    ///清理定时器 清理监听 或者销毁其他的一些东西
    componentWillUnmount() {
        console.log("执行了组件的  component Will Unmount")
    }

    ///这是一个不常用的生命周期
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        ///偶尔比较方便 大部分时间都不使用
        ///这个方法的返回值类型是一个bool值,如果父视图render重新渲染但是此jsx组件无任何修改 可以返回false 这样此组件就不会执行render方法
        console.log("这是一个不常用的生命周期,shouldComponentUpdate")
        return true
    }

    ///这也是一个不常用的生命周期
    ///更新之前的快照 也就是说能拿到更新之前的一些数据
    ///如果组件实现了 getSnapshotBeforeUpdate() 生命周期（不常用），则它的返回值将作为 componentDidUpdate() 的第三个参数 “snapshot” 参数传递。否则此参数将为 undefined。
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("通过getSnapshotBeforeUpdate这个方法 可以拿到render之前的数据 可以用来做对比")
        return null
    }

    aFunction(){
        console.log("aFunction")
    }

    ///constructor执行完了之后就会执行render方法
    render()
    {
        console.log("执行了组件的render方法")
        return (
            <div>
                我是App组件
                <div>当前计数是 {this.state.counter}</div>
                <button onClick={()=>{
                    this.setState({
                        counter: this.state.counter+1,
                        isShow: !this.state.isShow
                    })
                }}>我是一个按钮</button>

                <div>
                    {this.state.isShow && <Cpn></Cpn>}
                </div>
            </div>
        );
    }
}


class Cpn extends Component {
    render() {
        return <h2>我是Cpn组件</h2>
    }

    componentWillUnmount() {
        console.log("调用了Cpn的componentWillUnmount方法");
    }
}

export default ComponentLifeCycleDemo;