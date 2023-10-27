import React from "react";

const proyectos = () => {
    <>
    <div>
    <header>
        <a href="index.html">
        <img src="images/Logo.png" />
        </a>
        <ul>
        <li>
            <a href="aboutUs.html">
            Sobre
            <br />
            Nosotros
            </a>
        </li>
        <li>
            <a id="userCharacter" href="login.html">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
            >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
            </svg>
            </a>
        </li>
        </ul>
    </header>
    <main>
        <div id="sidebar" className="active">
        <div className="toggle-btn">
            <span>☰</span>
        </div>
        <ul>
            <li>Modo oscuro</li>
            <li>
            <a href="cuenta.html">Configuracion cuenta</a>
            </li>
            <li>
            <a href="aboutUs.html">Sobre nosotros</a>
            </li>
        </ul>
        </div>
    </main>
    <footer>
        <a href="soporte.html">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            className="bi bi-info-circle"
            viewBox="0 0 16 16"
        >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
        </svg>
        </a>
    </footer>
    </div>
    </>
}