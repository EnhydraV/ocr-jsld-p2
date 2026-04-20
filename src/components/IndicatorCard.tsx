const IndicatorCard = ({label, value, color}: { label: string, value: number | string, color: string }) => {
    return <div key={label} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-xl font-semibold mb-2">{label}</h3>
        <p className={`text-4xl font-bold ${color}`}>
            {value}
        </p>
    </div>
}
export default IndicatorCard