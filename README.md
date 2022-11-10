
# UI Twitter Web

Um projeto que visa clonar a estrutura da página do Twitter

## ℱ Documentação de fonte

O Google Fonts Knowledge permite que designers e desenvolvedores de todos os conjuntos de habilidades escolham e usem o tipo com propósito.

### Fonte utilizada

Poppins

#### Para usar na web

Para incorporar a fonte, copie o código no `<head>` do seu html

- `<link rel="preconnect" href="https://fonts.googleapis.com">`
- `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`
- `<link href="https: //fonts.googleapis.com/css2? family= Poppins:wght@400;700 & display=swap" rel="stylesheet">`

#### Regras CSS para especificar famílias

- font-family: 'Poppins', sans-serif;

### Tamanhos de fonte utilizadas

| Tamanhos   | Nome dado no projeto                                                |
| ---------- | ------------------------ |
| 13px       | xs                       |
| 14px       | sm                       |
| 15px       | md                       |
| 16px       | lg                       |
| 19px       | xl                       |
| 20px       | 2xl                      |

## 🎨 Documentação de cores

| Cor                  | Hexadecimal                                                             |
| -----------------    | ----------------------------------------------------------------------- |
| Black                | #0F1419        |
| Dark-100             | #17202A        |
| Dark-200             | #1C2733        |
| Dark-300             | #283340        |
| Dark-400             | #3A444C        |
| Dark-500             | #5B7083        |
| Dark-600             | #8899A6        |
| Dark-700             | #EBEEF0        |
| Dark-800             | #F7F9FA        |
| Primary-blue         | #1DA1F2        |
| Primary-blue-opacity | #1DA1F280      |
| Dark-blue            | #0073BF        |
| White                | #FFFFFF        |

## Rodar o projeto

No terminal da pasta react-design-system

```bash
  npm run storybook
  npm rum dev
```

## ⚠️ Problema

Por algum motivo quando roda o storybook os componentes não aparecem, depois que colocar pra rodar o storybook tem que ir na pasta src/components e ir salvador os arquivos com stories de um em um.