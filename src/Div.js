import React, { Component }  from 'react'
import {View} from 'react-native'
import {useBootstrap} from "./theme/index";
import PropTypes from 'prop-types';
import { generateStyle } from "./theme/theme";

class Div extends Component {
    render() {
        const {
            style,
            className,
            children,
            ...props
        } = this.props;

        const styleBlock = generateStyle(className);

        return (
            <View {...props} style={[styleBlock,style]}>
                {children}
            </View>
        );
    }
}

Div.defaultProps ={
    className: ""
};
Div.propTypes = {
    className: PropTypes.string
};
export default useBootstrap(Div);