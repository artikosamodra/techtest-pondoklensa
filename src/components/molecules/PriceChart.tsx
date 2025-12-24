import { formatIDR } from "@/libs/utils/format";

const dayPrice = [
  { day: 1, multiplier: 1.0 },
  { day: 3, multiplier: 2.0 }, // Aturan 2+1
  { day: 7, multiplier: 4.5 },
  { day: 10, multiplier: 7.6 },
  { day: 12, multiplier: 7.2 },
  { day: 15, multiplier: 8.0 },
];

type PriceChartProps = {
  basePrice: number;
  onClick: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
};

const PriceChart = ({ basePrice, onClick }: PriceChartProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <button
        onClick={onClick}
        className="size-6 rounded-full bg-brand-red-100 hover:bg-red-500 shadow-md animates absolute top-2/7 right-2/7 z-20 font-medium text-white"
      >
        X
      </button>
      <table className="w-full max-w-150 text-left text-sm rounded-md overflow-hidden p-5 bg-white relative shadow-md">
        <thead className="bg-brand-blue-200 text-white font-medium">
          <tr>
            <th className="px-4 py-3 border-b">Days</th>
            <th className="px-4 py-3 border-b">Rental Price</th>
            <th className="px-4 py-3 border-b">Price per day</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {dayPrice.map((rule) => {
            const totalPrice = basePrice * rule.multiplier;
            const perDay = totalPrice / rule.day;

            return (
              <tr
                key={rule.day}
                className="hover:bg-blue-50/50 transition-colors group"
              >
                <td className="px-4 py-2">
                  <span className="text-gray-700">{rule.day}</span>
                  {rule.day === 3}
                </td>
                <td className="px-4 py-2 text-brand-blue">
                  {formatIDR(totalPrice)}
                </td>
                <td className="px-4 py-2  group-hover:text-gray-600 transition-colors italic">
                  {formatIDR(perDay)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PriceChart;
