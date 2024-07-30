import { Typography } from "@material-tailwind/react";
import React from "react";

export default function DividerVertical() {
   return (
      <Typography placeholder={""} className="content-center">
         <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-2.5 rotate-90 mr-0"
         >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
         </svg>
      </Typography>
   );
}
