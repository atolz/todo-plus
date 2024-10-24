import React from "react";
import avatar from "../assets/avatar.png";

type Props = { name: string };

const ProfileBar = ({ name }: Props) => {
  return (
    <div className=" h-32 bg-primary flex items-center py-4 px-8 text-white">
      <div className="flex gap-4">
        <img width={50} height={50} src={avatar} alt="user profile image" className=" w-[50px] h-[50px] rounded-full" />
        <div className="flex flex-col gap-1">
          <h4 className=" text-base font-medium [text-shadow:_0_3px_0_var(--shadow)]">Hello, {name}</h4>
          <p className=" italic font-thin max-w-[221px] text-2xl [text-shadow:_0_3px_0_var(--shadow)]">What are your plans for today?</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileBar;
