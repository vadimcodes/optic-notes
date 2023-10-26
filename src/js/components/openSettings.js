// import { disableScroll } from '../functions/disable-scroll';
// import { enableScroll } from '../functions/enable-scroll';

(function () {
  const btnSetings = document?.querySelector('.header__menu');
  const openSettings = document?.querySelector('.settings');
  // const overlay = document?.querySelector('[data-overlay]');

  btnSetings?.addEventListener('click', (e) => {
    btnSetings?.classList.toggle('header__menu--active');
    openSettings?.classList.toggle('settings--active');
    // overlay?.classList.toggle('overlay--active');

    if (openSettings?.classList.contains('settings--active')) {
      // btnSetings?.setAttribute('aria-expanded', 'true');
      // btnSetings?.setAttribute('aria-label', 'Закрыть меню');
      // disableScroll();
    } else {
      // btnSetings?.setAttribute('aria-expanded', 'false');
      // btnSetings?.setAttribute('aria-label', 'Открыть меню');
      // enableScroll();
    }
  });

  // overlay?.addEventListener('click', () => {
  //   btnSetings?.setAttribute('aria-expanded', 'false');
  //   btnSetings?.setAttribute('aria-label', 'Открыть меню');
  //   btnSetings.classList.remove('header__menu--active');
  //   openSettings.classList.remove('settings--active');
  //   overlay.classList.remove('overlay--active');
  //   enableScroll();
  //   console.log(overlay)
  // });

  // openSettingsItems?.forEach(el => {
  //   el.addEventListener('click', () => {
  //     btnSetings?.setAttribute('aria-expanded', 'false');
  //     btnSetings?.setAttribute('aria-label', 'Открыть меню');
  //     btnSetings.classList.remove('btnSetings--active');
  //     openSettings.classList.remove('side--active');
  //     enableScroll();
  //   });
  // });
})();
