import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../../layouts';

function RootHome() {
  return (
    <div className="overflow-hidden">
      <div className="sticky top-0 z-20">
        <Navbar />
      </div>

      <div>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default RootHome;
