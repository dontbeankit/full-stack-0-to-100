
export const BalanceCard = ({title, amount})=>{

    return <div className="grid grid-cols-6 mx-4">
            <div className="col-span-1 bg-white rounded-lg shadow-sm px-6 py-4 my-4">
        <div className="flex items-center">
        <div className="text-gray-700 font-semibold align-middle">
        {title}
        </div>
            
                
        </div>
        <div className="mt-2 md:flex justify-between items-center">
            <div className="text-3xl font-bold text-gray-700">
                Rs. {amount}
            </div>
            
        </div>
    </div>
    </div>
    
}