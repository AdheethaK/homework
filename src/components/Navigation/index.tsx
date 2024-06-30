import { NavLink } from "react-router-dom";

export default function Navigation(props) {

    const arrLength = props.subNav.length;
    return (
        <header>
            <div className="navigation">
                <ul  className={`grid grid-cols-6 gap-6
                                text-slate-300 text-2xl text-center font-exo font-black p-3 uppercase bg-stone-100`}>
                    {props.subNav.map((element) =>
                            <li className="rounded-md h-9 text-center"><NavLink to={element[1]}>{element[0]}</NavLink></li>
                    )}
                </ul>
            </div>
        </header>
    );
  }