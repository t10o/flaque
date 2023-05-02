import clsx from "clsx";

import { SOCIAL_ACCOUNTS } from "@/constants/social-accounts";
import { AboutIconButton } from "@/features/about/AboutIconButton";

export const About = (): JSX.Element => {
  return (
    <div
      className={clsx(
        "flex",
        "col-span-1",
        "py-10",
        "px-10",
        "max-w-4xl",
        "mx-auto",
        "shadow-up",
        "rounded-lg"
      )}
    >
      <div
        className={clsx(
          "rounded-full",
          "border-2",
          "w-48",
          "h-48",
          "flex",
          "justify-center",
          "items-center",
          "mr-10"
        )}
      >
        アイコン欲しい
      </div>

      <div
        className={clsx("flex", "flex-col", "justify-end", "overflow-hidden")}
      >
        <p className={clsx("text-3xl", "font-semibold", "mb-2")}>t10o</p>

        <p className={clsx("text-gray-500", "text-sm", "mb-4")}>
          フロントエンドエンジニア（自称）
        </p>

        <p className={clsx("mb-auto")}>浅瀬でパチャついてます。</p>

        <div className={clsx("flex")}>
          {SOCIAL_ACCOUNTS.map((socialAccount) => (
            <AboutIconButton
              key={socialAccount.href}
              color={socialAccount.color}
              href={socialAccount.href}
              icon={socialAccount.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

About.displayName = "About";
