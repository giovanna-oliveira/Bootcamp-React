var container = document.getElementById("app")

// var titulo = document.createElement("h1")

// titulo.innerHTML = "Titulo inserido por JS :O"

// container.appendChild(titulo)

function Contador(props) {

    //let numero = 0;
    const [numero, setNumero] = React.useState(0);

    function somar(){
        setNumero(numero + 1);
        console.log("somei e ficou = " + numero)
    }

    function subtrair(){
        setNumero(numero - 1);
        console.log("subtrai e ficou = " + numero)
    }

    return (
        <React.Fragment>
             {/* <h2>{props.paragrafo}</h2> */}
            {/* <img src={props.img}></img> */}

            <h2>{props.escolha}</h2>

            <h2>{numero}</h2>
            <button onClick={somar}>+</button>
            <button onClick={subtrair}>-</button>
        </React.Fragment>
    )
}

function App() {
    return (
        <React.Fragment>
            <h1>😳 ou 😡?</h1>
            <h2>Vota direito</h2>
            <img src="https://i.pinimg.com/564x/e3/13/e6/e313e6800dd5dd8f13fd669951605b18.jpg"></img>
            
            <Contador escolha = "😳"/>
            <Contador escolha = "😡"/>
            {/* <Contador titulo="😳 ou 😡?" />
            <Contador paragrafo="Vota direito" />
            <Contador img="https://i.pinimg.com/564x/e3/13/e6/e313e6800dd5dd8f13fd669951605b18.jpg" /> */}
        </React.Fragment>
    );
}

ReactDOM.render(React.createElement(App, null, null), container);
// ReactDOM.render(App(), container);
