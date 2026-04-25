const IndicatorCard = ({label, value}: { label: string, value: number | string }) => {
    return <div key={label} className="border-2 border-olympic-teal-500 p-6 rounded-lg shadow-lg text-center w-75 m-auto">
        <h3 className="text-xl font-light mb-2">{label}</h3>
        <p className={`text-4xl font-bold`}>
            {value}
        </p>
    </div>
}
export default IndicatorCard