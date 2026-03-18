# Como Configurar Notificações no Celular

## 📱 Opções Disponíveis

Criei um sistema de notificações que envia alertas para o teu celular quando leads interagem no funil. Tens 2 opções:

### 1. Telegram (Recomendado - Mais Fácil)
### 2. Discord Webhook

---

## 🤖 Opção 1: Telegram (Recomendado)

### Passo 1: Criar um Bot no Telegram

1. Abre o Telegram e procura por **@BotFather**
2. Envia o comando `/newbot`
3. Dá um nome ao bot (ex: "Meu Funil Notificações")
4. Dá um username ao bot (deve terminar em `bot`, ex: `meufunil_notificacoes_bot`)
5. **Guarda o TOKEN** que o BotFather te dá (algo como: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)

### Passo 2: Obter o Chat ID

1. Procura pelo teu bot no Telegram (pelo username que criaste)
2. Inicia uma conversa com ele
3. Envia qualquer mensagem (ex: "Olá")
4. Abre no navegador: `https://api.telegram.org/botSEU_TOKEN_AQUI/getUpdates`
   - Substitui `SEU_TOKEN_AQUI` pelo token que recebeste
5. Procura por `"chat":{"id":` no resultado
6. **Guarda o número** que aparece depois de `"id":` (ex: `123456789`)

### Passo 3: Configurar no Código

Abre o arquivo `js/notifications.js` e substitui:

```javascript
const NOTIFICATION_CONFIG = {
  enabled: true,
  telegram: {
    botToken: 'SEU_TOKEN_AQUI', // ← Cola o token aqui
    chatId: 'SEU_CHAT_ID_AQUI' // ← Cola o chat ID aqui
  }
};
```

### Pronto! 🎉

Agora receberás notificações no Telegram sempre que:
- ✅ Um lead entrar no funil
- ✅ Um lead responder uma pergunta
- ✅ Um lead completar o quiz
- ✅ Um lead tentar pagar
- ✅ Um pagamento for confirmado

---

## 💬 Opção 2: Discord Webhook

### Passo 1: Criar Webhook no Discord

1. Abre o Discord e vai ao servidor onde queres receber notificações
2. Vai em **Configurações do Servidor** → **Integrações** → **Webhooks**
3. Clica em **Criar Webhook**
4. Dá um nome (ex: "Notificações Funil")
5. Escolhe o canal onde queres receber as notificações
6. Clica em **Copiar URL do Webhook**
7. **Guarda a URL** (algo como: `https://discord.com/api/webhooks/123456789/ABCdef...`)

### Passo 2: Configurar no Código

Abre o arquivo `js/notifications.js` e substitui:

```javascript
const NOTIFICATION_CONFIG = {
  enabled: true,
  discord: {
    webhookUrl: 'SUA_URL_AQUI' // ← Cola a URL do webhook aqui
  }
};
```

---

## 🔔 O que Será Notificado

### 1. Lead Entra no Funil
```
🚀 Novo Lead no Funil!
⏰ Hora: [data/hora]
🌐 Origem: [de onde veio]
📱 Dispositivo: [Mobile/Desktop/Tablet]
```

### 2. Lead Responde Pergunta
```
✅ Lead Interagiu!
📝 Pergunta X respondida
💬 Resposta: [resposta escolhida]
⏰ Hora: [data/hora]
```

### 3. Lead Completa Quiz
```
🎉 Lead Completou o Quiz!
💰 Recompensa: €947.00
⏰ Hora: [data/hora]
```

### 4. Lead Tenta Pagar
```
💳 Lead Tentou Pagar!
💳 Método: MB Way / Multibanco
📱 Telefone: +351[numero] (se MB Way)
⏰ Hora: [data/hora]
```

### 5. Pagamento Confirmado ⭐
```
💰 PAGAMENTO CONFIRMADO!
💵 Valor: €12.97
🆔 Transaction ID: [id]
⏰ Hora: [data/hora]
```

---

## ⚙️ Ativar/Desativar

Para desativar temporariamente, abre `js/notifications.js` e muda:

```javascript
const NOTIFICATION_CONFIG = {
  enabled: false, // ← Muda para false
  ...
};
```

---

## 🧪 Testar

1. Configura o Telegram ou Discord
2. Abre o funil no navegador
3. Deves receber uma notificação imediatamente: "🚀 Novo Lead no Funil!"
4. Responde uma pergunta → Deves receber outra notificação
5. Continua testando o fluxo completo

---

## ⚠️ Importante

- **Telegram**: As notificações são instantâneas e gratuitas
- **Discord**: Também é gratuito e funciona bem
- **Privacidade**: Os dados enviados são mínimos (não inclui dados pessoais sensíveis)
- **Performance**: As notificações são enviadas em background e não afetam a velocidade do site

---

## 🆘 Problemas Comuns

### Não recebo notificações:
1. Verifica se `enabled: true` está configurado
2. Verifica se o token/URL está correto
3. Abre o Console do navegador (F12) e procura por erros
4. Testa o bot/webhook manualmente primeiro

### Erro 401/403 no Telegram:
- Token incorreto ou expirado
- Cria um novo bot e usa o novo token

### Erro 404 no Discord:
- URL do webhook incorreta
- Webhook foi deletado
- Cria um novo webhook

---

## 📝 Exemplo de Configuração Completa

```javascript
const NOTIFICATION_CONFIG = {
  enabled: true,
  telegram: {
    botToken: '123456789:ABCdefGHIjklMNOpqrsTUVwxyz',
    chatId: '987654321'
  },
  discord: {
    webhookUrl: 'https://discord.com/api/webhooks/123456789/ABCdef...'
  }
};
```

Podes usar ambos ao mesmo tempo (Telegram E Discord) se quiseres!
