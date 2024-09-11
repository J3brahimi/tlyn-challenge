import { SVGProps, memo } from "react";

const SvgMore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="19"
    height="24"
    viewBox="0 0 19 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11 6.46479C11 7.29429 10.3295 7.97229 9.5 7.97229C8.6705 7.97229 8 7.30779 8 6.47979V6.46479C8 5.63529 8.6705 4.96479 9.5 4.96479C10.3295 4.96479 11 5.63529 11 6.46479Z"
      fill="#546E7A"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11 12.4792C11 13.3087 10.3295 13.9852 9.5 13.9852C8.6705 13.9852 8 13.3222 8 12.4927V12.4792C8 11.6497 8.6705 10.9792 9.5 10.9792C10.3295 10.9792 11 11.6497 11 12.4792Z"
      fill="#546E7A"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11 18.4925C11 19.322 10.3295 20 9.5 20C8.6705 20 8 19.3355 8 18.506V18.4925C8 17.663 8.6705 16.9925 9.5 16.9925C10.3295 16.9925 11 17.663 11 18.4925Z"
      fill="#546E7A"
    />
  </svg>
);

const Memo = memo(SvgMore);
export default Memo;
