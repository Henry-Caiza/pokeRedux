

function LoadingSkeleton() {
    return (
        <div className='grid grid-flow-row grid-cols-4  gap-4 w-full mt-6'>
            <div className="bg-slate-300 border  rounded-lg p-2 h-56">
            </div>
            <div className="bg-slate-300 border  rounded-lg p-2">
            </div>
            <div className="bg-slate-300 border  rounded-lg p-2">
            </div>
            <div className="bg-slate-300 border  rounded-lg p-2">
            </div>
        </div>
    )
}

export { LoadingSkeleton }