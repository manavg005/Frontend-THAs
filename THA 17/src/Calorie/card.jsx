function Card({food,calorie}) {
    return (<>
        <div className="foodCalorie">
            <h2>{food}</h2>
            <p>Calories Consumed:{calorie} y</p>
        </div>
    </>)
    
}

export default Card;