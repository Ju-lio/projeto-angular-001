1. [OK] Code style:
  <!-- 1.1 Configurar eslint: ng add @angular-eslint/schematics -->
  <!-- 1.2 Instalar o prettier: npm install prettier --save-dev -->
  <!-- 1.3 Criar o arquivo .prettierrc.json na raiz do projeto -->
  <!-- 1.4 Criar o arquivo .prettierignore -->
  <!-- 1.5 Copiar o conteúdo do arquivo .gitignore e colar no arquivo .prettierignore -->
  <!-- 1.6 Configurar o prettier como plugin do eslint: npm install prettier-eslint eslint-config-prettier eslint-plugin-prettier --save-dev -->
  <!-- 1.7 rodar no terminal: ng lint -->

<<<<<<< HEAD
2. [OK] Não utilizou módulos
  <!-- 2.1 Criar pasta modules na pasta app -->
  <!-- 2.2 ng g m home --routing -->
  <!-- 2.3 { path: 'home/:usr', loadchilden: () => import('./modules/home/home.module').then(m => m.HomeModule) } -->

3. [] Não utilizou lazy loading
4. [] Não utilizou rxjs
5. [OK] Não utilizou modelos
6. [OK] Uso incorreto do roteamento
=======
2. [] Não utilizou módulos
  <!-- 2.1 Criar pasta modules na pasta app -->
  2.2 ng g m home --routing
  2.3 { path: 'home/:usr', loadchilden: () => import('./modules/home/home.module').then(m => m.HomeModule) }

3. [] Não utilizou lazy loading
4. [] Não utilizou rxjs
5. [] Não utilizou modelos
6. [] Uso incorreto do roteamento
>>>>>>> a512e61c8881ea58c2aeef342ea22491c0abeac9
7. [] *Não configurou rotas para "página não encontrada" ({ path: '**', component: Notfouncomponent })
8. [] Implementação da página de destaques deve ser melhorada: os itens devem ser passados dinamicamentes
9. [] Imagens quebrarão em produção
10. [] Clean Code:
<<<<<<< HEAD
  <!-- 10.1 Uso de let quando deveria utilizar const -->
  10.2 Services não estão alocados em diretórios apropriados
  10.3 Nomenclatura incorreta de variáveis
  10.4 Revisar implementação para loadFilmes
  <!-- 10.5 Método getMidia deveria usar switch case e nao if else -->
  <!-- 10.6 Uso de for, quando deveria utilizar map -->
  10.7 Revisar estratégia para unsubscribe: HomeComponent
11. [] Serviços não devem ser instanciados manualmente
=======
  10.1 Uso de let quando deveria utilizar const
  10.2 Services não estão alocados em diretórios apropriados
  10.3 Nomenclatura incorreta de variáveis
  10.4 Revisar implementação para loadFilmes
  10.5 Método getMidia deveria usar switch case e nao if else
  10.6 Uso de for, quando deveria utilizar map
  10.7 Revisar estratégia para unsubscribe: HomeComponent
11. Serviços não devem ser instanciados manualmente
>>>>>>> a512e61c8881ea58c2aeef342ea22491c0abeac9


OBS: 

{
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "semi": true,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "trailingComma": "es5",
  "bracketSameLine": true,
  "printWidth": 80
}

"plugin:prettier/recommended"