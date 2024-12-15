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

function verm() {
    var ver = document.getElementById('vermais')
    var incom = document.getElementById('incom')
    var incom2 = document.getElementById('incom2')
    var completo = document.getElementById('completo')
    var vertext = document.getElementById('vertext')
    var arrowup = document.getElementById('arrowup')
    var arrowdown = document.getElementById('arrowdown')
    var sm = document.getElementById('sobremim')


    incom2.style.display = 'none'
    incom.style.visibility = 'hidden'
    incom.style.padding = '0px'
    incom.style.margin= '0px'
    incom.style.height = '0px'
    completo.style.display = 'block'
    completo.style.visibility = 'visible'
    completo.style.height = 'fit-content'
    vertext.innerText = 'VER MENOS'
    arrowdown.style.display = 'none'
    arrowup.style.display = 'block'
    

    ver.setAttribute('onclick', "vermenos()");

}

function vermenos() {
    var ver = document.getElementById('vermais')
    var incom = document.getElementById('incom')
    var incom2 = document.getElementById('incom2')
    var completo = document.getElementById('completo')
    var vertext = document.getElementById('vertext')
    var arrowup = document.getElementById('arrowup')
    var arrowdown = document.getElementById('arrowdown')

    incom.style.visibility = 'visible'
    incom.style.height = 'fit-content'
    incom.style.padding = '5px'
    completo.style.display = 'none'
    completo.style.visibility = 'hidden'
    completo.style.height = '0px'
    vertext.innerText = 'VER MAIS'
    arrowdown.style.display = 'block'
    arrowup.style.display = 'none'

    ver.setAttribute('onclick', "verm()");

    if (window.matchMedia("(min-width: 768px)").matches) {
    incom2.style.display = 'block'
    }  if (window.matchMedia("(min-width: 1024px)").matches) {
      incom2.style.display = 'none'
      
      completo.style.visibility = 'visible'
      completo.style.height = 'fit-content'
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
