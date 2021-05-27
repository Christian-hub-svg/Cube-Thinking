'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Historico = sequelize.define('Historico',{
		id_historico: {
			field: 'id_historico',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
        fk_usuario: {
			field: 'fk_usuario',
			type: DataTypes.STRING,
			primaryKey: false,
			autoIncrement: false
		},	
        fk_cubo: {
			field: 'fk_cubo',
			type: DataTypes.STRING,
			primaryKey: false,
			autoIncrement: false
		},
		tempo: {
			field: 'tempo',
			type: DataTypes.TIME,
			allowNull: false
		},
		sorteio: {
			field: 'sorteio',
			type: DataTypes.STRING,
			allowNull: true
		}
	}, 
	{
		tableName: 'historico', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Historico;
};
