import {Viewports} from '../utils/constants';
import {disableScrolling, enableScrolling} from '../utils/scroll-lock';

const loader = document.querySelector('.loader');
const loaderPrompt = loader.querySelector('.loader__prompt');
const wrapper = document.querySelector('.wrapper');

const loaderShowingClass = 'loader--show';
const loaderFadeAnimationClass = 'loader--fade';
const loaderPromptShowClass = 'loader__prompt--show';
const wrapperShowingClass = 'wrapper--show';

const onEnterKeydown = (evt) => {
  if (evt.key === 'Enter') {
    window.removeEventListener('keydown', onEnterKeydown);
    loaderShow(false);
  }
};

const onLoaderClick = () => {
  loaderShow(false);
};

const onLoaderLoad = () => {
  loaderPrompt.classList.add(loaderPromptShowClass);

  if (document.documentElement.clientWidth < Viewports.LARGE) {
    loader.addEventListener('click', onLoaderClick, true);
  } else {
    window.addEventListener('keydown', onEnterKeydown);
  }
};

const loaderShow = (flag) => {
  if (flag) {
    disableScrolling();
    loader.classList.add(loaderShowingClass);
  } else {
    enableScrolling();
    loader.classList.add(loaderFadeAnimationClass);

    loader.addEventListener('transitionend', () => {
      loader.classList.remove(loaderShowingClass);
      loader.classList.remove(loaderFadeAnimationClass);
      wrapper.classList.add(wrapperShowingClass);
    }, false);
  }
};

export const initLoader = () => {
  if (loader) {
    loaderShow(true);
    window.addEventListener('load', onLoaderLoad);
  }
};
