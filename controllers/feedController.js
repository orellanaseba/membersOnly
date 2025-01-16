const db = require("../databases/queries");

const feedController = {
  mostrarUsuarios: async (req, res) => {

    const usuarios = await db.obtenerUsuarios();
    const posts = await db.obtenerPosts();

    res.render("feed", { usuarios, posts });
  },
  
  crearNuevoPost: async (req, res) => {
    const { usuario, comentario, id_usuario } = req.body
    await db.crearNuevoPost(usuario, comentario, id_usuario)
    res.redirect("/feed");
  },

  eliminarPost: async (req, res) => {
    const { id } = req.params
    await db.eliminarPost(id);
    res.redirect("/feed");
  },

  mostrarPerfilUsuario: async (req, res) => {
    const { id } = req.params
    const posts = await db.obtenerPostsById(id)
    const perfil = await db.obtenerUsuarioId(id);
    if(!posts) return res.status(404).send("No se encontró el usuario.");
    res.render("perfil", { posts })
  },

  mostrarFeedInvitado: async (req, res) => {
    if(!req.isAuthenticated()) {
      const usuarios = await db.obtenerUsuarios();
      const posts = await db.obtenerPosts();
      res.render("feed", { usuarios, posts } );
    }
  }
};

module.exports = feedController;
