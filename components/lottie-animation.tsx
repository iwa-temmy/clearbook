"use client";

import { useRef, useEffect } from "react";

const LottieAnimation = ({
  animationData,
  height = "unset",
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  animationData: any;
  height?: number | string;
}) => {
  const container = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if running on the client-side
      import("lottie-web").then((lottie) => {
        if (container.current) {
          lottie.default.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: animationData,
          });
        }
      });
    }
  }, [animationData]);

  return (
    <div
      ref={container}
      className="overflow-hidden"
      style={{ height: height }}
    />
  );
};

export default LottieAnimation;
