import { SVGProps, memo } from "react";

const SvgSupport = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.98C3 3.34 4.34 2.01 6 2.01H18C19.66 2.01 21 3.34 21 4.98V15.89C21 17.52 19.66 18.86 18 18.86Z"
      stroke="#546E7A"
      strokeWidth="1.5"
      stroke-miterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 9.16C7 8.23 7.76 7.47 8.69 7.47C9.62 7.47 10.38 8.23 10.38 9.16C10.38 11.04 7.71 11.24 7.12 13.03C7 13.4 7.31 13.77 7.7 13.77H10.38M16.04 13.76V8.05C16.0405 7.92365 15.9998 7.80058 15.924 7.6995C15.8482 7.59842 15.7414 7.52485 15.62 7.49C15.4977 7.45546 15.3676 7.46112 15.2488 7.50613C15.1299 7.55113 15.0287 7.63312 14.96 7.74C14.24 8.9 13.46 10.22 12.78 11.38C12.67 11.57 12.67 11.82 12.78 12.01C12.89 12.2 13.1 12.32 13.33 12.32H17"
      stroke="#546E7A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Memo = memo(SvgSupport);
export default Memo;
