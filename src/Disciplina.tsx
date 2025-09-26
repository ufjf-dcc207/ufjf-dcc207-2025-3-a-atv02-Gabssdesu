import "./Disciplina.css"

type DisciplinaProps = {
    codigo: String;
    nome: String;
}

export default function Disciplina({codigo, nome} : DisciplinaProps){
    return (
    <div className="disciplina-container">
        <h1>{codigo}</h1>
        <h2>{nome}</h2>
    </div>
    )
}