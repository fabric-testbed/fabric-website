import { forwardRef } from "react";

// Lucide-compatible props interface
interface FabricIconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
  className?: string;
}

/**
 * Fabric icon — a flowing mesh/manifold surface with grid lines.
 * Drop-in compatible with lucide-react icons.
 *
 * Usage:
 *   import { Calendar, MapPin } from "lucide-react";
 *   import { Fabric } from "@/components/icons/fabric-icon";
 *
 *   <Fabric size={24} />
 *   <Fabric size={32} color="blue" strokeWidth={1.5} />
 */
const Fabric = forwardRef<SVGSVGElement, FabricIconProps>(
  (
    {
      size = 24,
      color = "currentColor",
      strokeWidth = 1.5,
      absoluteStrokeWidth = false,
      className,
      ...props
    },
    ref
  ) => {
    const sw = absoluteStrokeWidth
      ? Number(strokeWidth)
      : Number(strokeWidth) * (24 / Number(size));

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
      >
        {/* Horizontal flowing wave lines — top to bottom */}
        <path d="M1 10.5C3 8 5.5 6 8 5.5c2.5-.5 5 1.5 7 3s4.5 2 6.5 1.5c1-.3 1.8-.8 2.5-1.5" />
        <path d="M1 12.5C3 10.5 5.5 8.5 8 8c2.5-.5 5 1.5 7 3s4.5 1.5 6.5.8c1-.3 1.8-.7 2.5-1.3" />
        <path d="M1 14.5c2-1.5 4.5-3 7-3.2 2.5-.2 5 1.5 7 2.8s4.5 1 6.5.3c1-.3 1.8-.6 2.5-1" />
        <path d="M1 16.5c2-1.2 4.5-2.5 7-2.5s5 1.2 7 2.2 4.5.5 6.5-.2c1-.3 1.8-.5 2.5-.8" />
        <path d="M1.5 18.2c2-.8 4.5-1.8 7-1.8s5 .8 7 1.5 4.5.2 6.5-.3c.8-.2 1.5-.4 2-.6" />

        {/* Vertical cross-lines flowing over the surface */}
        <path d="M4 7.5C3.5 10 3.2 12.5 3.5 15c.1 1 .3 2 .5 2.8" />
        <path d="M7 5.8c-.3 2.5-.3 5 .2 7.5.2 1.2.5 2.3.8 3.2" />
        <path d="M10 5.5c0 2.5.3 5 .8 7.3.3 1.2.6 2.2 1 3" />
        <path d="M13 7c.2 2 .5 4 1 6 .3 1 .6 2 1 2.8" />
        <path d="M16 8.5c.3 1.5.5 3 .5 4.8 0 1-.1 2-.3 2.8" />
        <path d="M19 9c.2 1.2.3 2.5.2 4-.1 1-.2 1.8-.5 2.5" />
      </svg>
    );
  }
);

Fabric.displayName = "Fabric";

export { Fabric };
export default Fabric;