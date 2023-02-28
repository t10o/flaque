import clsx from "clsx";
import Skeleton from "react-loading-skeleton";

export const BlogCardSkeleton = (): JSX.Element => {
  return (
    <div
      className={clsx("flex", "p-4", "rounded-lg", "shadow-lg", "col-span-1")}
    >
      <div
        className={clsx(
          "mr-8",
          "min-w-[72px]",
          "h-full",
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

      <div
        className={clsx(
          "w-full",
          "flex",
          "flex-col",
          "justify-end",
          "overflow-hidden"
        )}
      >
        <div className={clsx("mb-auto")}>
          <Skeleton count={2} />
        </div>

        <Skeleton width="50%" />

        <Skeleton width="33%" />
      </div>
    </div>
  );
};

BlogCardSkeleton.displayName = "BlogCardSkeleton";
