"use client";

import React from "react";
import LottieAnimation from "./lottie-animation";
import comingSoon from "@/assets/lotties/coming-soon.json";

const ComingSoon = () => {
  return (
    <section className="flex justify-center flex-1 items-center h-[83vh]">
      <LottieAnimation animationData={comingSoon} height={300} />
    </section>
  );
};

export default ComingSoon;
