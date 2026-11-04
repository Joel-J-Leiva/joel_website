// The 12-point star mark from the approved hero. Decorative: always aria-hidden.
const POINTS =
  '-13.9,-99.0 13.9,-99.0 13.0,-22.5 78.8,-61.6 92.7,-37.5 26.0,0.0 92.7,37.5 78.8,61.6 13.0,22.5 13.9,99.0 -13.9,99.0 -13.0,22.5 -78.8,61.6 -92.7,37.5 -26.0,0.0 -92.7,-37.5 -78.8,-61.6 -13.0,-22.5';

const SHAPES = {
  solid: { fill: 'currentColor' },
  outline: { fill: 'none', stroke: 'currentColor', strokeWidth: 1.1, vectorEffect: 'non-scaling-stroke' },
};

/** variant: 'solid' (filled with currentColor) | 'outline' (hairline stroke). */
export default function Asterisk({ variant = 'solid', className }) {
  return (
    <svg viewBox="-102 -102 204 204" aria-hidden="true" focusable="false" className={className}>
      <polygon points={POINTS} {...SHAPES[variant]} />
    </svg>
  );
}
