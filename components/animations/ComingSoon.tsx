"use client";

import { comingSoonAnimationData } from "@/constants/assetPaths";
import Lottie from "lottie-react";

const ComingSoon = () => {
  return (
    <div className="pt-[2.95rem]">
      <Lottie
        animationData={comingSoonAnimationData}
        style={{ height: "300px" }}
      />
    </div>
  );
};

export default ComingSoon;
