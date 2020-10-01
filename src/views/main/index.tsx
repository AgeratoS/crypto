import React from "react";
import { Link } from "react-router-dom";


const Main = () => (
    <div className="main__page page">
        <div className="page__modal modal">
            <div className="modal__header">
                <div className="inner">
                    <span>Меню выбора</span>    
                </div>      
            </div>

            <div className="modal__content">
                <div className="inner">
                    <span>Выберите: само приложение или почитать о приложении?</span>
                </div>
            </div>

            <div className="modal__footer">
                <div className="inner">
                    <Link to="/about" className="link">О приложении</Link>
                    <Link to="/app" className="link">В приложение</Link>
                </div>
            </div>
        </div>
    </div>
)

export default Main;