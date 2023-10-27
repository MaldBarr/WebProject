import React from "react";

const registro = () => {
    <>
    <div>
    <section>
        <div>
        <h2>Registrarse</h2>
        <p>o</p>
        <div>
            <button onclick="window.location.href = 'login.html'">
            Iniciar sesión
            </button>
            <button onclick="window.location.href = 'index.html'">Inicio</button>
        </div>
        </div>
    </section>
    <section id="Login">
        <form id="Registro" noValidate="">
        <h2>Registrate</h2>
        <input
            type="text"
            placeholder="Nombre de usuario"
            id="Username"
            required=""
        />
        <p id={1} />
        <input type="text" placeholder="Rut" id="rut" name="rut" required="" />
        <p id={2} />
        <input type="email" placeholder="Email" id="Email" required="" />
        <p id={3} />
        <select id="sel_region" name="sel_region" required="">
            <option value="" selected="" disabled="" hidden="">
            Selecciona Region
            </option>
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="IV">IV</option>
            <option value="V">V</option>
        </select>
        <p id={4} />
        <input type="text" placeholder="Comuna" id="comuna" required="" />
        <p id={5} />
        <input
            type="password"
            placeholder="Contraseña"
            id="password"
            required=""
        />
        <p id={6} />
        <input
            type="password"
            placeholder="Confirmar Contraseña"
            id="password2"
            required=""
        />
        <p id={7} />
        <div id="TermYcond">
            <input type="checkbox" id="check" required="" />
            <label>
            <a href="terminosYcondiciones.md">Acepto terminos y condiciones</a>{" "}
            </label>
        </div>
        <p id={8} />
        <button type="submit">Registrarse</button>
        </form>
    </section>
    </div>
    </>
}