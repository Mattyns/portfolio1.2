function mudarback () {
    var back = document.getElementById("corpo").style.backgroundImage = 'url("img/pexels-johannes2.jpg")';
}

function voltarback () {
    var back = document.getElementById("corpo").style.backgroundImage = 'url("img/pexels-sr-solo-2917871.jpg")';
}

function alternarback () {
    var perfil = document.getElementById("perfil");
    
    var back = document.getElementById("corpo").style.backgroundImage = 'url("img/pexels-johannes2.jpg")';
    perfil.setAttribute("onclick", "alternarback2(this)");
    perfil.setAttribute("onmouseover", "voltarback(this)");
    perfil.setAttribute("onmouseout", "mudarback(this)");
}

function alternarback2 () {
    var perfil = document.getElementById("perfil");
    var back = document.getElementById("corpo").style.backgroundImage = 'url("img/pexels-sr-solo-2917871.jpg")';
    perfil.setAttribute("onclick", "alternarback(this)");
    perfil.setAttribute("onmouseover", "mudarback(this)");
    perfil.setAttribute("onmouseout", "voltarback(this)");
    
}

// função de ver mais no perfil

const ver = document.querySelector('#vermais');
const vertext = document.querySelector('#vertext');
const arrowdown = document.querySelector('#arrowdown');
const arrowup = document.querySelector('#arrowup');


function updateDivOnResize() {
  // Adiciona o atributo onclick
  ver.setAttribute('onclick', 'verm()');

  // Atualiza o texto interno da div
  vertext.innerText = 'VER MAIS';
  arrowdown.style.display = 'block'
  arrowup.style.display = 'none'
}

// Atualiza ao carregar a página
updateDivOnResize();

// Atualiza toda vez que a janela for redimensionada
window.addEventListener('resize', updateDivOnResize);

    const incom = document.querySelector('#incom');
    const incom2 = document.querySelector('#incom2');
    const completo = document.querySelector('#completo');
    const completo2 = document.querySelector('#completo2');
    const completo3 = document.querySelector('#completo3');
    

    function showDivBasedOnWindowSize() {
      const width = window.innerWidth;

      // Oculta todas as divs inicialmente
      incom.style.display = 'none';
      incom2.style.display = 'none';
      completo.style.display = 'none';
      completo2.style.display = 'none';
      completo3.style.display = 'none';

      // Mostra a div correspondente com base no tamanho da janela
      if (width < 768) {
        incom.style.display = 'block';
        completo2.style.display = 'none'
        completo3.style.display = 'none'
      } else if (width >= 768 && width < 1024) {
        incom2.style.display = 'block';
        completo.style.display = 'none'
        completo3.style.display = 'none'
      } else {
        completo3.style.display = 'block';
        completo2.style.display = 'none'
        completo.style.display = 'none'
      }
    }

    // Executa a função ao carregar a página e ao redimensionar a janela
    window.addEventListener('resize', showDivBasedOnWindowSize);
    window.addEventListener('load', showDivBasedOnWindowSize);

function verm() {
    var ver = document.getElementById('vermais')
    var incom = document.getElementById('incom')
    var incom2 = document.getElementById('incom2')
    var completo = document.getElementById('completo')
    var completo2 = document.getElementById('completo2')
    var completo3 = document.getElementById('completo3')
    var vertext = document.getElementById('vertext')
    var arrowup = document.getElementById('arrowup')
    var arrowdown = document.getElementById('arrowdown')
    var sm = document.getElementById('sobremim')


    vertext.innerText = 'VER MENOS'
    arrowdown.style.display = 'none'
    arrowup.style.display = 'block'
    

    ver.setAttribute('onclick', "vermenos()");

    if (window.matchMedia("(max-width: 768px)").matches) {
      incom2.style.display = 'none'
      incom.style.display = 'none'
      completo2.style.display = 'none'
      completo3.style.display = 'none'
      completo.style.display = 'block'
      
    } if (window.matchMedia("(min-width: 768px)").matches) {
      incom2.style.display = 'none'
      incom.style.display = 'none'
      completo.style.display = 'none'
      completo3.style.display = 'none'
      completo2.style.display = 'block'
    } if (window.matchMedia("(min-width: 1024px)").matches) {
      incom2.style.display = 'none'
      incom.style.display = 'none'
      completo.style.display = 'none'
      completo2.style.display = 'none'
      completo3.style.display = 'block'
    } 
    
    

}

function vermenos() {
    var ver = document.getElementById('vermais')
    var incom = document.getElementById('incom')
    var incom2 = document.getElementById('incom2')
    var completo = document.getElementById('completo')
    var completo2 = document.getElementById('completo2')
    var completo3 = document.getElementById('completo3')
    var vertext = document.getElementById('vertext')
    var arrowup = document.getElementById('arrowup')
    var arrowdown = document.getElementById('arrowdown')

    
    vertext.innerText = 'VER MAIS'
    arrowdown.style.display = 'block'
    arrowup.style.display = 'none'

    ver.setAttribute('onclick', "verm()");

    if (window.matchMedia("(max-width: 768px)").matches) {
      incom2.style.display = 'none'
      incom.style.display = 'block'
      completo2.style.display = 'none'
      completo3.style.display = 'none'
      completo.style.display = 'none'
      
    } if (window.matchMedia("(min-width: 768px)").matches) {
      incom2.style.display = 'block'
      incom.style.display = 'none'
      completo.style.display = 'none'
      completo3.style.display = 'none'
      completo2.style.display = 'none'
    } if (window.matchMedia("(min-width: 1024px)").matches) {
      incom2.style.display = 'none'
      incom.style.display = 'none'
      completo.style.display = 'none'
      completo2.style.display = 'none'
      completo3.style.display = 'block'
    } 

    

    

}






const div = document.querySelector('#titulo');

    div.addEventListener('click', () => {
      // Adiciona a primeira animação (hinge)
      div.classList.add('animate__hinge');

      // Quando a primeira animação termina
      div.addEventListener('animationend', () => {
        if (div.classList.contains('animate__hinge')) {
          div.classList.remove('animate__hinge'); // Remove a primeira animação
          div.classList.add('animate__bounceInDown'); // Adiciona a segunda animação
        }
      }, { once: true }); // Garante que o evento seja disparado apenas uma vez
    });

    // Opcional: Reset das animações para permitir repetição
    div.addEventListener('animationend', () => {
      if (div.classList.contains('animate__bounceInDown')) {
        div.classList.remove('animate__bounceInDown'); // Remove a segunda animação
      }
    });




    // Meus projetos 

    function divina() {
      var barbers = document.querySelector('.barbers')
      var divina = document.querySelector('.divina')
      var hair = document.querySelector('.hair')
      var nail = document.querySelector('.nail')
      var osabor = document.querySelector('.osabor')
      var vivafloresta = document.querySelector('.vivafloresta')


      
      var barberscard = document.getElementById('barberscard')
      var divinacard = document.getElementById('divinacard')
      var haircard = document.getElementById('haircard')
      var nailcard = document.getElementById('nailcard')
      var osaborcard = document.getElementById('osaborcard')
      var vivaflorestacard = document.getElementById('vivaflorestacard')

      vivafloresta.removeAttribute('id', 'select')
      osabor.removeAttribute('id', 'select')
      nail.removeAttribute('id', 'select')
      hair.removeAttribute('id', 'select')
      barbers.removeAttribute('id', 'select')
      divina.setAttribute('id', 'select')
      

      vivaflorestacard.style.display = 'none'
      osaborcard.style.display = 'none'
      nailcard.style.display = 'none'
      haircard.style.display = 'none'
      barberscard.style.display = 'none'
      divinacard.style.display = 'block'
      

      divinacard.classList.add('animate__animated', 'animate__fadeInUpBig');

      // Remove a animação após ela terminar (opcional, para reanimar no futuro)
      divinacard.addEventListener('animationend', () => {
        divinacard.classList.remove('animate__animated', 'animate__fadeInUpBig');})

      
    }

    function barbers() {
      var barbers = document.querySelector('.barbers')
      var divina = document.querySelector('.divina')
      var hair = document.querySelector('.hair')
      var nail = document.querySelector('.nail')
      var osabor = document.querySelector('.osabor')
      var vivafloresta = document.querySelector('.vivafloresta')
      
      var barberscard = document.getElementById('barberscard')
      var divinacard = document.getElementById('divinacard')
      var haircard = document.getElementById('haircard')
      var nailcard = document.getElementById('nailcard')
      var osaborcard = document.getElementById('osaborcard')
      var vivaflorestacard = document.getElementById('vivaflorestacard')
      

      vivafloresta.removeAttribute('id', 'select')
      osabor.removeAttribute('id', 'select')
      nail.removeAttribute('id', 'select')
      hair.removeAttribute('id', 'select')
      divina.removeAttribute('id', 'select')
      barbers.setAttribute('id', 'select')

      vivaflorestacard.style.display = 'none'
      osaborcard.style.display = 'none'
      nailcard.style.display = 'none'
      barberscard.style.display = 'block'
      divinacard.style.display = 'none'
      haircard.style.display = 'none'

      barberscard.classList.add('animate__animated', 'animate__fadeInUpBig');

      // Remove a animação após ela terminar (opcional, para reanimar no futuro)
      barberscard.addEventListener('animationend', () => {
        barberscard.classList.remove('animate__animated', 'animate__fadeInUpBig');})

      
    }

    

    function hair() {
      var barbers = document.querySelector('.barbers')
      var divina = document.querySelector('.divina')
      var hair = document.querySelector('.hair')
      var nail = document.querySelector('.nail')
      var osabor = document.querySelector('.osabor')
      var vivafloresta = document.querySelector('.vivafloresta')
      
      var barberscard = document.getElementById('barberscard')
      var divinacard = document.getElementById('divinacard')
      var haircard = document.getElementById('haircard')
      var nailcard = document.getElementById('nailcard')
      var osaborcard = document.getElementById('osaborcard')
      var vivaflorestacard = document.getElementById('vivaflorestacard')
      

      vivafloresta.removeAttribute('id', "select")
      osabor.removeAttribute('id', 'select')
      nail.removeAttribute('id', 'select')
      divina.removeAttribute('id', 'select')
      barbers.removeAttribute('id', 'select')
      hair.setAttribute('id', 'select')

      vivaflorestacard.style.display = 'none'
      osaborcard.style.display = 'none'
      nailcard.style.display = 'none'
      barberscard.style.display = 'none'
      divinacard.style.display = 'none'
      haircard.style.display = 'block'

      haircard.classList.add('animate__animated', 'animate__fadeInUpBig');

      // Remove a animação após ela terminar (opcional, para reanimar no futuro)
      haircard.addEventListener('animationend', () => {
        haircard.classList.remove('animate__animated', 'animate__fadeInUpBig');})

      
    }

    function nail() {
      var barbers = document.querySelector('.barbers')
      var divina = document.querySelector('.divina')
      var hair = document.querySelector('.hair')
      var nail = document.querySelector('.nail')
      var osabor = document.querySelector('.osabor')
      var vivafloresta = document.querySelector('.vivafloresta')
      
      var barberscard = document.getElementById('barberscard')
      var divinacard = document.getElementById('divinacard')
      var haircard = document.getElementById('haircard')
      var nailcard = document.getElementById('nailcard')
      var osaborcard = document.getElementById('osaborcard')
      var vivaflorestacard = document.getElementById('vivaflorestacard')
      

      vivafloresta.removeAttribute('id', "select")
      osabor.removeAttribute('id', 'select')
      barbers.removeAttribute('id', 'select')
      hair.removeAttribute('id', 'select')
      divina.removeAttribute('id', 'select')
      nail.setAttribute('id', 'select')

      vivaflorestacard.style.display = 'none'
      osaborcard.style.display = 'none'
      nailcard.style.display = 'block'
      barberscard.style.display = 'none'
      divinacard.style.display = 'none'
      haircard.style.display = 'none'

      nailcard.classList.add('animate__animated', 'animate__fadeInUpBig');

      // Remove a animação após ela terminar (opcional, para reanimar no futuro)
      nailcard.addEventListener('animationend', () => {
        nailcard.classList.remove('animate__animated', 'animate__fadeInUpBig');})

      
    }

    function osabor() {
      var barbers = document.querySelector('.barbers')
      var divina = document.querySelector('.divina')
      var hair = document.querySelector('.hair')
      var nail = document.querySelector('.nail')
      var osabor = document.querySelector('.osabor')
      var vivafloresta = document.querySelector('.vivafloresta')
      
      var barberscard = document.getElementById('barberscard')
      var divinacard = document.getElementById('divinacard')
      var haircard = document.getElementById('haircard')
      var nailcard = document.getElementById('nailcard')
      var osaborcard = document.getElementById('osaborcard')
      var vivaflorestacard = document.getElementById('vivaflorestacard')
      

      vivafloresta.removeAttribute('id', "select")
      barbers.removeAttribute('id', 'select')
      nail.removeAttribute('id', 'select')
      hair.removeAttribute('id', 'select')
      divina.removeAttribute('id', 'select')
      osabor.setAttribute('id', 'select')

      vivaflorestacard.style.display = 'none'
      osaborcard.style.display = 'block'
      nailcard.style.display = 'none'
      barberscard.style.display = 'none'
      divinacard.style.display = 'none'
      haircard.style.display = 'none'

      osaborcard.classList.add('animate__animated', 'animate__fadeInUpBig');

      // Remove a animação após ela terminar (opcional, para reanimar no futuro)
      osaborcard.addEventListener('animationend', () => {
        osaborcard.classList.remove('animate__animated', 'animate__fadeInUpBig');})

      
    }

    function vivafloresta() {
      var barbers = document.querySelector('.barbers')
      var divina = document.querySelector('.divina')
      var hair = document.querySelector('.hair')
      var nail = document.querySelector('.nail')
      var osabor = document.querySelector('.osabor')
      var vivafloresta = document.querySelector('.vivafloresta')
      
      var barberscard = document.getElementById('barberscard')
      var divinacard = document.getElementById('divinacard')
      var haircard = document.getElementById('haircard')
      var nailcard = document.getElementById('nailcard')
      var osaborcard = document.getElementById('osaborcard')
      var vivaflorestacard = document.getElementById('vivaflorestacard')
      

      barbers.removeAttribute('id', "select")
      osabor.removeAttribute('id', 'select')
      nail.removeAttribute('id', 'select')
      hair.removeAttribute('id', 'select')
      divina.removeAttribute('id', 'select')
      vivafloresta.setAttribute('id', 'select')

      vivaflorestacard.style.display = 'block'
      osaborcard.style.display = 'none'
      nailcard.style.display = 'none'
      barberscard.style.display = 'none'
      divinacard.style.display = 'none'
      haircard.style.display = 'none'

      vivaflorestacard.classList.add('animate__animated', 'animate__fadeInUpBig');

      // Remove a animação após ela terminar (opcional, para reanimar no futuro)
      vivaflorestacard.addEventListener('animationend', () => {
        vivaflorestacard.classList.remove('animate__animated', 'animate__fadeInUpBig');})

      
    }
