module.exports = (sequelize, DataTypes) => {
    let post =  sequelize.define(
        'Post',
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            texto:{
                type: DataTypes.STRING,
                allowNull: false
            },
            img:{
                type: DataTypes.STRING
            },
            usuarios_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            n_likes: {
                type: DataTypes.INTEGER
            }
        },
        {
            tableName: 'posts',
            timestamps: false
        }
    )

    post.associate = models => {
        post.hasMany(models.Comentario, {
            foreignKey: 'posts_id',
            as: 'comentarios'
        });
    };

    return post;
}