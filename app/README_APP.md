# 📦 WB Tariffs Service

## 🩺 Описание

Сервис для автоматического получения тарифов Wildberries (`/api/v1/tariffs/box`), 
их сохранения в PostgreSQL и регулярного обновления данных в Google Sheets.

Приложение развёртывается в Docker-контейнерах и требует только одной команды для запуска:
```bash
docker compose up --build
