import React, {useState} from "react";
import ModalAuth from "./ModalAuth";

const MainSection = () => {

    const [isVisable, setIsVisable] = useState(false);

    const handleEnter = () => {
        setIsVisable( prevState => !prevState);
    }

    return (
        <main>
            <section className={'mainSection'}>
                <h1>Mountain kindom</h1>
                {isVisable ?  <ModalAuth  /> : null}
                <button className={'btn'} onClick={handleEnter}>ENTER THE GATES</button>
            </section>
        </main>
    )
}

export default MainSection;