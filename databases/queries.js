const pool = require("../databases/pool");

const obtenerUsuarios = async () => {
    const { rows } = await pool.query("SELECT * FROM usuarios");
    return rows;
}

const obtenerPosts = async () => {
    const { rows } = await pool.query("SELECT * FROM post");
    return rows;
}

const obtenerPostsById = async (id) => {
    const { rows } = await pool.query("SELECT * FROM post WHERE id_usuario = $1", [id]);
    return rows;
}

const crearNuevoUsuario = async (nombre, apellido, nombre_usuario, contrasenia, email) => {
    return await pool.query("INSERT INTO usuarios (nombre, apellido, usuario, contrasenia, email) VALUES ($1, $2, $3, $4, $5)", [nombre, apellido, nombre_usuario, contrasenia, email])
}

const obtenerUsuarioNombre = async (username) => {
    const { rows } = await pool.query("SELECT * FROM usuarios WHERE usuario = $1", [username])
    return rows[0];
}

const obtenerUsuarioId = async (id) => {
    const { rows } = await pool.query("SELECT * FROM usuarios WHERE id_usuario = $1", [id])
    return rows[0];
}

const crearNuevoPost = async (usuario, comentario, id) => {
    return await pool.query("INSERT INTO post (usuario, comentario, id_usuario) VALUES ($1, $2, $3)", [usuario, comentario, id]);
}

const eliminarPost = async(id) => {
    return await pool.query("DELETE FROM post WHERE id_post = $1", [id])
}

module.exports = {
    crearNuevoUsuario,
    obtenerUsuarioNombre,
    obtenerUsuarioId,
    obtenerUsuarios,
    crearNuevoPost,
    obtenerPosts,
    eliminarPost,
    obtenerPostsById
}
