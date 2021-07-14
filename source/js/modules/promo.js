import {Viewports} from '../utils/constants';

const promo = document.querySelector('.promo');
const promoDescriptionBlock = promo.querySelector('.promo__description-block');

const promoDescriptionBlockShowClass = 'promo__description-block--show';

const onPromoClick = () => {
  promoDescriptionBlock.classList.toggle(promoDescriptionBlockShowClass);
};

export const initPromo = () => {
  if (promo && document.documentElement.clientWidth <= Viewports.LARGE) {
    promo.addEventListener('click', onPromoClick, true);
  }
};
