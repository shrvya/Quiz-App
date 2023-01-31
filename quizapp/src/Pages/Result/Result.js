import '../Quiz/Quiz.css'
export default function Result({name,score}){
    return(
        <div className="result">
                <h1>{name} scored {score } points</h1>
            </div>
            )
}