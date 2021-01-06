import React, {Component} from "react";
import {
    Breadcrumb,
    Form,
    Col,
    Row,
    Select
} from 'antd';

class ReportHome extends  Component {

    // 生命周期
    constructor(props) {
        super(props);
        console.log("打印 ReportHome 页面的 constructor -》porps", props);
        this.state = {

        }
    }
}


///2020年10月28日 
上午:
1.根据输入框输入的内容进行网络请求 取报单人的名称
2.选定一个报单人的时候 进行列表数据的获取
3.研究一下怎么把地图放到项目了
4.把评分放入cell中


{
    "code": "0",
    "message": "",
    "timestamp": "1603344490318",
    "date": [
        {
            "reporterID":"id89756",
            "reporterName":"张三",
            "报价人的其他信息":""
        },
      {
          "reporterID":"id89757",
          "reporterName":"张三",
          "报价人的其他信息":""
      },
      {
        "reporterID":"id89759",
        "reporterName":"张三",
        "报价人的其他信息":""
    },
    {
        "reporterID":"id89759",
        "reporterName":"张三",
        "报价人的其他信息":""
    },
 
    ]
  }





  <Row style={{"height":"80px"}}>
  <Col>
      <div style={{"font-size":24, "font-weight":"bold"}}>近期价格走势</div>
  </Col>
</Row>


ES6的类 