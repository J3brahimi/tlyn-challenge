import type { SVGProps } from "react";

export default function Show(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      {...props}
    >
      <mask
        id="mask0_1383_4008"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="6"
        width="20"
        height="15"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.000396729 6.79395H20V20.5379H0.000396729V6.79395Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_1383_4008)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.5654 20.5379H4.4354C1.9904 20.5379 0.000396729 18.5489 0.000396729 16.1029V11.2279C0.000396729 8.78295 1.9904 6.79395 4.4354 6.79395H5.3684C5.7824 6.79395 6.1184 7.12995 6.1184 7.54395C6.1184 7.95795 5.7824 8.29395 5.3684 8.29395H4.4354C2.8164 8.29395 1.5004 9.60995 1.5004 11.2279V16.1029C1.5004 17.7219 2.8164 19.0379 4.4354 19.0379H15.5654C17.1834 19.0379 18.5004 17.7219 18.5004 16.1029V11.2189C18.5004 9.60595 17.1884 8.29395 15.5764 8.29395H14.6334C14.2194 8.29395 13.8834 7.95795 13.8834 7.54395C13.8834 7.12995 14.2194 6.79395 14.6334 6.79395H15.5764C18.0154 6.79395 20.0004 8.77895 20.0004 11.2189V16.1029C20.0004 18.5489 18.0104 20.5379 15.5654 20.5379Z"
          fill="#3356A6"
        />
      </g>
      <mask
        id="mask1_1383_4008"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="9"
        y="0"
        width="2"
        height="14"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.25 0H10.75V13.5409H9.25V0Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask1_1383_4008)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 13.541C9.586 13.541 9.25 13.205 9.25 12.791V0.75C9.25 0.336 9.586 0 10 0C10.414 0 10.75 0.336 10.75 0.75V12.791C10.75 13.205 10.414 13.541 10 13.541Z"
          fill="#3356A6"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.085 4.42902C6.894 4.42902 6.702 4.35602 6.556 4.21002C6.263 3.91802 6.261 3.44402 6.554 3.15002L9.469 0.222016C9.75 -0.0609844 10.25 -0.0609844 10.531 0.222016L13.447 3.15002C13.739 3.44402 13.738 3.91802 13.445 4.21002C13.151 4.50202 12.677 4.50202 12.385 4.20802L10 1.81402L7.616 4.20802C7.47 4.35602 7.277 4.42902 7.085 4.42902Z"
        fill="#3356A6"
      />
    </svg>
  );
}
