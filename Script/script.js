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
    var completo = document.getElementById('completo')
    var vertext = document.getElementById('vertext')
    var arrowup = document.getElementById('arrowup')
    var arrowdown = document.getElementById('arrowdown')
    var sm = document.getElementById('sobremim')


    incom.style.visibility = 'hidden'
    incom.style.padding = '0px'
    incom.style.margin= '0px'
    incom.style.height = '0px'
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
    var completo = document.getElementById('completo')
    var vertext = document.getElementById('vertext')
    var arrowup = document.getElementById('arrowup')
    var arrowdown = document.getElementById('arrowdown')

    incom.style.visibility = 'visible'
    incom.style.height = 'fit-content'
    incom.style.padding = '5px'
    completo.style.visibility = 'hidden'
    completo.style.height = '0px'
    vertext.innerText = 'VER MAIS'
    arrowdown.style.display = 'block'
    arrowup.style.display = 'none'

    ver.setAttribute('onclick', "verm()");

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
      
      var barberscard = document.getElementById('barberscard')
      var divinacard = document.getElementById('divinacard')

      barbers.removeAttribute('id', 'select')
      divina.setAttribute('id', 'select')

      barberscard.style.display = 'none'
      divinacard.style.display = 'block'
    }

    function barbers() {
      var barbers = document.querySelector('.barbers')
      var divina = document.querySelector('.divina')
      
      var barberscard = document.getElementById('barberscard')
      var divinacard = document.getElementById('divinacard')

      divina.removeAttribute('id', 'select')
      barbers.setAttribute('id', 'select')

      barberscard.style.display = 'block'
      divinacard.style.display = 'none'
    }