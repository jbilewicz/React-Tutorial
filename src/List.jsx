
function List(props){

    const category=props.category;
    const itemList=props.items;
    // fruits.sort((a,b)=>a.calories-b.calories); //numeric order
    // fruits.sort((a,b)=>b.calories-a.calories) //reverse numeric

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>);
    

    return(<>
    <h3>{category}</h3><ol>{listItems}</ol>
    </>);
}

export default List