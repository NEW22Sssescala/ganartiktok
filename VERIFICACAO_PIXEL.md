# ✅ Verificação Completa do TikTok Pixel

## 🎯 IMPORTANTE: Teste ANTES de Ativar Campanhas

Antes de gastar dinheiro em campanhas, **TESTA TUDO** usando a página `test-pixel.html`.

---

## 🧪 Como Testar (OBRIGATÓRIO):

### 1. Abre `test-pixel.html` no navegador

### 2. Verifica o Status do Pixel:
- ✅ **Verde** = Pixel carregado corretamente
- ❌ **Vermelho** = Pixel NÃO está carregado (CORRIGE ANTES DE USAR!)

### 3. Testa Cada Evento:
Clica em cada botão e verifica:
- Se aparece no log
- Se não há erros no console (F12)
- Se o evento foi enviado

### 4. Verifica no TikTok Ads Manager:
- Vai em **Assets** → **Events**
- Verifica se os eventos aparecem (pode levar alguns minutos)

---

## 📊 Eventos que DEVEM ser Disparados:

### ✅ Obrigatórios (se não funcionarem, CORRIGE):

1. **VisitPage / ViewContent**
   - Quando: Página carrega
   - Teste: Abre o funil → Deve disparar automaticamente

2. **AddToCart**
   - Quando: Lead completa quiz
   - Valor: €947.00
   - Teste: Completa o quiz → Deve disparar

3. **InitiateCheckout**
   - Quando: Lead clica "Pagar Taxa" ou entra no checkout
   - Valor: €12.97
   - Teste: Clica em "Pagar Taxa" → Deve disparar

4. **GenerateLead**
   - Quando: Transação é criada (MB Way ou Multibanco)
   - Valor: €12.97
   - Teste: Submete formulário de pagamento → Deve disparar

5. **CompletePayment + Purchase**
   - Quando: Pagamento confirmado
   - Valor: €12.97
   - Teste: Quando status vira COMPLETED → Deve disparar

### 📝 Opcionais (mas recomendados):

6. **Contact**
   - Quando: Lead responde perguntas
   - Teste: Responde uma pergunta → Deve disparar

7. **SubmitForm**
   - Quando: Lead submete formulário de checkout
   - Teste: Clica em "Pagar" no checkout → Deve disparar

---

## ⚠️ Possíveis Problemas e Soluções:

### Problema 1: Pixel não carrega
**Sintoma:** Status vermelho no test-pixel.html

**Soluções:**
- Verifica se o Pixel ID está correto no index.html
- Verifica se o script do pixel TikTok está a carregar
- Verifica o Console do navegador (F12) para erros
- Testa em modo anônimo (pode ser bloqueador de anúncios)

### Problema 2: Eventos não aparecem no TikTok Ads Manager
**Sintoma:** Eventos não aparecem após 24 horas

**Soluções:**
- Verifica se o domínio está verificado no TikTok Ads Manager
- Verifica se o pixel está ativo
- Usa o TikTok Pixel Helper (extensão Chrome) para verificar
- Verifica se não há bloqueadores de anúncios

### Problema 3: Eventos aparecem mas sem valor
**Sintoma:** Eventos aparecem mas valor está vazio

**Soluções:**
- Verifica se o parâmetro `value` está sendo enviado
- Verifica se a moeda está correta (EUR)
- Testa com test-pixel.html e verifica os dados enviados

---

## 🔒 Garantias de Segurança Implementadas:

### ✅ Métodos de Envio:
- API padrão (ttq) – pixel oficial TikTok
- API direta (tiktokq) – fallback
- Se um falhar, tenta o outro

### ✅ Sistema de Retry:
- Tenta enviar até 3 vezes
- Aguarda pixel carregar antes de enviar
- Salva eventos pendentes se pixel não estiver pronto

### ✅ Backup em localStorage:
- Se pixel não carregar, eventos são salvos
- Eventos pendentes são enviados quando pixel carregar
- Nenhum evento é perdido

### ✅ Verificações de Erro:
- Try/catch em todas as funções
- Logs detalhados no console
- Página de teste para verificar tudo

---

## 📋 Checklist ANTES de Ativar Campanhas:

- [ ] Pixel carregado (verde no test-pixel.html)
- [ ] VisitPage dispara ao abrir o funil
- [ ] AddToCart dispara ao completar quiz
- [ ] InitiateCheckout dispara ao entrar no checkout
- [ ] GenerateLead dispara ao criar transação
- [ ] CompletePayment dispara quando pagamento confirmado
- [ ] Purchase dispara quando pagamento confirmado
- [ ] Todos os eventos aparecem no TikTok Ads Manager (aguarda 24h)
- [ ] Valores estão corretos (€947.00 e €12.97)
- [ ] Moeda está correta (EUR)

---

## 🚨 Se Algo Não Funcionar:

1. **NÃO atives campanhas** até corrigir
2. Abre o Console (F12) e procura erros
3. Usa test-pixel.html para identificar o problema
4. Verifica se o pixel está instalado corretamente
5. Testa em modo anônimo (sem extensões)

---

## 💡 Dica Final:

**TESTA TUDO** com valores baixos primeiro:
- Cria uma campanha de teste com orçamento mínimo
- Verifica se os eventos aparecem
- Só depois aumenta o orçamento

**Nunca atives campanhas grandes sem testar primeiro!**
