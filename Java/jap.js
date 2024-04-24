var data = [
    {
        img: "../recursos/img/logo.png",
        country: "",
        place:"Sobre la app",
        describe:
           "Es una aplicacion creada especialmente para mujeres, nuestra misión es que se sientan seguras en todo lugar y toda hora sin ninguna restricción lo único que debes de tener es un telefono celular y acceso a internet",
    },
    {
        img: "../recursos/img/anios.png",
        country: "",
        place:"Disponible en: ",
        describe:
           "Android e Ios",
    },
    {
        img: "../recursos/img/protegida.jpeg",
        country: "",
        place:"Contiene: ",
        describe:
           "Una interfaz sencilla que cualquiera puede usar, donde facilmente podras llamar a las autoridades e incluso servicios de emergencia a tu ubicación actual",
    },
    {
        img: "../recursos/img/proteger.jpeg",
        country: "",
        place:"Protegemos",
        describe:
           "Tanto tu seguridad como la de tus datos, solamente las autoridades y tus contactos de confianza podran ver tus datos a la hora de una emergencia",
    },
];

const introduce = document.querySelector(".introduce");
const ordinalNumber=document.querySelector(".ordinal-number");

introduce.innerHTML="";
ordinalNumber.innerHTML="";

for(let i =0; i < data.length; i++){
    introduce.innerHTML+= `
                    <div class="wrapper">
                        <span>
                            <h5 class="country" style="--idx: 0">${data[i].country}</h5>
                        </span>
                        <span>
                            <h1 class="place" style="--idx: 1">${data[i].place}</h1>
                        </span>
                        <span>
                            <p class="describe" style="--idx: 2">${data[i].describe}</p>
                        </span>
                    </div>
                    `;

    ordinalNumber.innerHTML +=`<h2>0${i+1}</h2>`;
}

introduce.children[0].classList.add("active");
ordinalNumber.children[0].classList.add("active");

const thumnbnailListWrapper = document.querySelector(
    ".thumbnail-list .wrapper"
);

thumnbnailListWrapper.innerHTML += `
                        <div class="thumbnail zoom">
                            <img src="${data[0].img}" alt="">
                        </div>
`;
for (let i =1; i < data.length; i++){
    thumnbnailListWrapper.innerHTML += ` 
                        <div class="thumbnail" style="--idx: ${i-1}">
                            <img src="${data[i].img}" alt="">
                        </div>
`;
};

const nextBtn=document.querySelector(".navigation .next-button");
var currentIndex=0;
nextBtn.addEventListener("click", () => {
    nextBtn.disabled=true;
    var clone = thumnbnailListWrapper.children[0].cloneNode(true);
    clone.classList.remove("zoom");
    thumnbnailListWrapper.appendChild(clone);
    thumnbnailListWrapper.children[1].classList.add("zoom");
    setTimeout(() => {
        thumnbnailListWrapper.children[0].remove();
        nextBtn.disabled=false;
    }, 1000);

    for(let i = 2; i < thumnbnailListWrapper.childElementCount; i++)
    {
        thumnbnailListWrapper.children[i].style= `--idx: ${i - 2}`;
    }
    if(currentIndex < data.length - 1){
        currentIndex++;
    } else currentIndex=0;
    for(let i=0; i < data.length; i++){
        introduce.children[i].classList.remove("active");
        ordinalNumber.children[i].classList.remove("active");
    }
    introduce.children[currentIndex].classList.add("active");
    ordinalNumber.children[currentIndex].classList.add("active");
    ordinalNumber.children[currentIndex].textContent=`0${currentIndex+1}`
});