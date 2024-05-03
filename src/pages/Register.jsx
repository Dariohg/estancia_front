import React, { useState } from "react";
import "../styles/register.css";

const Register = () => {
    const URI = "http://localhost:8000";

    const [nombre, setNombre] = useState('');
    const [apellidoPaterno, setApellidoPaterno] = useState('');
    const [apellidoMaterno, setApellidoMaterno] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [cargo, setCargo] = useState(''); //pasar a dropdown
    const [departamento, setDepartamento] = useState(''); //pasar a dropdown
    const [isSuperuser, setIsSuperuser] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //agregar input para username
    //agregar select para isSuperuser en el formulario
    //agregar el input para password

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(URI + '/auth/register', { 
                nombre, 
                "apellidoP": apellidoPaterno, 
                "apellidoM": apellidoMaterno,
                correo,
                password,
                telefono,
                "cargoAdministrativo":cargo,
                departamento,
                username,
                "superuser": isSuperuser ? 1 : 0
            });
            console.log(response.data);
        } catch (error) {
            console.error("Error al registrar usuario", error);
        }
    }

    return (
        <div className="register-containerr">
            <h2>Registro de Nuevo Usuario</h2>
            <form className="register-form" onSubmit={handleRegister} >
                <div className="register-row">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" className="register-input" placeholder="Nombre" onChange={e => setNombre(e.target.value)} />
                </div>
                <div className="register-row">
                    <label htmlFor="apellidoPaterno">Apellido Paterno</label>
                    <input type="text" id="apellidoPaterno" className="register-input" placeholder="Apellido Paterno" onChange={e => setApellidoPaterno(e.target.value)} />
                </div>
                <div className="register-row">
                    <label htmlFor="apellidoMaterno">Apellido Materno</label>
                    <input type="text" id="apellidoMaterno" className="register-input" placeholder="Apellido Materno" onChange={e => setApellidoMaterno(e.target.value)} />
                </div>
                <div className="register-row">
                    <label htmlFor="correo">Correo Electrónico</label>
                    <input type="email" id="correo" className="register-input" placeholder="Correo Electrónico" onChange={e => setCorreo(e.target.value)} />
                </div>
                <div className="register-row">
                    <label htmlFor="telefono">Número de Teléfono</label>
                    <input type="tel" id="telefono" className="register-input" placeholder="Número de Teléfono" onChange={e => setTelefono(e.target.value)} />
                </div>
                <div className="register-row">
                    <label htmlFor="cargo">Cargo Administrativo</label>
                    <input type="text" id="cargo" className="register-input" placeholder="Cargo Administrativo" onChange={e => setCargo(e.target.value)} />
                </div>
                <div className="register-row">
                    <label htmlFor="departamento">Departamento (Área)</label>
                    <input type="text" id="departamento" className="register-input" placeholder="Departamento (Área)" onChange={e => setDepartamento(e.target.value)} />
                </div>
                <button className="register-button">Registrar Usuario</button>
            </form>
        </div>
    );
};

export default Register;