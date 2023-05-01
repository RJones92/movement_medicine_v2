import * as React from 'react';
import Button from 'react-bootstrap/Button';

const CallNowButton = () => (
  <Button
    variant='primary'
    href='tel:01255781388'
    size='lg'
    className='d-md-none'
  >
    Call us
  </Button>
);

export default CallNowButton;
