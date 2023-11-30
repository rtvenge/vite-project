export async function getVideo() {
  const avStream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true,
  });

  const video = document.createElement("video");

  video.srcObject = avStream;

  return video;
}

export function drawVideo(video, canvas) {
  const context = canvas.getContext("2d");

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0); // (x, y)
}
