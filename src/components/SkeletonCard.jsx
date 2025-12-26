import Skeleton from "react-loading-skeleton";

const SkeletonCard = () => {
  return (
  <div className="shadow-lg w-100 rounded-lg p-2">
    <Skeleton height={200} />
    <Skeleton height={20} className="mt-2" />
    <Skeleton height={16} />
    <Skeleton height={16} />
    <Skeleton height={16} />
    <Skeleton width={100} height={16} />
  </div>
 );
}

export default SkeletonCard