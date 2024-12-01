"use client";
import { FaCheck } from 'react-icons/fa';

const plansData = [
  { name: 'Starter', price: '999', features: ['Total Sales', 'Invoice Generation', 'Invoice through Email, Whatsapp', 'Expense Chart', 'Sales Chart', 'Point of Sales', 'Category', 'Menu', 'Transactions', 'Customer Management Panel', 'Table Management Panel', 'Inventory Management Panel', 'Report', 'Setting', 'Profile Management', 'Help and Support'] },
  {
    name: 'Premium',
    price: '1999',
    features: [
      'Total Sales',
      'Invoice Generation',
      'Invoice through Email, Whatsapp',
      'Expense Chart',
      'Sales Chart',
      'Point of Sales',
      'Category',
      'Menu',
      'Transactions',
      'Customer Management Panel',
      'Table Management Panel',
      'Inventory Management Panel',
      'Own Website Making Panel',
      'Website Handling',
      'Food Delivery',
      'Digital Marketing through Whatsapp',
      'Digital Marketing through Email',
      'Digital Marketing through DQ App',
      'Table Reservation System',
      'Dishes Reservation System',
      'QR Food Ordering Panel'
    ]
  }

];

const Pricing = () => {
  return (
    <>
      {/* ===== Pricing Table Start ===== */}
      <section className="text-center p-10 bg-gradient-to-t from-transparent to-[#dee7ff47]">
        <h1 className="text-4xl text-black font-bold mb-2">Pricing & Plans</h1>
        <p className="text-lg mb-5">Compare our plans to find what suits you best.</p>
        <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-10 my-10">
          {plansData?.map((plan, index) => (
            <div
              key={index}
              className={`w-full md:w-[45%] lg:w-[30%] p-5 px-10 bg-gray-50 shadow-lg rounded-lg flex flex-col items-center justify-start text-center transition-all duration-300 
              hover:ring-2 hover:ring-blue-500 hover:shadow-2xl`}
            >
              <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
              <p className="text-lg text-primary font-semibold mb-4">{plan.price}/month</p>
              <ul className="text-left mb-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 my-2 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Get the Plan
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Pricing;
