import React from "react";


class ComponentDefinitionDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            message: "滴水穿石,不要心急,慢慢来,相信自己,我是最棒的!"
        }
    }

    render() {
        // 这个函数可以返回很多种类型的返回值
        // 可以返回数组或者fragments
        // 还可以返回Portals(可以渲染到不同的DOM子树里面)
        // 返回stirng bool null  返回null的话就什么都不渲染
        // 如果不是以上这些类型 不要随意返回
        return (
            <div>
                <div>您好呀,未来的自己。</div>
                <div>{this.state.message}</div>
            </div>
        )
    }
}
export default  ComponentDefinitionDemo;

