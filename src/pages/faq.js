import * as React from 'react';
import Service from '../components/service';
import Accordion from 'react-bootstrap/Accordion';
import FaviconSmall from '../static/favicon/favicon-16x16.png';
import FaviconLarge from '../static/favicon/favicon-32x32.png';

export const Head = () => {
  return (
    <>
      <title>COP Clinic - FAQs</title>
      <link rel='icon' type='image/png' sizes='32x32' href={FaviconLarge} />
      <link rel='icon' type='image/png' sizes='16x16' href={FaviconSmall} />
    </>
  );
};

const FaqPage = () => {
  return (
    <Service
      bannerTitle='Frequently Asked Questions'
      id='faq'
      bgcolor='bg-white'
    >
      <Accordion flush>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>
            What to expect from your first session
          </Accordion.Header>
          <Accordion.Body>
            On your first visit, we ask you to arrive a few minutes early to
            read and complete some consent forms. We will then have a discussion
            about your problem and your goals, followed by a thorough assessment
            to find out the reason / cause of your problem. We will then be able
            to start the correct treatment. We will always give some advice for
            you to do at home, so you can continue your recovery away from the
            clinic as well.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>
            What treatment does the clinic offer?
          </Accordion.Header>
          <Accordion.Body>
            <p>
              An Osteopath is a skilled practitioner in physical therapy, which
              encompasses a wide range of treatment techniques, see list below.
              Your practitioner will suggest and be guided by your preference as
              the right techniques and modalities which will be used within the
              session.
            </p>
            <ul>
              <li>Osteopathy</li>
              <li>Corrective Exercise Prescription </li>
              <li>Swedish soft tissue massage</li>
              <li>Deep tissue / sports massage</li>
              <li>Joint mobilisations and muscle stretching</li>
              <li>Joint manipulations</li>
              <li>Dry needling</li>
              <li>Therapeutic Ultrasound</li>
              <li>Electrotherapy</li>
              <li>Sports Taping</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2'>
          <Accordion.Header>What should I wear?</Accordion.Header>
          <Accordion.Body>
            Please wear something comfortable and relatively loose fitting. We
            will likely need to see the area which is giving you problems, and
            any active testing which we may ask you to do will be easier in
            freely moving clothing.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='3'>
          <Accordion.Header>Is treatment safe for me?</Accordion.Header>
          <Accordion.Body>
            Following a thorough assessment and discussion about your medical
            history, we can advise if you should avoid a particular treatment
            modality. However, most forms of manual therapy are relatively safe.
            If you have a particular concern please contact us before booking
            and we can discuss the safety over the telephone.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='4'>
          <Accordion.Header>Can I park outside?</Accordion.Header>
          <Accordion.Body>
            There is plenty of street parking in the surrounding roads. We do
            not have a designated car park at the clinic. The closest car parks
            are;
            <ul>
              <li>
                High Street Car Park Clacton, Carnarvon Rd, Clacton-on-Sea CO15
                6QF (5-minute walk 0.2 miles)
              </li>
              <li>
                Agate Road Car Park, Agate Rd, Clacton-on-Sea CO15 1ED (5-minute
                walk 0.3 miles)
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='5'>
          <Accordion.Header>
            Is the clinic wheelchair accessible?
          </Accordion.Header>
          <Accordion.Body>
            Yes, the building opens onto the pavement without steps or inclines.
            The downstairs treatment room is well suited to those with mobility
            difficulties.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='6'>
          <Accordion.Header>How long is an appointment?</Accordion.Header>
          <Accordion.Body>
            The appointments are a 30-minute treatment time.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='7'>
          <Accordion.Header>How much does it cost?</Accordion.Header>
          <Accordion.Body>An appointment is £47.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='8'>
          <Accordion.Header>Do you offer home visits?</Accordion.Header>
          <Accordion.Body>
            Yes, we will come to those who are unable to attend the clinic. We
            charge £65 for a home visit appointment. If you require this
            service, please call in and we will arrange a suitable time to come
            out to you.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Service>
  );
};

export default FaqPage;
