import { SVGProps } from "react";

export default function TrueTicket(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="10"
      viewBox="0 0 12 10"
      fill="none"
      {...props}
    >
      <path
        d="M11.4867 2.66326L5.15333 8.99659C4.92667 9.22326 4.63333 9.32992 4.32667 9.32992C4.03333 9.32992 3.74 9.22326 3.51333 8.99659L0.34 5.83659C-0.113333 5.36992 -0.113333 4.63659 0.34 4.18326C0.793333 3.72992 1.54 3.72992 1.99333 4.18326L4.32667 6.51659L9.83333 1.00992C10.2867 0.556589 11.0333 0.556589 11.4867 1.00992C11.94 1.47659 11.94 2.20992 11.4867 2.66326Z"
        fill="#F8F9FF"
      />
    </svg>
  );
}
