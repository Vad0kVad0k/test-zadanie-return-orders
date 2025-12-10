# Админ панель по возвращаемым товарам

Тестовое задание: https://zen.craft.me/TE0bpyKeDJGfDm

## Инстракция

1. Установите зависимости:
```bash
npm install
```

2. Запустите dev-сервер:
```bash
npm run dev
```


## Архитектура проекта по методологии **Feature-Sliced Design (FSD)** (с небольшим отличием, но соблюдая структуру импортов):

```
├── app/                              # Next.js App Router (routing, layouts)
│   ├── favicon.ico
│   ├── globals.css                   # Глобальные стили
│   ├── layout.tsx                    # Root layout с провайдерами
│   ├── page.tsx                      # Главная страница (редирект)
│   └── return-orders/                # Роуты для модуля возвратов
│       ├── [id]/
│       │   └── page.tsx              # Страница деталей возврата
│       ├── page.tsx                  # Страница списка возвратов
│       └── ReturnsPageClient.tsx     # Client компонент страницы списка
│
├── entities/                         # Доменные сущности (бизнес-логика)
│   └── return-orders/                # Сущность "Возврат заказа"
│       ├── index.ts                  # Публичный API модуля
│       └── ui/
│           └── ReturnOrderStatusBadge/
│               ├── component.tsx     # Компонент бейджа статуса
│               ├── index.ts
│               ├── styles.ts
│               └── types.ts
│
├── features/                         # Фичи (пользовательские сценарии)
│   └── return-orders/                # Фича "Управление возвратами"
│       ├── index.ts                  # Публичный API фичи
│       └── ui/
│           └── ReturnsTable.tsx      # Таблица возвратов
│
└── shared/                           # Общий код (переиспользуемый)
    ├── api/                          # API клиенты и React Query хуки
    │   ├── index.ts                  # Публичный API
    │   ├── ReactQueryProvider.tsx    # React Query провайдер
    │   ├── product/                  # API для одного продукта
    │   │   ├── api.ts
    │   │   ├── hook.ts
    │   │   ├── index.ts
    │   │   └── types.ts
    │   ├── products/                 # API для списка продуктов
    │   │   ├── api.ts
    │   │   ├── hook.ts
    │   │   ├── index.ts
    │   │   └── types.ts
    │   ├── return-order/             # API для одного возврата
    │   │   ├── api.ts
    │   │   ├── hook.ts
    │   │   ├── index.ts
    │   │   └── types.ts
    │   ├── return-orders/            # API для списка возвратов
    │   │   ├── api.ts
    │   │   ├── hook.ts
    │   │   ├── index.ts
    │   │   └── types.ts
    │   └── status-history/           # API для истории статусов
    │       ├── api.ts
    │       ├── hook.ts
    │       ├── index.ts
    │       └── types.ts
    │
    │
    ├── lib/                          # Утилиты и хелперы
    │   ├── error-boundary.tsx        # Error Boundary компонент
    │   ├── error-handler.ts          # Обработка ошибок
    │   ├── formatters.ts             # Форматирование данных
    │   ├── index.ts                  # Публичный API
    │   ├── routes.ts                 # Централизованные маршруты
    │   └── utils.ts                  # Утилиты (cn, etc.)
    │
    ├── mock-server/                  # Mock сервер для разработки
    │   ├── data/
    │   │   ├── index.ts              # Публичный API данных
    │   │   ├── products.ts           # Mock данные продуктов
    │   │   ├── return-order-products.ts
    │   │   ├── return-order-status-history.ts
    │   │   └── return-orders.ts      # Mock данные возвратов
    │   └── libs/
    │       └── helpers.ts            # Вспомогательные функции
    │
    └── ui/                           # UI-кит (design system)
        └── components/               # Базовые компоненты
            ├── index.ts              # Публичный API компонентов
            ├── Badge/                # Компонент бейджа
            │   ├── component.tsx
            │   ├── index.ts
            │   ├── styles.ts
            │   └── types.ts
            ├── Button/               # Компонент кнопки
            │   ├── component.tsx
            │   ├── index.ts
            │   ├── styles.ts
            │   └── types.ts
            ├── Card/                 # Компонент карточки
            │   ├── component.tsx
            │   ├── index.ts
            │   ├── styles.ts
            │   ├── types.ts
            │   ├── CardHeader/       # Заголовок карточки
            │   │   ├── component.tsx
            │   │   ├── index.ts
            │   │   ├── styles.ts
            │   │   └── types.ts
            │   ├── CardContent/      # Контент карточки
            │   │   ├── component.tsx
            │   │   ├── index.ts
            │   │   ├── styles.ts
            │   │   └── types.ts
            │   └── CardFooter/      # Футер карточки
            │       ├── component.tsx
            │       ├── index.ts
            │       ├── styles.ts
            │       └── types.ts
            ├── Input/                # Компонент инпута
            │   ├── component.tsx
            │   ├── index.ts
            │   ├── styles.ts
            │   └── types.ts
            ├── LoadingSpinner/       # Компонент загрузки
            │   ├── component.tsx
            │   ├── index.ts
            │   ├── styles.ts
            │   └── types.ts
            ├── Tabs/                 # Компонент табов
            │   ├── component.tsx
            │   ├── index.ts
            │   ├── styles.ts
            │   └── types.ts
            └── Typography/           # Компонент типографики
                ├── component.tsx
                ├── index.ts
                ├── styles.ts
                └── types.ts
```

### Почему такая структура?

1. **Разделение ответственности**: Каждый слой решает свою задачу
   - `app/` - только роутинг и layout (можно сказать что это страницы pages как в FSD)
   - `features/` - пользовательские сценарии с UI c api (объединяющие всё необходимо в ниже стоящих слоях)
   - `entities/` - чистая бизнес-логика без UI (составные элементы из простых shared/ui/components)
   - `shared/` - переиспользуемый атомарный код и ассеты

## ВАЖНО: 
1. заметье что я старался наименовать сущности наименованием директории, а сами файлы наименовать некоторой абстракцией (это во-первых дает возможность сосредоточниться на структуре проекта)
2. Все типы данных начинются с приставик `T` это сделана для индификации что это тип данных, а не компонент или класс 
3. Да, я providers вынес в shared (по методологии они должны быть в app, но в nextjs не могу туда их поместить иначе создаться роут и да не хочу ообрачивать даже в этом случае в круглые скобки /app/(providers) чтобы небыло роута)
4. Т.к в задании небыло ничего сказана о эндпоинтах сколько их, какая стурктура, я решил принять, что от сервера возращается простая плоская стурктура под каждую сущность (это максимально приблеженно на то, что возращают таблицы в релиационных БД при считывании их). Да, я мог пойти простым путём тупо сделать 2 метода один на получения списка, а другой на подгрузку выбраной сущности, в удобной мне структуре, но решил сделать немного по иначе
5. В данной работе важно сказать я задейстовал Cursor AI для ускорения темпор разработки и для систематизации и генерации компонентов (перепроверил, чтобы компоненты были расширяемые и атомарными)!