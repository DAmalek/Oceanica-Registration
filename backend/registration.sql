CREATE TABLE registration (
	id serial NOT NULL UNIQUE,
	name varchar(100) NOT NULL,
	profession varchar(100) NOT NULL,
	salary integer NOT NULL,
	createdAt varchar NOT NULL,
	CONSTRAINT registration_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);





