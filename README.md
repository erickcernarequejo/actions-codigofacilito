# Actions Lab

Pequeña aplicación estática para practicar integración y despliegue continuo con GitHub Actions y GitHub Pages.

## Ejecutar localmente

```bash
npm install
npm start
```

Abre `http://localhost:3000`. No necesita dependencias externas.

## Validar

```bash
npm test
```

## Despliegue

El workflow [`.github/workflows/deploy.yaml`](.github/workflows/deploy.yaml) valida los pull requests y, tras cada push a `main`, publica la carpeta `public` en GitHub Pages. También puede iniciarse manualmente desde **Actions**.

En GitHub, selecciona **Settings → Pages → Source → GitHub Actions** antes del primer despliegue.
