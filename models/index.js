const Blog = require("./Blog");
const Comments = require("./Comments");
const User = require("./User");

User.hasMany(Blog, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Comments, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Blog.belongsTo(User, {
  foreignKey: "user_id",
});

Blog.hasMany(Comments, {
  foreignKey: "blog_id",
  onDelete: "CASCADE",
});

Comments.belongsTo(Blog, {
  foreignKey: "blog_id",
});

module.exports = { User, Blog, Comments };
