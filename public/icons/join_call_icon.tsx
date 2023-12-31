import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="M13.38 20.86H7.31c-3.55 0-4.81-2.49-4.81-4.81v-8.1c0-3.46 1.35-4.81 4.81-4.81h6.07c3.46 0 4.81 1.35 4.81 4.81v8.1c0 3.46-1.35 4.81-4.81 4.81ZM7.31 4.66c-2.61 0-3.29.68-3.29 3.29v8.1c0 1.23.43 3.29 3.29 3.29h6.07c2.61 0 3.29-.68 3.29-3.29v-8.1c0-2.61-.68-3.29-3.29-3.29H7.31Z"
    />
    <path
      fill={props.color}
      d="M21.28 18.11c-.43 0-.98-.14-1.61-.58L17 15.66a.754.754 0 0 1-.32-.62V8.96c0-.25.12-.48.32-.62l2.67-1.87c1.19-.83 2.06-.59 2.47-.38.41.22 1.11.79 1.11 2.24v7.33c0 1.45-.7 2.03-1.11 2.24-.19.11-.49.21-.86.21Zm-3.09-3.47 2.35 1.64c.45.31.77.34.9.27.14-.07.29-.35.29-.89V8.34c0-.55-.16-.82-.29-.89-.13-.07-.45-.04-.9.27l-2.35 1.64v5.28ZM12 11.75c-1.24 0-2.25-1.01-2.25-2.25S10.76 7.25 12 7.25s2.25 1.01 2.25 2.25-1.01 2.25-2.25 2.25Zm0-3c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75Z"
    />
  </svg>
);
export default SvgComponent;
