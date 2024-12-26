//botão voltar ao topo
const backToTopButton = document.querySelector(".topo");

const backToTop = () => {
  if (window.scrollY >=  100) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
};
window.addEventListener("scroll", function () {
  backToTop();
});
//abrir e fechar menu
function clickMenu() {
  if (itens.style.display == "block") {
    itens.style.display = "none";
  } else {
    itens.style.display = "block";
  }
}
//carrossel



//animações

const elements = document.querySelectorAll(".hidden");

const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      entry.target.classList.remove("hidden");
    } else {
      entry.target.classList.add("hidden");
      entry.target.classList.remove("show");
    }
  });
});

elements.forEach((elements) => myObserver.observe(elements));

//menu historico OIS
const liHist = document.querySelector('.dropdown');
const opcoes = document.querySelector('.dropdown-content');

liHist.addEventListener('click', function(event){
  const larguraTela = window.innerWidth;
  
  if( larguraTela <= 991){
      if(opcoes.style.display === 'none'){
        opcoes.style.display = 'flex';
      }else{
        opcoes.style.display = 'none';
      }
  }
});

