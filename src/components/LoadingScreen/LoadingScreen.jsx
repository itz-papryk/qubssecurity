import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./LoadingScreen.sass";

export default function LoadingScreen({ isLoading }) {
  let loading = useRef(null);
  let loadingAttr = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".loading-wrapper", { opacity: 1, duration: 1 })
      .to(
        ".dot-falling",
        {
          duration: 3,
        },
        "-=0.3"
      )
      .to(".loading-wrapper", { opacity: 0, duration: 0.5 });

    setTimeout(() => {
      isLoading(true);
    }, 4000);
  }, []);
  return (
    <div className="loading-wrapper">
      {/*<div className="loading-bar">*/}
      {/*  <div className="loading-bar-fill" ref={(e) => (loading = e)} />*/}
      {/*</div>*/}
      <div className="dot-falling" />
    </div>
  );
}
