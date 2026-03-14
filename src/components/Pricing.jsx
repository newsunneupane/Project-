export default function Pricing() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900">Pricing Plans</h2>
        <p className="text-gray-600 mt-4 text-lg">
          Choose the plan that fits your needs. Upgrade anytime.
        </p>

        {/* Pricing Cards */}
        <div className="mt-12 flex flex-col md:flex-row gap-8 justify-center">

          {/* Basic Plan */}
          <div className="flex-1 border rounded-xl p-8 shadow hover:shadow-lg transition flex flex-col">
            <h3 className="text-xl font-semibold text-gray-900">Basic</h3>
            <p className="mt-2 text-gray-600">$19 / month</p>
            <ul className="mt-4 space-y-2 text-gray-600 flex-1">
              <li>✔ 5 Projects</li>
              <li>✔ 10 GB Storage</li>
              <li>✔ Basic Support</li>
            </ul>
            <button className="mt-6 bg-indigo-500 text-white px-6 py-3 rounded-full hover:bg-indigo-600 transition">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="flex-1 border rounded-xl p-8 shadow-lg flex flex-col bg-blue-300">
            <h3 className="text-xl font-semibold text-gray-900">Pro</h3>
            <p className="mt-2 text-gray-600">$49 / month</p>
            <ul className="mt-4 space-y-2 text-gray-600 flex-1">
              <li>✔ 20 Projects</li>
              <li>✔ 100 GB Storage</li>
              <li>✔ Priority Support</li>
            </ul>
            <button className="mt-6 bg-indigo-500 text-white px-6 py-3 rounded-full hover:bg-indigo-600 transition">
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="flex-1 border rounded-xl p-8 shadow hover:shadow-lg transition flex flex-col">
            <h3 className="text-xl font-semibold text-gray-900">Enterprise</h3>
            <p className="mt-2 text-gray-600">$99 / month</p>
            <ul className="mt-4 space-y-2 text-gray-600 flex-1">
              <li>✔ Unlimited Projects</li>
              <li>✔ 1 TB Storage</li>
              <li>✔ Dedicated Support</li>
            </ul>
            <button className="mt-6 bg-indigo-500 text-white px-6 py-3 rounded-full hover:bg-indigo-600 transition">
              Get Started
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}