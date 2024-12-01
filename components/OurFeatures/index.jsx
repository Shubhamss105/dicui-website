"use client";
import { FaTable, FaBirthdayCake, FaAdvertising, FaUtensils, FaQrcode, FaLock, FaCashRegister, FaChartLine, FaTruck, FaGlobe, FaUserCircle } from "react-icons/fa";
import { FcAdvertising } from "react-icons/fc";
import { motion } from "framer-motion";

const features = [
  {
    name: 'Customer Retention',
    description:
      'Boost customer loyalty by sending personalized greetings, birthday and anniversary wishes, and exclusive discount coupons via email, WhatsApp, or the DQ app.',
    icon: FaBirthdayCake,
    bgColor: 'bg-pink-500',
  },
  {
    name: 'Digital Media Marketing',
    description:
      'Leverage the DiCui app to promote offers and stay connected with customers through engaging marketing tools.',
    icon: FcAdvertising,
    bgColor: 'bg-purple-500',
  },
  {
    name: 'Table Reservation',
    description:
      'Allow customers to book their tables conveniently through the app, ensuring a seamless dining experience.',
    icon: FaTable,
    bgColor: 'bg-blue-500',
  },
  {
    name: 'Dishes Reservation',
    description:
      'Enable pre-selection of dishes, so customers can save time and enjoy their meals without delays.',
    icon: FaUtensils,
    bgColor: 'bg-orange-500',
  },
  {
    name: 'Pay Bills Through the App',
    description:
      'Simplify transactions with secure, hassle-free in-app bill payments.',
    icon: FaCashRegister,
    bgColor: 'bg-yellow-500',
  },
  {
    name: 'Restaurants Own Delivery',
    description:
      'Manage deliveries independently and maintain complete control over orders and customer satisfaction.',
    icon: FaTruck,
    bgColor: 'bg-purple-500',
  },
  {
    name: 'Restaurants Own Website Maker',
    description:
      'Create a professional website for your restaurant effortlessly with customizable templates.',
    icon: FaGlobe,
    bgColor: 'bg-indigo-500',
  },
  {
    name: 'Customer Data Management',
    description:
      'Store and analyze customer data to understand preferences and personalize services.',
    icon: FaUserCircle,
    bgColor: 'bg-teal-500',
  },
  {
    name: 'Customizable QR Codes',
    description:
      'Design tailored QR codes for menus, promotions, and other needs, enhancing your restaurant’s branding.',
    icon: FaQrcode,
    bgColor: 'bg-red-500',
  },
];

export default function OurFeatures() {
    return (
      <div className="bg-white py-8 mb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold text-indigo-600">Scale Faster</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Our Features
            </p>
            <p className="mt-6 text-lg text-gray-600">
              Streamline every part of your restaurant’s operations with DQ.
            </p>
          </div>
          <div className="mx-auto mt-16 w-full">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-16 animate_top z-40 rounded-lg bg-white p-7 shadow-lg transition-all hover:shadow-xl"
                >
                  <dt className="text-base font-semibold text-gray-900">
                    <div
                      className={`absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg ${feature.bgColor}`}
                    >
                      <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base text-gray-600">{feature.description}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    );
  }
