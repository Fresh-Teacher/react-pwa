import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Meta from '@/components/Meta';
import { Container, Button } from 'react-bootstrap';

function BabyClassResources() {
  return (
    <>
      <Meta title="Baby Class Resources" />
      <Container className="py-5">
        <Typography variant="h3" className="mb-4">Baby Class Resources</Typography>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/lesson-notes">
              <Button variant="primary" className="w-100">Lesson Notes</Button>
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/schemes-of-work">
              <Button variant="primary" className="w-100">Schemes of Work</Button>
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/past-papers">
              <Button variant="primary" className="w-100">Past Papers</Button>
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/videos">
              <Button variant="primary" className="w-100">Videos</Button>
            </Link>
          </li>
        </ul>
      </Container>
    </>
  );
}

export default BabyClassResources;
