import clsx from "clsx";

export const About = (): JSX.Element => {
  return (
    <div className={clsx("px-4", "max-w-7xl", "mx-auto")}>
      何か自己紹介的なものを
    </div>
  );
};

About.displayName = "About";
