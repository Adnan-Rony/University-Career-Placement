const COLORS = ["#f59e0b", "#10b981", "#ef4444"];

const StatusBreakdown = ({ data, hoveredStatus, setHoveredStatus }) => {
  const total = data.reduce((s, i) => s + i.count, 0);

  return (
    <div className="space-y-4">
      {data.map((item, i) => {
        const percentage = ((item.count / total) * 100).toFixed(1);

        return (
          <div
            key={item.status}
            className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            onMouseEnter={() => setHoveredStatus(item.status)}
            onMouseLeave={() => setHoveredStatus(null)}
          >
            <div className="flex justify-between mb-2">
              <span className="font-semibold">{item.status}</span>
              <span style={{ color: COLORS[i] }}>{item.count}</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="h-2 rounded-full"
                style={{
                  width: `${percentage}%`,
                  backgroundColor: COLORS[i],
                  opacity: hoveredStatus === item.status ? 1 : 0.7,
                }}
              ></div>
            </div>

            <p className="text-sm text-gray-500">{percentage}%</p>
          </div>
        );
      })}
    </div>
  );
};

export default StatusBreakdown;
