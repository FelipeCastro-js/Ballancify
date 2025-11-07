import { TColor } from "@/components/constants/colors";
import React from "react";
import { Defs, LinearGradient, Path, Stop, Svg } from "react-native-svg";

interface CustomArcProps {
  start?: number;
  end?: number;
  width?: number;
  blurWidth?: number;
  size?: number;
}

export default function CustomArc({
  start = 0,
  end = 270,
  width = 15,
  blurWidth = 6,
  size = 200,
}: CustomArcProps) {
  const radius = size / 2;
  const startDeg = 135 + start;
  const deg2rad = (deg: number) => (deg * Math.PI) / 180;

  const polar = (angleRad: number) => ({
    x: radius + radius * Math.cos(angleRad),
    y: radius + radius * Math.sin(angleRad),
  });

  const arcPath = (sDeg: number, spanDeg: number) => {
    const s = polar(deg2rad(sDeg));
    const e = polar(deg2rad(sDeg + spanDeg));
    const largeArcFlag = spanDeg > 180 ? 1 : 0;
    return [
      "M",
      s.x,
      s.y,
      "A",
      radius,
      radius,
      0,
      largeArcFlag,
      1,
      e.x,
      e.y,
    ].join(" ");
  };

  const bgD = arcPath(startDeg, 270);
  const activeD = arcPath(startDeg, end);

  return (
    <Svg width={size} height={size}>
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor={TColor.secondary} stopOpacity="1" />
          <Stop offset="1" stopColor={TColor.secondary} stopOpacity="1" />
        </LinearGradient>
      </Defs>

      <Path
        d={bgD}
        stroke={TColor.gray60}
        strokeWidth={width}
        strokeOpacity={0.5}
        fill="none"
        strokeLinecap="round"
      />

      <Path
        d={activeD}
        stroke={TColor.secondary}
        strokeOpacity={0.3}
        strokeWidth={width + blurWidth}
        fill="none"
        strokeLinecap="round"
      />

      <Path
        d={activeD}
        stroke="url(#grad)"
        strokeWidth={width}
        fill="none"
        strokeLinecap="round"
      />
    </Svg>
  );
}
