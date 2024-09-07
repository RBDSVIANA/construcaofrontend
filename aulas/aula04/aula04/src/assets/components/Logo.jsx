import "./Logo.css";

function Logo(props) {
  return (
    <img 
        style={{width:"50%"}}
        className="logo" 
        src={props.imagem} 
        alt={props.texto} 
    />
  );
}

export default Logo;
