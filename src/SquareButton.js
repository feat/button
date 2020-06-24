import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';

function SquareButton(props) {
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
                'ft-SquareButton', 
                `ft-SquareButton_${type}`, 
                `ft-SquareButton_${size}`, 
                className
            )}
            type={htmlType}
            style={style ? {
                ...containerStyle,
                ...style,
            } : containerStyle}
            {...restProps}
        >
            <span className='ft-SquareButton__present'>
                {children}
            </span>
            <span className='ft-SquareButton__bg' style={bgStyle}></span>
        </button>
    )
}

SquareButton.propTypes = {
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

SquareButton.defaultProps = {
    type: 'default',
    size: 'sm',
    hitSlop: 5,
}

export default SquareButton;