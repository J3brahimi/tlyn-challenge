import { SVGProps, memo } from "react";

const SvgTravel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M12 13.4299C13.7231 13.4299 15.12 12.0331 15.12 10.3099C15.12 8.58681 13.7231 7.18994 12 7.18994C10.2769 7.18994 8.88 8.58681 8.88 10.3099C8.88 12.0331 10.2769 13.4299 12 13.4299Z"
      stroke="#546E7A"
      strokeWidth="1.5"
    />
    <path
      d="M3.61995 8.49C5.58995 -0.169998 18.4199 -0.159997 20.3799 8.5C21.5299 13.58 18.3699 17.88 15.5999 20.54C13.5899 22.48 10.4099 22.48 8.38995 20.54C5.62995 17.88 2.46995 13.57 3.61995 8.49Z"
      stroke="#546E7A"
      strokeWidth="1.5"
    />
  </svg>
);

const Memo = memo(SvgTravel);
export default Memo;
