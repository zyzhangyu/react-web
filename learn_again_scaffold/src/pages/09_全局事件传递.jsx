import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {} from 'events'
class AllEvebtMoment extends PureComponent
{

    componentDidMount() {
        ///添加事件监听

    }

    componentWillUnmount() {
        ///取消事件监听
    }

    render()
    {
        return (
            <div>

            </div>
        );
    }
}

AllEvebtMoment.propTypes = {
    "name":String
};

export default AllEvebtMoment;

///eventBus
///eventbus.emit()