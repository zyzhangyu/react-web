import React, {Component} from 'react';

let timeout;
var previous = 0;

class ZYCpt18 extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            num:1
        }
    }

    count = ()=>{
        console.log(this);
        const {num} = this.state;
        this.setState({
            num: (num+1)
        })
    }

    timeDebounce = (func, wait)=>{
        console.log("打印timeout")
        console.log(timeout);
        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(()=>{
                func.apply(this);
            }, wait)
        }
    }

    nowDebounce = (func, wait) => {

        return ()=>{
          if (timeout) clearTimeout(timeout);
          const callNow = !timeout;

          timeout = setTimeout(  ()=>{
              timeout = null;
          }, wait);
          if (callNow){
              func.apply(this);
          }
        };
    }


    debounce = (func, wait, immediate) =>{

            if (timeout)clearTimeout(timeout);
            if (immediate){
                const callNow = !timeout;
                timeout = setTimeout(()=>{
                    timeout = null;
                }, wait);
                if (callNow){
                    func.apply(this);
                }
            }else {
                timeout = setTimeout(()=>{
                    func.apply(this);
                },wait)
            }
    }
    timerThrottle = (func, wait) => {

        if (!timeout){
            timeout = setTimeout(()=>{
                timeout = null;
                func.apply(this);
            },wait);

        }
    }
    timestampThrottle = (func, wait) =>{

        let now = Date.now();
        if (now - previous > wait){
            func.apply(this);
            previous = now;
        }
    }

    render()
    {
        return (
            <div
                onMouseMove={()=>{
                    // this.debounce(this.count,1000, false)
                    this.timerThrottle(this.count, 1000)
                }}
                id="content"
                style={{
                        "height":"150px",
                        "line-height":"150px",
                        "text-align":"center",
                        "color": "#fff",
                        "background-color":"#ccc",
                        "font-size":"80px"
                    }}
            >
                {this.state.num}
            </div>
         );
    }
}

export default ZYCpt18;

