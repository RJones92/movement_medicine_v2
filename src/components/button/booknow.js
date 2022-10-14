import * as React from 'react';
import Button from 'react-bootstrap/Button';
import { navigate } from 'gatsby';

const BookNowButton = () => (
  <Button
    variant='primary'
    onClick={() => {
      navigate('/#book');
    }}
  >
    Book now
  </Button>
);

export default BookNowButton;
