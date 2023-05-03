import clsx from "clsx";

import { SOCIAL_ACCOUNTS } from "@/constants/social-accounts";
import { ProfileCard } from "@/features/profile/ProfileCard";
import { ProfileIconButton } from "@/features/profile/ProfileIconButton";

export const Profile = (): JSX.Element => {
  return (
    <ProfileCard>
      <div
        className={clsx(
          "rounded-full",
          "border-2",
          "w-48",
          "h-48",
          "flex",
          "justify-center",
          "items-center",
          "mr-10",
          "mb-6",
          "lg:mb-0"
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

        <p className={clsx("mb-6")}>浅瀬でパチャついてます。</p>

        <div className={clsx("flex")}>
          {SOCIAL_ACCOUNTS.map((socialAccount) => (
            <ProfileIconButton
              key={socialAccount.href}
              color={socialAccount.color}
              href={socialAccount.href}
              icon={socialAccount.icon}
            />
          ))}
        </div>
      </div>
    </ProfileCard>
  );
};

Profile.displayName = "About";
