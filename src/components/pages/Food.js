const Food = (props) => {
    return (
        <div>
            <h1>Food</h1>
            {props.items.map((food) => {
                return (
                    <div>
                        <h1>{food.name}</h1>
                        <p>{food.price}</p>
                    </div>
                )
            })}
        </div>
    )

}
export default Food;