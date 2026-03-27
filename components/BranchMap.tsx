"use client";

import dynamic from "next/dynamic";

export const BranchMap = dynamic(() => import("./BranchMapClient").then((m) => m.BranchMapClient), {
  ssr: false,
});

