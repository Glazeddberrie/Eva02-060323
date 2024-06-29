CREATE DATABASE green_jairo;


USE green_jairo;

CREATE TABLE usuario(
    idUsua int AUTO_INCREMENT,
    nombreUsua VARCHAR(30),
    contraUsua VARCHAR(30),
    PRIMARY KEY(idUsua)
);

CREATE TABLE semilla(
idSemilla int AUTO_INCREMENT,
nombreSemilla varchar(50),
fechaPlantado date,
phIdeal float,
cantidadSemilla float,
PRIMARY KEY(idSemilla)
);

CREATE TABLE sector(
idSector int AUTO_INCREMENT,
riegoSector date,
tipoSuelo varchar(100),
PRIMARY KEY(idSector)
);

CREATE TABLE suelo(
idSuelo int AUTO_INCREMENT,
phSuelo varchar(32),
fosforoSuelo varchar(32),
nitrogenoSuelo varchar(32),
materiaOrganicaSuelo varchar(32),
potasioSuelo varchar(32),
PRIMARY KEY(idSuelo)
);





















