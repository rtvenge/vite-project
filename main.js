import "./style.css";
import { drawVideo, getVideo } from "./src/camera";

(async () => {
  const video = await getVideo();
  const canvas = document.querySelector("canvas");
  const button = document.querySelector("button");

  button.addEventListener("click", () => drawVideo(video, canvas));

  await video.play();
})();
