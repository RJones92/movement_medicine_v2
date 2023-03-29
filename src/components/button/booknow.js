import * as React from 'react';
import Button from 'react-bootstrap/Button';

const bookingToolHoldingPageUrl =
  'https://new-ob.rushcliff.com/holding-page/561217?bookingType=appointment';

const BookNowButton = () => (
  <Button
    variant='primary'
    href={bookingToolHoldingPageUrl}
    target='_blank'
    rel='noreferrer'
    size='lg'
  >
    Book now
  </Button>
);

export default BookNowButton;
