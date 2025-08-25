import React from 'react';
import { Truck, Clock, Shield, MapPin, Package, AlertCircle, Phone } from 'lucide-react';

const ShippingPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">GreenPlore Marketplace - Shipping Policy</h1>
        <p className="text-gray-600">Thank you for shopping with GreenPlore. Please read the following terms and conditions that make up our Shipping Policy.</p>
        <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
      </div>

      {/* Where We Ship */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <MapPin className="w-6 h-6 text-green-600 mr-2" />
          <h2 className="text-xl font-semibold text-gray-900">Where We Ship</h2>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <p className="text-gray-700">
            We currently deliver across India, covering all metro cities and select non-metro locations.
          </p>
        </div>
      </div>

      {/* Shipping Partners */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <Truck className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-xl font-semibold text-gray-900">Shipping Partners</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-800 mb-2">📦 Non-Perishable Items</h3>
            <p className="text-gray-700 text-sm">
              We have partnered with trusted logistics providers to ensure safe and timely deliveries.
            </p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <h3 className="font-semibold text-orange-800 mb-2">🥬 Perishable Products</h3>
            <p className="text-gray-700 text-sm">
              Our dedicated logistics team hand-delivers items directly from vendors to customers in select cities (service availability varies by product and location).
            </p>
          </div>
        </div>
      </div>

      {/* Shipping & Delivery Times */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <Clock className="w-6 h-6 text-purple-600 mr-2" />
          <h2 className="text-xl font-semibold text-gray-900">Shipping & Delivery Times</h2>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mb-4">
          <p className="text-gray-700 mb-2">
            Most of our products are made to order. Vendors set the lead time, which is shown alongside each product and during checkout. 
            <span className="font-semibold"> Typically, this ranges from 5 to 7 business days.</span>
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">📅 Delivery Schedule</h3>
            <p className="text-gray-700 text-sm mb-2">Our logistics partners deliver between <span className="font-medium">8 AM and 9 PM</span></p>
            <p className="text-gray-700 text-sm">Monday through Saturday</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h3 className="font-semibold text-red-800 mb-2">🚫 No Delivery Days</h3>
            <p className="text-red-700 text-sm">We do not ship on Sundays or public holidays.</p>
          </div>
        </div>
      </div>

      {/* Order Processing */}
      <div className="mb-8 p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
        <div className="flex items-center mb-4">
          <Package className="w-6 h-6 text-yellow-600 mr-2" />
          <h2 className="text-xl font-semibold text-gray-900">Order Processing</h2>
        </div>
        <p className="text-gray-700">
          Orders are processed within <span className="font-semibold">2-3 business days</span>. 
          Please note that orders placed on weekends or holidays will be processed the next business day.
        </p>
      </div>

      {/* Shipping Charges */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <Shield className="w-6 h-6 text-green-600 mr-2" />
          <h2 className="text-xl font-semibold text-gray-900">Shipping Charges</h2>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <p className="text-gray-700 mb-2">
            Shipping costs depend on the weight of your order and are displayed at checkout.
          </p>
          <p className="text-gray-700">
            For prepaid orders, standard shipping rates apply as per the following slabs:
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Weight Slab</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Shipping Charge (INR)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-800">Under 500g</td>
                <td className="px-4 py-3 text-gray-600">₹75</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-800">500g to 1 Kg</td>
                <td className="px-4 py-3 text-gray-600">₹120</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-800">1 to 2 Kg</td>
                <td className="px-4 py-3 text-gray-600">₹160</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-800">2 to 3 Kg</td>
                <td className="px-4 py-3 text-gray-600">₹220</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-800">3 to 5 Kg</td>
                <td className="px-4 py-3 text-gray-600">₹285</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-800">5 to 7.5 Kg</td>
                <td className="px-4 py-3 text-gray-600">₹600</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-800">7.5 to 10 Kg</td>
                <td className="px-4 py-3 text-gray-600">₹690</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-800">10 to 15 Kg</td>
                <td className="px-4 py-3 text-gray-600">₹785</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-800">15 to 20 Kg</td>
                <td className="px-4 py-3 text-gray-600">₹1,050</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-800">20 to 40 Kg</td>
                <td className="px-4 py-3 text-gray-600">₹1,140</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-800">Over 40 Kg</td>
                <td className="px-4 py-3 text-gray-600">₹1,500+</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-800 mb-2">💰 Cash on Delivery (COD)</h3>
          <p className="text-gray-700 text-sm">
            COD is available in select cities with additional charges applied on top of the standard shipping fees. 
            COD orders cannot include digital products.
          </p>
        </div>
      </div>

      {/* Shipment Tracking */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <Package className="w-6 h-6 text-indigo-600 mr-2" />
          <h2 className="text-xl font-semibold text-gray-900">Shipment Tracking</h2>
        </div>
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
          <p className="text-gray-700">
            Once your order ships, you will receive a confirmation email with a tracking number. 
            The tracking is active from dispatch until 7 days after delivery.
          </p>
        </div>
      </div>

      {/* Issues and Support */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <AlertCircle className="w-6 h-6 text-red-600 mr-2" />
          <h2 className="text-xl font-semibold text-gray-900">Issues and Support</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <h3 className="font-semibold text-orange-800 mb-2">⏰ Delays and Lost Shipments</h3>
            <p className="text-gray-700 text-sm">
              While we strive for timely deliveries, unforeseen delays can occur. If your shipment is delayed or lost, 
              please contact us at <span className="font-medium text-orange-800">contact@greenplore.in</span> with your order details. 
              We will work with you to resend the order, provide a credit note, or refund your purchase as per availability and our policy.
            </p>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h3 className="font-semibold text-red-800 mb-2">📦 Damaged Packages</h3>
            <p className="text-gray-700 text-sm">
              If your package is damaged or tampered with upon delivery, please refuse to accept it and contact us immediately at 
              <span className="font-medium text-red-800"> contact@greenplore.in</span> with photos and order details. 
              We will arrange a replacement promptly.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mb-8">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-purple-800 mb-2">🏛️ Customs and Taxes</h3>
            <p className="text-gray-700 text-sm">
              Customers are responsible for any customs duties, taxes, or fees that may apply to their orders.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-2">🌍 International Shipping</h3>
            <p className="text-gray-700 text-sm">
              Currently, GreenPlore Marketplace ships only within India.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-green-100 p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <Phone className="w-6 h-6 text-green-600 mr-2" />
          <h2 className="text-xl font-semibold text-gray-900">Need Help?</h2>
        </div>
        <p className="text-gray-700 mb-2">
          For any shipping-related queries or issues, please contact our customer support team:
        </p>
        <div className="text-gray-600">
          <p className="font-medium">📧 Email: <span className="text-green-700">contact@greenplore.in</span></p>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          This shipping policy is effective as of August 2025 and may be updated from time to time.
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Last updated: August 26, 2025
        </p>
      </div>
    </div>
  );
};

export default ShippingPolicy;
