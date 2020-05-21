<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://leonidasyopan.com/">
    <img src="https://leonidasyopan.com/img/logo-leonidas-yopan.png" alt="Logo Leonidas Yopan" width="300" height="94">
  </a>

  <h3 align="center">App de Agendamento para Barbearias</h3>

  <p align="center">
    Esta é uma aplicação para agendamento de horário para barbarias.
    <br />
    <br />
    Mais informações sobre o desenvolvedor:
    <br />
    <a href="https://www.linkedin.com/in/leonidasyopan/" target="_blank">LinkedIn</a>
    ·
    <a href="https://twitter.com/leonidasyopan" target="_blank">Twitter</a>
    ·
    <a href="https://www.facebook.com/leonidasyopan" target="_blank">Facebook</a>
    ·
    <a href="https://leonidasyopan.com/" target="_blank">Portfolio</a>
  </p>
</p>

# Etápas por completar

## Recuperação de senha

**Requisitos Funcionais (RF)**

- O usuário deve poder recuperar sua senha informando seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**Requisitos Não Funcionais (RNF)**

- Utilizar Mailtrap para testar envios em ambiente de desenvolvimento;
- Utilizar o Amazon SES para envios em produção;
- O envio do e-mail deve acontecer em segundo plano (background job);

**Regras de Négócio (RN)**

- O link enviado por e-mail para resetar a senha deve expirar em 2(duas) horas;
- O usuário precisa confirmar a nova senha gerada para poder criá-la;

## Atualização do perfil

**RF**

- O usuário dve poder atualizar seus dados do perfil (nome, e-mail e senha);

**RN**

- O usuário não poder alterar seu e-mail para um e-mail já cadastrado;
- Para atualizar sua senha, o usuário deve informar a senha antiga corretamente;
- Para atualizar sua senha, o usuário deve confirmar a nova senha;

## Painel do prestador

**RF**

- O usuário deve poder listar seus agendamento de um dia específico;
- O usuário deve receber uma notificação sempre que houver um novo agendamento;
- O usuário deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do usuário (prestador) do dia devem ser armazenados em cache;
- As notificações do usuário devem ser armazenadas no MongoDB;
- As notificações do usuário devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- O status da notificação deve poder ser contralado pelo usuário (lida ou não-lida);

## Agendamento de serviços

**RF**

- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listar os dias disponíveis dentro de um período de um mês, referente a cada prestador de seviço;
- O usuário deve poder listar os horários disponíveis em cada dia, referente a cada prestador de seviço;
- O usuário deve poder realizar um novo agendamento com o prestador escolhido;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;-

**RN**

- Cada agendamento deve durar 1 hora;
- Os agendamentos devem estar disponíveis entre as 8h e as 18h (primeiro horário para agendamento ficará disponível às 8h e o último às 17h - para poder terminar até às 18h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um hoário que já passou (retroativo);
- O usuário não pode agendar serviços consigo mesmo;

<!-- LICENSE -->

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

<!-- CONTACT -->

## Contato

Leônidas Yopán - [@leonidasyopan](https://twitter.com/leonidasyopan) - leonidasyopan@gmail.com

LinkedIn: [https://www.linkedin.com/in/leonidasyopan/](https://www.linkedin.com/in/leonidasyopan/)
