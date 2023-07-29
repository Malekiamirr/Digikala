import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../../layouts';

function RootPage() {
  return (
    <div className="mt-40 overflow-hidden Laptop-L:mt-44">
      <div className="fixed top-0 left-0 z-20 w-full">
        <Navbar />
      </div>

      <div>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default RootPage;
