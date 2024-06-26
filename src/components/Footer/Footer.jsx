import './Footer.css';
import footer__logo__image from '../../assets/logo-branca.svg';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

export const Footer = () => {
  return (
    <div className='general-foot'>
      <div className='second-foot'>
        <img className='logo-white' src={footer__logo__image} alt='' />
        <Card className='text-center'>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant='primary'>Go somewhere</Button>
          </Card.Body>
          <Card.Footer className='text-muted'>2 days ago</Card.Footer>
        </Card>
      </div>
    </div>
  );
};
