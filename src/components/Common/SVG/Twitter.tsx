import { SVGProps, memo } from "react";

const SvgTwitter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path
      d="M17.5475 5.98396C17.5552 6.15996 17.5552 6.32796 17.5552 6.50396C17.563 11.84 13.6426 18 6.47319 18C4.35865 18 2.2827 17.368 0.5 16.184C0.808692 16.224 1.11738 16.24 1.42608 16.24C3.1779 16.24 4.88343 15.632 6.26483 14.504C4.59789 14.472 3.1316 13.344 2.62226 11.696C3.20877 11.816 3.81072 11.792 4.3818 11.624C2.56824 11.256 1.26401 9.59997 1.2563 7.67197C1.2563 7.65597 1.2563 7.63997 1.2563 7.62397C1.79651 7.93597 2.40617 8.11197 3.02356 8.12797C1.31803 6.94396 0.78554 4.58396 1.81966 2.73595C3.80301 5.26396 6.72015 6.79196 9.85337 6.95996C9.53696 5.55996 9.96913 4.08796 10.9801 3.09595C12.5467 1.56795 15.0162 1.64795 16.498 3.27195C17.37 3.09595 18.2112 2.75995 18.9752 2.28795C18.682 3.22395 18.0723 4.01596 17.262 4.51996C18.0337 4.42396 18.79 4.20796 19.5 3.88795C18.9752 4.70396 18.3115 5.40796 17.5475 5.98396Z"
      fill="#90A4AE"
    />
  </svg>
);

const Memo = memo(SvgTwitter);
export default Memo;
