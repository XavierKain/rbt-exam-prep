import { Composition } from "remotion";
import { PromoVideo } from "./PromoVideo";
import { PromoVideoV2 } from "./PromoVideoV2";
import { PromoVideoV3 } from "./PromoVideoV3";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition id="RBTPromo" component={PromoVideo} durationInFrames={450} fps={30} width={1080} height={1920} />
      <Composition id="RBTPromoV2" component={PromoVideoV2} durationInFrames={600} fps={30} width={1080} height={1920} />
      <Composition id="RBTPromoV3" component={PromoVideoV3} durationInFrames={360} fps={30} width={1080} height={1920} />
    </>
  );
};
