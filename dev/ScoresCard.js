/**
 * 统计结果组件
 */
import * as React from "react";
import stores from './stores'
class ScoresCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            rightSum:stores.rightSum,
            scores:stores.rightSum.length * 5
        };

    }



    render(){
        return(
            <div className="scores_box">
                <div className="scores_title">你一共得了：{this.state.scores}分</div>
                <div className="scores_tips">下面是你的错题，点击查看答案！</div>
                <div className="errors_box">
                    {
                        this.state.rightSum.map((row,idx)=>{
                            return(
                                <div key={idx}>
                                    <div className="errors_item">
                                        {
                                          row
                                        }
                                    </div>

                                </div>
                            )
                        },this)
                    }
                </div>
                <div><button className="btn btn-default" onClick={()=>{
                    this.props.callback_begin();
                }}>重新来过！</button></div>
            </div>
        )
    }
}
export default ScoresCard