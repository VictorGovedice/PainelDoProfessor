
# Painel do Professor Alumni

Este é o painel do professor, no qual ele terá acesso a diversas funcionalidades, como:

- Visualização dos alunos.
- Check-in de aulas.
- Gerenciamento de pagamentos dos alunos.

Este painel foi desenvolvido utilizando **React**, **TypeScript**, e **Vite**, proporcionando uma experiência rápida e eficiente para os professores acompanharem suas atividades e os alunos.

## Tecnologias Utilizadas

- **React**: Biblioteca para a construção de interfaces de usuário.
- **TypeScript**: Um superconjunto de JavaScript que adiciona tipos estáticos.
- **Vite**: Um build tool rápido e moderno, com suporte para HMR (Hot Module Replacement).

## Configuração do ESLint

Para manter o código limpo e bem estruturado, o projeto utiliza algumas regras do ESLint. Aqui estão algumas opções de configuração que você pode ajustar conforme necessário:

### Expansão da Configuração do ESLint

Se você estiver desenvolvendo uma aplicação de produção, recomendamos atualizar a configuração para habilitar regras de lint com reconhecimento de tipos:

1. Configure a propriedade `parserOptions` da seguinte forma:

```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

2. Substitua `tseslint.configs.recommended` por `tseslint.configs.recommendedTypeChecked` ou `tseslint.configs.strictTypeChecked`.

3. Opcionalmente, adicione `...tseslint.configs.stylisticTypeChecked`.

4. Instale o [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) e atualize a configuração:

```js
import react from 'eslint-plugin-react'

export default tseslint.config({
  settings: { react: { version: '18.3' } },
  plugins: {
    react,
  },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

---

Este README serve como um guia para os desenvolvedores e professores entenderem as funcionalidades e a estrutura técnica deste painel.
