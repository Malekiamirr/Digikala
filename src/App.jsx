import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootHome, HomePage, PhonePage, Test, SearchPage, IntroduceProductPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootHome />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "phones",
        element: <PhonePage/>
      },
      {
        path: "search",
        element: <SearchPage/>,
      },
      {
        path: "product",
        element: <IntroduceProductPage product={{
            "id": 1,
            "name": "گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت",
            "latinName": "Apple iPhone 13 CH Dual SIM 128GB And 4GB RAM Mobile Phone",
            "slug": "apple-iphone13-ch-dual-sim",
            "mainCategory": "کالای دیجیتال",
            "category": "گوشی موبایل",
            "subCategory": "اپل",
            "brand": "اپل",
            "price": "49900000",
            "stock": "4",
            "sellCount": "76",
            "description": "گوشی موبایل iPhone 13 CH پرچم‌دار جدید شرکت اپل است که با چند ویژگی جدید و دوربین دوگانه روانه بازار شده است. اپل برای ویژگی‌ها و طراحی کلی این گوشی از همان فرمول چند سال اخیرش استفاده کرده است. نمایشگر آیفون 13 به پنل Super Retina مجهز ‌شده است تا تصاویر بسیار مطلوبی را به کاربر عرضه کند. این نمایشگر رزولوشن بسیار بالایی دارد؛ به‌طوری‌که در اندازه­‌ی 6.1 اینچی‌اش، حدود 460 پیکسل را در هر اینچ جا داده است. امکان شارژ بی‌‌سیم باتری در این گوشی وجود دارد. روکش سرامیکی صفحه‌نمایش این گوشی می‌تواند انقلابی در محافظت به‌پا کند. این گوشی ضدآب و ضد گردوخاک است. بدنه­ زیبا iPhone 13 در مقابل خط‌‌وخش مقاومت زیادی دارد؛ پس خیالتان از این بابت که آب و گردوغبار به‌‌راحتی روی آیفون 13 تأثیر نمی‌‌گذارد، راحت باشد. علاوه‌براین لکه و چربی هم روی این صفحه‌نمایش باکیفیت تأثیر چندانی ندارند. تشخیص چهره با استفاده از دوربین جلو دیگر ویژگی است که در آیفون جدید اپل به کار گرفته شده است. قابلیت اتصال به شبکه­‌های 4G و 5G، بلوتوث نسخه‌ 5، نسخه­‌ 15 از iOS دیگر ویژگی‌های این گوشی هستند. ازنظر سخت‌‌افزاری هم این گوشی از تراشه­‌ی جدید A15 بهره می‌برد که دارای 15 میلیارد ترانزیستور است که دارای کنترل گرمای مطلوبی بوده که تا بتواند علاوه بر کارهای معمول، از قابلیت‌های جدید واقعیت مجازی که اپل این روزها روی آن تمرکز خاصی دارد، پشتیبانی کند. به گفته خود شرکت اپل این گوشی دارای سرعتی 50 برابر نسخه 12 خود است. پردازنده دارای ماژولار جدیدی است که مصرف باتری را بسیار پایین‌تر آورده است و شما دارای حفظ باتری بالاتری هستید. کیفیت نمایش شما در iPhone 13 دارای 120 هرتز است و کیفیت بالایی را شاهد خواهید بود. اپل در این سری از گوشی‌های iPhone خود پردازنده گرافیکی‌ای را قرار داده که از سری 12 گوشی‌های خود 30 درصد سریع‌تر است و این نویدبخش آن است که شما می‌توانید بازی‌هایی را با گرافیک و MAP سنگین تر و بزرگ‌تر اجرا کنید. یکی از ویژگی‌هایی که در iPhone 13 شاهد هستیم سیستم فیلمبرداری ProRes سینمایی آن است که می تواند انقلابی در فیلمبرداری گوشی‌های موبایل به‌راه انداخته باشد. این قابلیت می‌تواند نسبت به صورت روبرو بین افراد و یا بین فرد و اشیا فوکوس و بِلار داشته باشد.",
            "thumbnail": "https://dkstatics-public.digikala.com/digikala-products/ec9a962187e1f82cc47e7a148ef99ec1c6fd024d_1656423336.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
            "createdAt": "2023-02-23T22:17:08.767Z",
            "updatedAt": "2023-02-23T22:17:08.767Z",
            "productsValues": [
                {
                "id": 780921,
                "filter": "تعداد سیم کارت",
                "value": "دو عدد",
                "isSpecifications": false
                },
                {
                "id": 83807,
                "filter": "شبکه های ارتباطی",
                "value": "4G",
                "isSpecifications": false
                },
                {
                "id": 846024,
                "filter": "مقدار RAM",
                "value": "شانزده گیگابایت",
                "isSpecifications": false
                }
            ],
            "timeStartOffer": "2023-02-23T22:17:08.767Z",
            "timeEndOffer": 1677190628767,
            "productImage": [
                {
                "image": "https://dkstatics-public.digikala.com/digikala-products/ece5a5ed533de7bb1142826f942b838d90a65d03_1650873652.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
                },
                {
                "image": "https://dkstatics-public.digikala.com/digikala-products/a2cc9b4a98da7abfac95831efa4c0d9c8d2cd0b2_1655536773.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
                },
                {
                "image": "https://dkstatics-public.digikala.com/digikala-products/8703d98e2c203a70063d870875b4bc445a38029e_1653823285.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
                },
                {
                "image": "https://dkstatics-public.digikala.com/digikala-products/5a4eb650fb7ccab910323c035cf249142ea110ec_1653823283.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
                }
            ],
            "productVideo": [
                {
                "video": "https://digikala.arvanvod.ir/kGp7mgrY8V/3aNZNoBxRk/origin_GaO4UiTRpsuGHhfEhKqJVjBL5gDownL1Do5Onnm3.mp4"
                }
            ],
            "sellerView": [
                {
                "property": "قیمت و ارزش خرید",
                "rate": "4"
                },
                {
                "property": "کیفیت و کارایی",
                "rate": "4"
                },
                {
                "property": "شباهت یا مغایرت",
                "rate": "2"
                },
                {
                "property": "گارانتی",
                "rate": "4"
                },
                {
                "property": "ابعاد",
                "rate": "4"
                }
            ],
            "isSuggest": true,
            "mainCategorySlug": "electronic-devices",
            "categorySlug": "phone",
            "subCategorySlug": "apple"
            }}/>
      },
      {
        path: "test",
        element: <Test/>
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
