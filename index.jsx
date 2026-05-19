export default function SocialMediaDashboard() {
  const orders = [
    {
      id: '#ORD-1021',
      customer: 'Aarav Sharma',
      platform: 'Instagram',
      status: 'Preparing',
      payment: 'Paid',
      total: '$25'
    },
    {
      id: '#ORD-1022',
      customer: 'Sanjana KC',
      platform: 'WhatsApp',
      status: 'Delivered',
      payment: 'Paid',
      total: '$40'
    },
    {
      id: '#ORD-1023',
      customer: 'Rohan Thapa',
      platform: 'Facebook',
      status: 'Pending',
      payment: 'Unpaid',
      total: '$18'
    },
    {
      id: '#ORD-1024',
      customer: 'Emily Rai',
      platform: 'TikTok',
      status: 'On Delivery',
      payment: 'Paid',
      total: '$52'
    }
  ];

  const messages = [
    {
      name: 'Instagram DM',
      msg: 'I want to order 2 burgers and 1 cold coffee.',
      time: '2 min ago'
    },
    {
      name: 'WhatsApp Order',
      msg: 'Can you deliver by 7 PM today?',
      time: '5 min ago'
    },
    {
      name: 'Facebook Message',
      msg: 'Do you have family pizza combo available?',
      time: '12 min ago'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="flex flex-col md:flex-row gap-6">

        {/* Sidebar */}
        <div className="w-full md:w-72 bg-zinc-900 rounded-3xl p-6 shadow-2xl border border-zinc-800">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold">
              S
            </div>
            <div>
              <h1 className="text-2xl font-bold">Social Hub</h1>
              <p className="text-zinc-400 text-sm">Unified Business Dashboard</p>
            </div>
          </div>

          <div className="space-y-3">
            {[
              'Dashboard',
              'Orders',
              'Messages',
              'Customers',
              'Analytics',
              'Payments',
              'Delivery Tracking',
              'Settings'
            ].map((item) => (
              <div
                key={item}
                className="p-4 rounded-2xl bg-zinc-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all cursor-pointer font-medium"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10 p-5 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600">
            <h2 className="font-bold text-lg">Connected Platforms</h2>
            <div className="mt-4 space-y-2 text-sm">
              <p>• Instagram</p>
              <p>• WhatsApp</p>
              <p>• Facebook</p>
              <p>• TikTok</p>
              <p>• Telegram</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-6">

          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
            <div>
              <h1 className="text-4xl font-bold">Business Overview</h1>
              <p className="text-zinc-400 mt-2">
                Manage all social media orders in one place.
              </p>
            </div>

            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-2xl bg-zinc-800 hover:bg-zinc-700 transition-all">
                Export Reports
              </button>
              <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transition-all">
                + New Order
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: 'Total Orders',
                value: '1,248',
                growth: '+12%'
              },
              {
                title: 'Revenue',
                value: '$14,860',
                growth: '+21%'
              },
              {
                title: 'Customers',
                value: '892',
                growth: '+8%'
              },
              {
                title: 'Pending Orders',
                value: '24',
                growth: '-4%'
              }
            ].map((card) => (
              <div
                key={card.title}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl"
              >
                <p className="text-zinc-400 text-sm">{card.title}</p>
                <h2 className="text-3xl font-bold mt-3">{card.value}</h2>
                <p className="text-green-400 mt-2">{card.growth} this month</p>
              </div>
            ))}
          </div>

          {/* Orders + Messages */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

            {/* Orders Table */}
            <div className="xl:col-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Recent Orders</h2>
                <button className="text-purple-400 hover:text-purple-300">
                  View All
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-zinc-400 border-b border-zinc-800">
                      <th className="pb-4">Order ID</th>
                      <th className="pb-4">Customer</th>
                      <th className="pb-4">Platform</th>
                      <th className="pb-4">Status</th>
                      <th className="pb-4">Payment</th>
                      <th className="pb-4">Total</th>
                    </tr>
                  </thead>

                  <tbody>
                    {orders.map((order) => (
                      <tr
                        key={order.id}
                        className="border-b border-zinc-800 hover:bg-zinc-800/40 transition-all"
                      >
                        <td className="py-5 font-medium">{order.id}</td>
                        <td>{order.customer}</td>
                        <td>{order.platform}</td>
                        <td>
                          <span className="px-3 py-1 rounded-full text-sm bg-purple-600/20 text-purple-300">
                            {order.status}
                          </span>
                        </td>
                        <td>
                          <span
                            className={`px-3 py-1 rounded-full text-sm ${
                              order.payment === 'Paid'
                                ? 'bg-green-600/20 text-green-300'
                                : 'bg-red-600/20 text-red-300'
                            }`}
                          >
                            {order.payment}
                          </span>
                        </td>
                        <td className="font-semibold">{order.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Messages */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Live Messages</h2>
                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>
              </div>

              <div className="space-y-5">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 transition-all"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">{msg.name}</h3>
                      <p className="text-xs text-zinc-400">{msg.time}</p>
                    </div>
                    <p className="text-zinc-300 text-sm">{msg.msg}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600">
                <h3 className="text-xl font-bold mb-2">AI Automation</h3>
                <p className="text-sm text-white/90">
                  Auto reply customers, track delivery status, and update orders automatically.
                </p>
              </div>
            </div>
          </div>

          {/* Analytics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h2 className="text-2xl font-bold mb-6">Platform Traffic</h2>

              <div className="space-y-5">
                {[
                  { name: 'Instagram', value: '82%' },
                  { name: 'WhatsApp', value: '74%' },
                  { name: 'Facebook', value: '61%' },
                  { name: 'TikTok', value: '48%' }
                ].map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between mb-2">
                      <p>{item.name}</p>
                      <p>{item.value}</p>
                    </div>
                    <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        style={{ width: item.value }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h2 className="text-2xl font-bold mb-6">Delivery Tracking</h2>

              <div className="space-y-4">
                {[
                  'Order Confirmed',
                  'Preparing Food',
                  'Picked By Rider',
                  'On The Way',
                  'Delivered Successfully'
                ].map((step, index) => (
                  <div key={step} className="flex items-center gap-4">
                    <div className={`w-5 h-5 rounded-full ${index < 4 ? 'bg-green-400' : 'bg-zinc-700'}`}></div>
                    <p className="text-zinc-300">{step}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 rounded-2xl bg-zinc-800">
                <p className="text-zinc-400 text-sm">Current Rider</p>
                <h3 className="text-xl font-bold mt-1">Ram Bahadur</h3>
                <p className="text-green-400 mt-2">Estimated arrival: 18 mins</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
