import React from "react";

const login = () => {
    <>
    <div>
    <section id="Login">
        <form>
        <h2>Identificate</h2>
        <p>Usa tu email y contraseña para Identificarte</p>
        <input type="email" placeholder="Email" id="email" required="" />
        <p id={1} />
        <input
            type="password"
            placeholder="Contraseña"
            id="password"
            required=""
        />
        <p id={2} />
        <button type="submit">Iniciar sesión</button>
        </form>
    </section>
    <section>
        <div>
        <h2>Iniciar sesión</h2>
        <p>o</p>
        <div>
            <button onclick="window.location.href = 'registro.html'">
            Crear cuenta
            </button>
            <button onclick="window.location.href = 'index.html'">Inicio</button>
        </div>
        </div>
    </section>
    </div>
    </>
}