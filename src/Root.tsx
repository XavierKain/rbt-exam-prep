import { Composition } from "remotion";
import { PromoVideo } from "./PromoVideo";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="RBTPromo"
      component={PromoVideo}
      durationInFrames={450} // 15 seconds at 30fps
      fps={30}
      width={1080}
      height={1920} // Vertical (9:16) for TikTok/Reels/Shorts
    />
  );
};
