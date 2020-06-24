import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Button(props) {
    const { className, children, type, size, htmlType, hitSlop, style, ...restProps } = props;
    const containerStyle = {
        marginLeft: hitSlop,
        marginRight: hitSlop,
    }
    const bgStyle = {
        top: -1 * hitSlop,
        left: -1 * hitSlop,
        right: -1 * hitSlop,
        bottom: -1 * hitSlop,
    }
    
    return (
        <button 
            className={classNames(
                'ft-Button', 
                `ft-Button_${type}`, 
                `ft-Button_${size}`, 
                className
            )}
            type={htmlType}
            style={style ? {
                ...containerStyle,
                ...style,
            } : containerStyle}
            {...restProps}
        >
            <span className='ft-Button__present'>
                {children}
            </span>
            <span className='ft-Button__bg' style={bgStyle}></span>
        </button>
    )
}

Button.propTypes = {
    hitSlop: PropTypes.number,
    type: PropTypes.oneOf([
        'primary',
        'default',
        'danger',
        'link',
        'merge'
    ]),
    size: PropTypes.oneOf([
        'sm',
        'md',
        'lg'
    ])
}

Button.defaultProps = {
    type: 'default',
    size: 'sm',
    hitSlop: 5,
}

export default Button;