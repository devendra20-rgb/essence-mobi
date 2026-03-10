"use client";
import { useEffect, useState } from "react";

export default function TrackingPixel() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(encodeURIComponent(window.location.href));
  }, []);

  if (!url) return null;

  return (
    <img
      src={`https://track.essencemobi.com/pixel?event=pageview&url=${url}`}
      width="1"
      height="1"
      style={{ display: "none" }}
      alt=""
    />
  );
}