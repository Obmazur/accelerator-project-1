const videoContainer = document.querySelector('.about__video--js');
const videoTemplate = document.querySelector('#video').content.querySelector('.about_video-player');
const playButtonElement = document.querySelector('.about__play-button');

const clearContainer = (container) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

const appendVideo = (containerElement) => {
  const fragment = document.createDocumentFragment();
  const videoElement = videoTemplate.cloneNode(true);
  fragment.append(videoElement);
  return containerElement.append(fragment);
};

const changeVideo = () => {
  clearContainer(videoContainer);
  appendVideo(videoContainer);
};

const initVideo = () => {
  playButtonElement.addEventListener('click', changeVideo);
};

export {initVideo};

