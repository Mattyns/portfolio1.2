var time = 2000,
    currentImageIndex = 0,
            images = document.querySelectorAll("#slider img")
    max = images.length;



    function nextimage(){

        images[currentImageIndex].classList.remove("selected") 
 
        currentImageIndex++

        if (currentImageIndex >= max)
                currentImageIndex = 0

        images[currentImageIndex].classList.add("selected")

    }



    function start() {
        setInterval(() => {
            // troca de imagem
            nextimage()

        }, time)

    }

    window.addEventListener("load", start) 

