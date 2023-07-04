import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {IoClose} from "react-icons/io5";

function PriceChart({onClick}) {

    const data = [
        {
            
          },
        {
          name: 'فروردین',
          "قیمت بدون تخفیف": 4000,
          "موجود": 1200,
          pv: 2400,
        },
        {
          name: 'اردیبهشت',
          "قیمت بدون تخفیف": "",
          "موجود": 3500,
          pv: 1398,
        },
        {
          name: 'خرداد',
          "قیمت بدون تخفیف": 2000,
          "موجود": 4800,
          pv: 1000,
        },
        {
          name: 'تیر',
          "قیمت بدون تخفیف": 2780,
          "موجود": 1200,
          pv: 3908,
        },
        {
          name: 'مرداد',
          "قیمت بدون تخفیف": 1890,
          "موجود": 720,
          pv: 4800,
        },
        {
          name: 'شهریور',
          "قیمت بدون تخفیف": 2390,
          "موجود": 4000,
          pv: 3800,
        },
        {
          name: 'مهر',
          "قیمت بدون تخفیف": 3490,
          "موجود": 2800,
          pv: 4300,
        },
        {
            name: 'آبان',
            "قیمت بدون تخفیف": 1800,
            "موجود": 3600,
            pv: 4300,
          },
          {
            name: 'آذر',
            "قیمت بدون تخفیف": 4700,
            "موجود": 5200,
            pv: 4300,
          },
          {
            name: 'دی',
            "قیمت بدون تخفیف": 5600,
            "موجود": 6000,
            pv: 4300,
          },
          {
            name: 'بهمن',
            "قیمت بدون تخفیف": 1200,
            "موجود": 3400,
            pv: 4300,
          },
          {
            name: 'اسفند',
            "قیمت بدون تخفیف": 3150,
            "موجود": 1100,
            pv: 4300,
          },
      ];

  return (
     <div className='w-full h-screen p-10 pl-0 mx-auto bg-white min-[1280px]:rounded-lg min-[1280px]:w-2/3 min-[1280px]:h-auto chart'>
        <div className='flex items-center justify-between py-3'>
         <h3 className=" chartTitle">فروش روزانه</h3>
         <div className='pl-16'>
         <IoClose onClick={onClick} className='w-6 h-6 text-[#3f4064] hover:cursor-pointer'/>
         </div>
        </div>
         <ResponsiveContainer width='99%'  aspect={3} >
            <LineChart data={data} >
            <CartesianGrid vertical={false} strokeDasharray="3 3"/>
                <XAxis dataKey="name" type="category" stroke='#515151' allowDuplicatedCategory={false}/>
                <YAxis dataKey="pv"/>
                <Line type="monotone" dataKey="قیمت بدون تخفیف" stroke='#00bfd6' activeDot={{ r: 5 }} strokeWidth={4}/>
                <Line type="monotone" dataKey="موجود" stroke='#d8d8d8' strokeWidth={4}/>
                <Tooltip />
                <Legend />
            </LineChart>
        </ResponsiveContainer>
     </div>
  );
}

export default PriceChart;