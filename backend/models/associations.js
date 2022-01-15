const associations = (db) => {
  db.categories.belongsTo(db.users, {
    foreignKey: 'userID'
  });
  db.users.hasMany(db.categories, {
    foreignKey: 'userID'
  });
}

export default associations;