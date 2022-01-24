import { GlobeMethods } from "react-globe.gl";

export function turnGlobe(
  coords: {
    lat: number;
    lng: number;
    altitude?: number;
  },
  globeRef: React.MutableRefObject<GlobeMethods>
) {
  // @ts-ignore
  globeRef.current.controls().autoRotate = false;
  const currentAlt = globeRef.current.pointOfView().altitude;
  coords["altitude"] = Math.max(currentAlt, 0.8);
  globeRef.current.pointOfView(coords);
}