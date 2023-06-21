

function LoadingSkeleton() {
    return (
        <div className='grid grid-flow-row grid-cols-5  gap-8 w-full mt-6'>
            <div className="bg-white   rounded-lg  h-60 card-skelton">
            </div>
            <div className=" bg-white rounded-lg  card-skelton">
            </div>
            <div className=" bg-white rounded-lg card-skelton">
            </div>
            <div className="  bg-white rounded-lg  card-skelton">
            </div>
            <div className="  bg-white rounded-lg card-skelton">
            </div>
        </div>
    )
}

export { LoadingSkeleton }