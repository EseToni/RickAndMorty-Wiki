import "./skeletonCard.css"

export default function SkeletonCard(arraySkeleton) {
    return (
        <div className="container px-9 py-0 mx-300 animate-pulse">
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 ">
                {Array.from({ length: arraySkeleton.arraySkeleton }, (_, index ) => (
                    <div key={index} className="w-full ">
                        <div className="w-full bg-gray-300 rounded-lg dark:bg-white-600 skeletonCard">
                            <div className="w-full bg-red-300 rounded-lg dark:bg-gray-400 skeletonImg"></div>
                            <h1 className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-400 skeletonLineH1"></h1>
                            <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-400 skeletonLineP"></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}
