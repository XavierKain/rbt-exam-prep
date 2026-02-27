import { Composition } from "remotion";
import { PromoVideo } from "./PromoVideo";
import { PromoVideoV2 } from "./PromoVideoV2";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* V1 — Dark theme (backup) */}
      <Composition
        id="RBTPromo"
        component={PromoVideo}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
      />
      {/* V2 — Educational theme (current) */}
      <Composition
        id="RBTPromoV2"
        component={PromoVideoV2}
        durationInFrames={600} // 20 seconds
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
