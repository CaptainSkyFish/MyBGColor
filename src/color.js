export function beautifulColor() {
  // Use a constant for clarity and maintainability
  const DARK_THRESHOLD = 100;
  const LIGHT_THRESHOLD = 150;

  // Generate random hex color using Math.random() and toHexString()
  const randomHex = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");

  // Convert hex to RGB components using bitwise operators
  const rgb = parseInt(randomHex, 16);
  const { r, g, b } = {
    r: (rgb >> 16) & 0xff,
    g: (rgb >> 8) & 0xff,
    b: rgb & 0xff,
  };

  // Calculate luminosity using ITU-R BT.709 formula (avoid rounding errors)
  const luminosity = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  // Check if luminosity falls within the desired range
  return luminosity > DARK_THRESHOLD && luminosity < LIGHT_THRESHOLD
    ? `#${randomHex}`
    : beautifulColor();
}
