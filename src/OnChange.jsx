
import React, {useState} from 'react';

function OnChanged(){

    const [name,setName]=useState("Guest");
    const [quantity, setQuantity]=useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment]=useState("");
    const [shipping,setShipping]=useState("");

    function handleNameChanged(event){
        setName(event.target.value);
    }

    function handleQuantityChanged(event){
        setQuantity(event.target.value);
    }

    function handleCommentChanged(event){
        setComment(event.target.value);
    }

    function handlePaymentChanged(event){
        setPayment(event.target.value)
    }

    function handleShippingChanged(event){
        setShipping(event.target.value)
    }

    return(<div>
            <input value={name} onChange={handleNameChanged}/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChanged} type="number"/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChanged} placeholder="Type any comment..."/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChanged}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MC">MC</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>
            
            <label>
                <input type="radio" value="Pick Up"
                        checked={shipping === "Pick Up"}
                        onChange={handleShippingChanged}/>
                Pick Up
            </label>
            <label>
                <input type="radio" value="Delivery"
                        checked={shipping === "Delivery"}
                        onChange={handleShippingChanged}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
    </div>);
}

export default OnChanged