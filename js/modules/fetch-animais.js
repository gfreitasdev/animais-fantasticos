import AnimaNumeros from './anima-numeros.js';


export default function initFetchAnimais(){
    async function fetchAnimais(url){
        try{
        const animaisResponse = await fetch(url);
        const animaisJSON = await animaisResponse.json();
        const numerosGrid = document.querySelector('.numeros-grid');
    
        animaisJSON.forEach(animal => {
            const divAnimal = createAnimal(animal);
            numerosGrid.appendChild(divAnimal)
        })

        async function fetchAnimais(url){
            try {
                const animaisResponse = await fetch(url);
                const animaisJson = await animaisResponse.json();
                const numerosGrid = document.querySelector('.numeros-grid');
                animaisJSON.forEach((animal) => {
                    const divAnimal = createAnimal(animal);
                    numerosGrid.appendChild(divAnimal);
                });
            
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo')
    animaNumeros.init();
        } catch(erro) {
            console.log(erro);
        }
    }
    
    
    fetchAnimais('./animaisapi.json');
}
    

