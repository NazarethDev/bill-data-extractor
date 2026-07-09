# Bill Data Extractor

Uma aplicação desenvolvida em React + Vite que realiza a leitura de boletos bancários brasileiros por meio da câmera do dispositivo ou da digitação manual do código de barras.

Este projeto foi criado como um exercício de lógica de programação utilizando as regras do sistema de boletos brasileiro, com foco na extração e interpretação das informações contidas no código de barras.

Há um deploy disponível da aplicação no Vercel [neste link!](https://bill-data-extractor.vercel.app/) Sinta-se a vontade para abrir e testar!

## Funcionalidades

* 📷 Leitura do código de barras utilizando a câmera do dispositivo.
* ✍️ Entrada manual do código de barras.
* 📅 Cálculo da data de vencimento a partir do fator de vencimento do boleto.
* 💰 Extração e formatação do valor do boleto.
* 📋 Cópia do código de barras, da data de vencimento e do valor para a área de transferência.
* 📱 Interface responsiva desenvolvida com Bootstrap e tema escuro.

## Tecnologias utilizadas

* React
* Vite
* Bootstrap
* Bootstrap Icons
* ZXing (`@zxing/browser`)

## Objetivo

O objetivo deste projeto foi praticar conceitos de desenvolvimento front-end e lógica de negócio, implementando a interpretação de códigos de barras de boletos bancários conforme o padrão brasileiro. A aplicação realiza o processamento local das informações lidas, sem envio de dados para servidores ou integração com instituições financeiras.
