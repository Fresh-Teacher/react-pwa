import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import './style.css'; 


import { CenteredFlexBox, FullSizeCenteredFlexBox } from '@/components/styled';
import { giphy404, messages } from '@/config';

function NotFound() {
  return (
    <div className="error">
    <div className="sky">
        <h1 style={{ color: "antiquewhite" }}>ERROR!</h1>
        <h2><span>4</span><span>0</span><span>4</span></h2>
        <div className="grass"></div>
        <img src="aeroplane.png" alt="" className="plane" />
    </div>
    <div className="field">
        <h2>Opps...looks like you got lost.</h2>
        <a href="#">Go Back Home</a>
    </div>
</div>

  );
}

export default NotFound;
