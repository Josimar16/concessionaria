# Cadastro de carro

**_RF_**

- [] Deve ser possível cadastrar um novo carro.
- [] Deve ser possível listar todas as categórias.

**_RN_**

- [] Não deve ser possível cadastrar um carro com uma placa já existente.
- [] Não deve ser possível alterar a placa de um carro já cadastrado.
- [] O carro deve ser cadastrado, por padrão, com disponibilidade.
- [] O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**_RF_**

- [] Deve ser possível listar todos os carros disponíveis.
- [] Deve ser possível listar todos os carros disponíveis pelo nome da marca.
- [] Deve ser possível listar todos os carros disponíveis pelo nome da categória.
- [] Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**_RN_**

- [] O usuário não precisa está logado no sistema.

# Cadastro de especificações no carro

**_RF_**

- [] Deve ser possível cadastrar uma especificação para um carro.
- [] Deve ser possível listar todas as especificações.
- [] Deve ser possível listar todos os carros.

**_RN_**

- [] Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- [] Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
- [] O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro

**_RF_**

- [] Deve ser possível cadastrar a imagem do carro.

**_RNF_**

- [] Utilizar o multer para upload dos arquivos.
- [] Deve ser possível listar todos os carros.

**_RN_**

- [] O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
- [] O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel

**_RF_**

- [] Deve ser possível cadastrar um aluguel.

**_RN_**

- [] O aluguel deve ter duração miníma de 24 horas.
- [] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
- [] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
