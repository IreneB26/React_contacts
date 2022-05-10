import './Avatar.css';

function Avatar (props) {
    return <img src={props.image} className={props.class}></img>
}

export default Avatar;