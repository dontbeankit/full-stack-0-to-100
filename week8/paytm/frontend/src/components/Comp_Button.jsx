export function Button({label, onClick}){
    return <div>
        <button onClick={onClick} type="button" class=" w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 mt-4 mb-2">{label}</button>
    </div>
}