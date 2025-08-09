# Karmanovy Wedding Site

## Запуск
- Node 18 + pm2
- `pm2 restart karmanovy` при обновлении

## Прокси
- Nginx -> http://127.0.0.1:3000

## Статика
- лежит в `public/`; Nginx отдаёт как /public/*
- короткие пути: /theme.css, /hero.jpg, /favicon.ico

## База
- схема и миграции складываем в `sql/`
- переменные окружения — см. `config/.env.example`
