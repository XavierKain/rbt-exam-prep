import { bundle } from "@remotion/bundler";
import { renderStill, selectComposition } from "@remotion/renderer";
import path from "path";
import fs from "fs";

const compositionId = "RBTPromo";
const framesDir = path.join(process.cwd(), "out", "frames");

fs.mkdirSync(framesDir, { recursive: true });

console.log("Bundling...");
const bundleLocation = await bundle({
  entryPoint: path.join(process.cwd(), "src", "index.ts"),
});

console.log("Getting composition...");
const composition = await selectComposition({
  serveUrl: bundleLocation,
  id: compositionId,
});

const totalFrames = composition.durationInFrames;
console.log(`Rendering ${totalFrames} frames...`);

// Render every 3rd frame (10fps effective) to speed up, then ffmpeg will duplicate
const step = 3;
for (let frame = 0; frame < totalFrames; frame += step) {
  const paddedFrame = String(frame).padStart(4, "0");
  await renderStill({
    composition,
    serveUrl: bundleLocation,
    output: path.join(framesDir, `frame-${paddedFrame}.jpeg`),
    frame,
    imageFormat: "jpeg",
    jpegQuality: 90,
  });
  if (frame % 30 === 0) {
    console.log(`Rendered frame ${frame}/${totalFrames}`);
  }
}

console.log("Done rendering frames!");
console.log(`Now run: ffmpeg -framerate 10 -i out/frames/frame-%04d.jpeg -c:v libx264 -r 30 -pix_fmt yuv420p out/promo.mp4`);
