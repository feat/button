import React from 'react';
import { action } from '@storybook/addon-actions';
import SquareButton from '../src/SquareButton';
import '../src/style/index.scss';

export default {
  title: 'SquareButton',
  component: SquareButton,
};

const wrapperStyle = { margin: 40 }

export const Types = () => (
  <div style={wrapperStyle}>
    <SquareButton 
      onClick={action('clicked')}
    >
      M
    </SquareButton>
    <SquareButton 
      onClick={action('clicked')}
      type='primary'
    >
      M
    </SquareButton>
    <SquareButton 
      onClick={action('clicked')}
      type='danger'
    >
      M
    </SquareButton>
    <SquareButton 
      onClick={action('clicked')}
      type='link'
    >
      M
    </SquareButton>
    <SquareButton 
      onClick={action('clicked')}
      type='merge'
    >
      M
    </SquareButton>
  </div>
)

export const Disabled = () => (
  <div style={wrapperStyle}>
    <SquareButton 
      onClick={action('clicked')}
      disabled
    >
      M
    </SquareButton>
    <SquareButton 
      onClick={action('clicked')}
      type='primary'
      disabled
    >
      M
    </SquareButton>
    <SquareButton 
      onClick={action('clicked')}
      type='danger'
      disabled
    >
      M
    </SquareButton>
    <SquareButton 
      onClick={action('clicked')}
      type='link'
      disabled
    >
      M
    </SquareButton>
    <SquareButton 
      onClick={action('clicked')}
      type='merge'
      disabled
    >
      M
    </SquareButton>
  </div>
)

export const Sizes = () => (
  <div>
    <SquareButton 
      onClick={action('clicked')}
      size='sm'
    >
      S
    </SquareButton>
    <SquareButton 
      onClick={action('clicked')}
      size='md'
    >
      M
    </SquareButton>
    <SquareButton 
      onClick={action('clicked')}
      size='lg'
    >
      L
    </SquareButton>
  </div>
)
