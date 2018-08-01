let mobileDropdown= false;

const scrollIdIntoView = (id) => {
  let ele = document.getElementById(`${id}`);
  ele.scrollIntoView({
    behavior: 'smooth',
    block: "start",
    inline: "nearest",
  });
};

const toggleMobileMenu = () => {
  let ele = document.getElementById('mobile-dropdown-menu');
  if(!mobileDropdown) {
    ele.classList.add('display-mobile-menu');
    mobileDropdown = !mobileDropdown;
    return;
  } else {
    ele.classList.remove('display-mobile-menu');
    mobileDropdown = !mobileDropdown;
    return;
  }
};
