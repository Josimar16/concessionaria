# Cadastro de carro

**_RF_**

- [x] Deve ser possível cadastrar um novo carro.

**_RN_**

- [x] Não deve ser possível cadastrar um carro com uma placa já existente.
- [x] O carro deve ser cadastrado, por padrão, com disponibilidade.
- [x] O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**_RF_**

- [x] Deve ser possível listar todos os carros disponíveis.
- [x] Deve ser possível listar todos os carros disponíveis pelo nome da marca.
- [x] Deve ser possível listar todos os carros disponíveis pelo nome da categória.
- [x] Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**_RN_**

- [x] O usuário não precisa está logado no sistema.

# Cadastro de especificações no carro

**_RF_**

- [x] Deve ser possível cadastrar uma especificação para um carro.
- [x] Deve ser possível listar todas as especificações.
- [x] Deve ser possível listar todos os carros.

**_RN_**

- [x] Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- [x] Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
- [x] O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro

**_RF_**

- [x] Deve ser possível cadastrar a imagem do carro.

**_RNF_**

- [x] Utilizar o multer para upload dos arquivos.
- [x] Deve ser possível listar todos os carros.

**_RN_**

- [x] O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
- [x] O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel

**_RF_**

- [x] Deve ser possível cadastrar um aluguel.

**_RN_**

- [x] O aluguel deve ter duração miníma de 24 horas.
- [x] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
- [x] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
