export default function SIMPLEButton(props) {
  
    return (
      <button onClick={props.btnFunction} className={`${props.btnColor} ${props.hoverColor} ${props.btnposition} text-white font-bold py-2.5 px-5 rounded m-8 p-8`}>
       {props.btnName}
      </button>
    );
  }