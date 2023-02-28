import clsx from "clsx";
import Skeleton from "react-loading-skeleton";

export const BlogContentSkeleton = (): JSX.Element => {
  return (
    <div className={clsx("mx-auto", "max-w-7xl", "px-4")}>
      <div
        className={clsx(
          "my-20",
          "min-w-[72px]",
          "min-h-[72px]",
          "relative",
          "flex",
          "justify-center",
          "items-center"
        )}
      >
        <Skeleton
          className={clsx("absolute", "inset-0")}
          width="75px"
          height="75px"
        />
      </div>

      <Skeleton count={2} />

      <div className={clsx("mt-10")}>
        <Skeleton className={clsx("mb-2")} width="33%" />

        <div className={clsx("mb-8")}>
          <Skeleton width="33%" />
        </div>

        <Skeleton count={20} />
      </div>
    </div>
  );
};

BlogContentSkeleton.displayName = "BlogContentSkeleton";
