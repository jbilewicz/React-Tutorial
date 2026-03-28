import profilePic from './assets/Lee.png'

function Card(){

    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Jacob</h2>
            <p className="card-text">I study Computer Science</p>
        </div>
    );
}

export default Card
