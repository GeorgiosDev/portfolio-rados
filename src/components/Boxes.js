import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import '../styles/Boxes.css';

const Boxes = () => {
  return (
    <div className="container">
      <div className="box-container">
        {/* Box 1 */}
        <Link to="/ecodespoina" className="box-link">
          <h2 className="box-title">ΟικοΔέσποινα</h2>
          <Box as="button" className="box box-1" backgroundColor="blue.500"></Box>
        </Link>

        {/* Box 2 */}
        <Link to="/boxes/box2" className="box-link">
          <h2 className="box-title">Ενέργεια</h2>
          <Box as="button" className="box box-2" backgroundColor="blue.500"></Box>
        </Link>

        {/* Box 3 */}
        <Link to="/boxes/box3" className="box-link">
          <h2 className="box-title">Τοπική αυτοδιοίκηση</h2>
          <Box as="button" className="box box-3" backgroundColor="blue.500"></Box>
        </Link>

        {/* Box 4 */}
        <Link to="/boxes/box4" className="box-link">
          <h2 className="box-title">Consulting</h2>
          <Box as="button" className="box box-4" backgroundColor="green.500"></Box>
        </Link>
      </div>

      {/* Render nested routes */}
      <Outlet />
    </div>
  );
};

export default Boxes;