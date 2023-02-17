function Leer() {
    const peli = document.getElementById("input").value;
    //obtain an apikey on this web
    //http://www.omdbapi.com/apikey.aspx
    const key='character';
    const api_url=`https://rickandmortyapi.com/api/${key}/?page=2&name=${peli}`
    buscar2(api_url);
}

function buscar1(api_url){

    fetch(api_url)
      .then(data => {
        return data.json()
      }).then(resultado=>{
            console.log(resultado);

            const {Search=[]} = resultado;
            
            console.log(Search);
            document.getElementById("lista").innerHTML='';

            Search.map((p)=>{
                document.getElementById("lista").innerHTML+=`<div style="margin-top:300px;">
                         <img width='100%' src=${p.image} alt="No hay poster"></img>
            </div>`;
            })
      });


}

const buscar2=async(api_url)=>{

    const data= await fetch(api_url);
    const respuesta= await data.json();
    const Search = await respuesta.results;

    console.log(Search);

    if(Search!=null)
    {   
        document.getElementById("lista").innerHTML='';
        Search.map((p)=>{
                document.getElementById("lista").innerHTML+=`<div style="margin-top:10px;">
                    <img width='100%' src=${p.image} alt="No hay poster"><h4>Nombre : ${p.name} </h4><h4>Status : : ${p.status} </h4></img></div>`;
        })

    }

}    

     
const buscar3=async(api_url)=>{

    const respuesta= await axios(api_url);
    const Search = await respuesta.data.results;
    console.log(respuesta.data.results);
    
    console.log(Search);

    
    if(Search!=null)
    {
        document.getElementById("lista").innerHTML='';
        
        Search.map((p)=>{
                document.getElementById("lista").innerHTML+=`<div style="margin-top:10px;">
                    <img width='100%' src=${p.image} alt="No hay poster"></img></div>`;
        })

    }

}    
