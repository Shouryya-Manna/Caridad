export default function RaisedAmount() {
  return (
    <div className="max-w-[310px] w-full mb-8">
      <div className="flex justify-between mb-3 text-sm font-medium">
        <span>Raised: $80,935</span>
        <span>Goal: $85,000</span>
      </div>
      <div className="h-2 w-full rounded-full bg-gray-200">
        <div className="h-full w-[95%] rounded-full bg-yellow-400"></div>
      </div>
    </div>
  );
}
