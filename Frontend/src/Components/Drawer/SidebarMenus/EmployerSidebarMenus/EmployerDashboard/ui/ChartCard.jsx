const ChartCard = ({ title, children }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
    <h3 className="text-lg font-bold mb-4">{title}</h3>
    {children}
  </div>
);

export default ChartCard;
