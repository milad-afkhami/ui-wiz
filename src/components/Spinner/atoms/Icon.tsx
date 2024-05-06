import { keyframes } from "goober";
import { type TextProps } from "style-wiz";

const rotateInner = keyframes`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }
  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`;
const rotateOuter = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export default function SpinnerIcon({
  color = "text-primary-main",
  size = 48,
}: {
  color?: TextProps["color"];
  size?: number;
}) {
  return (
    <svg
      color={color}
      viewBox="22 22 44 44"
      role="progressbar"
      style={{
        animation: `${rotateOuter} 1.4s linear infinite`,
      }}
      width={size}
      height={size}
    >
      <circle
        cx="44"
        cy="44"
        r="20.2"
        fill="none"
        stroke={`var(--color-${color})`}
        strokeWidth="3.6"
        strokeDasharray="80px 200px"
        style={{
          animation: `${rotateInner} 1.4s ease-in-out infinite`,
        }}
      />
    </svg>
  );
}
