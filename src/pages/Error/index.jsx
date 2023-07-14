import { MdKeyboardArrowLeft } from 'react-icons/md';
import { Navbar, Footer } from '../../layouts/index';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="overflow-hidden ">
      <Navbar />
      <div className="flex items-center justify-center px-5 pt-5 Laptop-L:px-6 Laptop-L:pt-6">
        <div className="px-5">
          <h2 className="Laptop-L:text-[19px] text-base mt-2 font-Yekan-bold text-[#23254e] text-center">
            صفحه‌ای که دنبال آن بودید پیدا نشد!
          </h2>
          <Link to="/">
            <div className="flex items-center justify-center mt-6 text-xs font-Yekan-bold text-[#19bfd3]">
              <p className="">صفحه اصلی</p>
              <MdKeyboardArrowLeft className="w-[18px] h-[18px]" />
            </div>
            <div className="mt-8">
              <div className="max-w-full Laptop-L:w-[571px] Laptop-L:h-[256px] w-[300px] h-[140px]">
                <img
                  className="w-full"
                  src="https://www.digikala.com/statics/img/png/page-not-found.png"
                  alt="error-404"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ErrorPage;
