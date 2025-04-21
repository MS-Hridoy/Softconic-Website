const menuBtn = document.querySelector('.menu-toggle');
 const navcontent = document.querySelector('.header-area');
 const subbtns  = document.getElementsByClassName('drob-down');
 const drobdown   = document.getElementsByClassName('sub-menu');

 menuBtn.addEventListener('click',togglemenu);
  function togglemenu(){
    navcontent.classList.toggle('active-content');
  } ;


  for( let subbtn of subbtns ){
    subbtn.addEventListener('click', openSubMenu)
}
  function openSubMenu(){
    this.classList.toggle('active-sub-btn')
    this.nextElementSibling.classList.toggle('active-content');
  };

