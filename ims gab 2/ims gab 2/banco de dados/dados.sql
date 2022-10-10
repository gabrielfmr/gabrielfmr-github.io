-- Geracão de Modelo físico
-- Sql ANSI 2003 - brModelo.



CREATE TABLE Cliente (
Id_cliente INTEGER,
Endereco VARCHAR(45),
nome_cliente VARCHAR(45),
Telefone VARCHAR(11),
RG_cliente INTEGER,
CPF_cliente VARCHAR(11) PRIMARY KEY,
foto_cliente VARCHAR(60)
);

CREATE TABLE Livro (
titulo_livro VARCHAR(45),
preco_livro DECIMAL(10,2),
categoria_livro VARCHAR(45),
id_editora INTEGER,
id_livro INTEGER PRIMARY KEY
);

CREATE TABLE venda_livro (
id_livro INTEGER,
id_venda INTEGER,
FOREIGN KEY(id_livro) REFERENCES Livro (id_livro)
);

CREATE TABLE Venda (
id_pedido INTEGER,
id_cliente INTEGER,
data_venda DATE,
valor_venda DECIMAL(10,2),
id_venda INTEGER PRIMARY KEY
);

CREATE TABLE venda_cliente (
CPF_cliente VARCHAR(11),
id_venda INTEGER
);

CREATE TABLE Editora (
telefone_editora INTEGER,
nome_editora VARCHAR(50),
Endereco VARCHAR(50),
id_editora INTEGER PRIMARY KEY
);

ALTER TABLE venda_livro ADD FOREIGN KEY(id_venda) REFERENCES Venda (id_venda);

INSERT INTO Cliente (Id_cliente, Endereco, nome_cliente, telefone, RG_cliente, CPF_cliente, foto_cliente) VALUES ("123456789", "Brasil", "João", "40089276342", "123567891", "76453892673","João.jpg"), ("12341568", "Espanha", "Zezinho", "89210532121", "123456739", "653891562778","Zezinho.jpg"), ("123456783", "Argentina", "Zezao", "89210518127", "1234567893", "56782934567", "Zezao.jpg");



INSERT INTO Livro (titulo_livro, preco_livro, categoria_livro, id_editora, id_livro) VALUES ("Tres Mosqueteiros", 20.99, "Acão", "135672879", "265718925"), ("Os tres patetas", 29.90, "comedia", "736789494", "936297356"),("Os tres porquinhos" , 6.99 , "acão" , "739275638" , "826591429");

INSERT INTO Venda (id_pedido, id_cliente, data_venda, valor_venda, id_venda) values ("624828403", "834726374","2021-12-05", 20.90, "527373869"),("624874403", "834026374","2022-01-30", 29.90, "527553869"),("624008403", "834216374","2022-03-15", 6.99, "527343869");

INSERT INTO Editora (Telefone_editora, nome_editora, Endereco, id_editora) values ("996874927", "Companhia da Letras", "Rua petropolis", "725739572"),("996843927", "Editora Intrínseca", "Rua dps aimores", "725627572"),
("996936527", "Globo Livros", "Rua agulhas negras", "725700872");

INSERT INTO venda_livro (id_venda, id_livro) values ("527373869", "265718925"), ("527343869", "936297356"), ("527553869", "826591429");

INSERT INTO venda_cliente (CPF_cliente, id_venda) values ("653891562778", "527373869"), ("56782934567", "527553869"), ("76453892673", "527343869");


select 
-- left join
--group_concat
id_venda, titulo_livro

select id_venda , group_concat(livro.titulo_livro) from venda_livro left join livro ON livro.id_livro = venda_livro.id_livro group by id_venda; 