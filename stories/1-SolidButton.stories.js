import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../src/Button';
import '../src/style/index.scss';

export default {
  title: 'Button',
  component: Button,
};

const wrapperStyle = { margin: 40 }

export const Types = () => (
  <div style={wrapperStyle}>
    <Button 
      onClick={action('clicked')}
    >
      Default
    </Button>
    <Button 
      onClick={action('clicked')}
      type='primary'
    >
      Primary
    </Button>
    <Button 
      onClick={action('clicked')}
      type='danger'
    >
      Danger
    </Button>
    <Button 
      onClick={action('clicked')}
      type='link'
      disabled
    >
      Link
    </Button>
    <Button 
      onClick={action('clicked')}
      type='merge'
    >
      Merge
    </Button>
  </div>
)

export const disabled = () => (
  <div style={wrapperStyle}>
    <Button 
      onClick={action('clicked')}
      disabled
    >
      Default
    </Button>
    <Button 
      onClick={action('clicked')}
      disabled
      type='primary'
    >
      Primary
    </Button>
    <Button 
      onClick={action('clicked')}
      disabled
      type='danger'
    >
      Danger
    </Button>
    <Button 
      onClick={action('clicked')}
      disabled
      type='link'
      disabled
    >
      Link
    </Button>
    <Button 
      onClick={action('clicked')}
      disabled
      type='merge'
    >
      Merge
    </Button>
  </div>
)

export const Sizes = () => (
  <div style={wrapperStyle}>
    <Button size='sm'>Small</Button>
    <Button size='md'>Middle</Button>
    <Button size='lg'>Large</Button>
  </div>
)