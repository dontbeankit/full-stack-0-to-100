
export const NextPayout = ({title, infoMsg, orderCount, amount, nextDate})=>{

    return <div className="rounded-lg shadow-md">
            <div className="rounded-t-lg bg-gray-900 p-2">
        <div className="flex rounded-t-4 items-center">
            <div className="text-grey-400 align-middle">
            {title}
            </div>
            <div className="ml-1 fill-grey-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="size-4">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
                </svg>
            </div>
        </div>
        <div className="mt-2 md:flex justify-between items-center">
            <div className="text-lg font-bold text-cyan-400">
                ${amount}
            </div>
            <div>
                {orderCount ? <div className="flex text-sm text-cyan-500">
                    {orderCount} order(s) <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                            <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                            </svg>

                </div> : null}
            </div>
        </div>
    </div>
    {nextDate ? <div className="md:flex justify-between bg-cyan-400 p-2 rounded-b-lg text-xs text-gray-800">
            <div className="font-semibold">
            Next Payment Date:
            </div> {nextDate}
        </div> : null}
    </div>
    
}