import { ref } from 'vue';

const useDialog = () => {
  const isShowingOptions = ref(false);

  const show = () => {
    isShowingOptions.value = true;
    let dialog;
    let dialogOverlay;
    setTimeout(() => {
      dialogOverlay = document.querySelector('.dialog__overlay');
      dialog = document.querySelector('.dialog__spreadsheet');
      dialog.style.transition = 'all .5s ease-out';
      dialogOverlay.style.transition = 'all .5s ease-out';
      dialog.style.top = '50%';
      dialog.style.opacity = 1;
      dialogOverlay.style.opacity = 1;
    }, 100);
  };

  const hide = () => {
    const dialogOverlay = document.querySelector('.dialog__overlay');
    const dialog = document.querySelector('.dialog__spreadsheet');
    dialog.style.transition = 'all .5s ease-out';
    dialogOverlay.style.transition = 'all .5s ease-out';
    dialog.style.top = '30%';
    dialog.style.opacity = 0;
    dialogOverlay.style.opacity = 0;
    setTimeout(() => {
      isShowingOptions.value = false;
    }, 500);
  };

  return {
    isShowingOptions,
    show,
    hide,
  };
};

export default useDialog;
