import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./LoadingScreen.sass";

export default function LoadingScreen({ isLoading }) {
  let loading = useRef(null);
  let loadingAttr = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".loading-wrapper", { opacity: 1, duration: 0.5 })
      .to(
        loading,
        {
          width: "100%",
          duration: 5,
        },
        "-=0.5"
      )
      .to(".loading-wrapper", { opacity: 0, duration: 0.5 });

    setTimeout(() => {
      isLoading(true);
    }, 5500);
  }, []);
  return (
    <div className="loading-wrapper">
      <div className="loading-text">Loading...</div>
      <div className="loading-bar">
        <div className="loading-bar-fill" ref={(e) => (loading = e)} />
      </div>
    </div>
  );
}
