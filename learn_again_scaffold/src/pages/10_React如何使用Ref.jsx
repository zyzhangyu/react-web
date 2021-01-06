// import React, {PureComponent, createRef} from 'react';
// import PropTypes from 'prop-types';
//
// class HowUseRefComponent extends PureComponent
// {
//
//     constructor(props) {
//         super(props);
//
//         this.titleRef = createRef()
//         this,titEl = null;
//     }
//     componentDidMount() {
//         ///这样可以操作dom
//         // document.getElementById()
//     }
//
//     render()
//     {
//         return (
//             <div>
//                 {/*1.ref的使用其实是直接操作dom的一种方式*/}
//                 {/*3种获取ref的方法*/}
//                 {/*<h2 ref=字符串或者对象或者函数就是这三种方法>Hello React</h2>*/}
//                 <h2 ref="titleRef">Hello React</h2>
//                 <h2 ref={createRef}></h2>
//                 ///回调函数方式
//                 <h2 ref={(arg)=>{
//                     this.titleEl = arg
//                 }}></h2>
//                 <button></button>
//
//
//                 ///ref的类型是会不同的  可以做元素 也可以放在组件上
//             </div>
//         );
//     }
//
//
//
// }
//
// HowUseRefComponent.propTypes = {};
//
// export default ;