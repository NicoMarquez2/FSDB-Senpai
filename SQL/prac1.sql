CREATE TYPE enum_prioridad AS ENUM ('baja', 'media', 'alta');
CREATE TABLE nombre (
	titulo varchar(32),
	completa boolean,
	prioridad enum_prioridad,
	id INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 )
);

INSERT INTO nombre (titulo, completa, prioridad)
VALUES
	('tituloUno', false, 'baja'),
	('tituloDos', true, 'alta'),
	('tituloTres', false, 'baja'),
	('tituloCuatro', false, 'baja'),
	('tituloCinco', true, 'media'),
	('tituloSeis', false, 'media'),
	('tituloSiete', true, 'baja'),
	('tituloOcho', false, 'alta');

SELECT titulo, completa, prioridad, id FROM nombre WHERE prioridad = 'alta' and completa = false;
