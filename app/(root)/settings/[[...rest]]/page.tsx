import { SignOutButton, UserProfile } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import React from "react";

const page = () => {
  return (
    <div className="page__wrapper ">
      <h1 className="text-2xl font-bold">Settings</h1>
      <div className="pt-5">
        <UserProfile
          appearance={{
            baseTheme: dark,
          }}
        />
        <div className="pt-4">
          <div className="bg-red-700 p-2 rounded-md max-w-20">
            <SignOutButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
