#!/bin/bash
cd "$(dirname "$0")/checkout"
echo "A iniciar proxy Cooud em http://localhost:3001"
echo "Mantém esta janela aberta. Pressiona Ctrl+C para parar."
echo ""
node server-proxy.js
