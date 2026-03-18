# Configuração do Checkout Cooud

## ✅ O que foi implementado:

1. **Checkout integrado com API Cooud (Checkout Sessions)**
2. **Pagamento por cartão de crédito/débito, Google Pay (Android) e Apple Pay (iPhone)**
3. **Checkout separado na pasta `checkout/`** para testes isolados sem passar pelo funil
4. **Redirecionamento automático** para o checkout hospedado da Cooud

## 🔧 Configuração Necessária:

### 1. Criar Token de Acesso

1. Entre no dashboard da Cooud
2. Aceda à sua store
3. Vá à aba **"Integrações"**
4. Faça scroll até à secção **"Tokens de Acesso"**
5. Clique em **"Novo token"**
6. Dê um nome descritivo e clique em **"Criar token"**
7. Copie o token e guarde-o com cuidado

### 2. Configurar o Checkout

Abra o ficheiro `checkout/config.js` e configure:

```javascript
const COOUD_CONFIG = {
  apiUrl: 'https://orbit.cooud.com/checkout_sessions',
  accessToken: 'SEU_TOKEN_AQUI',           // Token da dashboard Cooud
  prices: ['ID_DA_OFERTA'],                // IDs das ofertas (preços)
  successUrl: 'https://sacattkapp.fun/up1', // URL após pagamento
  amount: 12.97                             // Valor exibido
};
```

### 3. Obter IDs das Ofertas

Os IDs das ofertas (prices) são obtidos no dashboard da Cooud, na configuração da sua store.

## 📱 Como Funciona:

1. **Usuário clica em "Pagar Taxa"** na página de registro
2. **É redirecionado para** `checkout/index.html`
3. **Clica em "Pagar"** → a aplicação cria uma sessão via API Cooud
4. **É redirecionado** para o checkout hospedado da Cooud
5. **Paga** com cartão, Google Pay (Android) ou Apple Pay (iPhone)
6. **Após pagamento** é redirecionado para `successUrl`

## 🧪 Testar o Checkout Isoladamente:

Para testar apenas o checkout sem passar pelo funil:

1. Abra diretamente: `checkout/index.html`
2. Configura o `config.js` com token e IDs das ofertas
3. Clica em "Pagar" para testar o fluxo

## 📚 Documentação da API:

Consulte `checkout/README.md` para a documentação completa da API Cooud.
