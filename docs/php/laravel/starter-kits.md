---
---

# Starter Kits

## Laravel Jetstream

### 依頼パッケージインストール
```bash
./vendor/bin/sail composer require laravel/jetstream
```

### Livewire インストール
```bash
./vendor/bin/sail artisan jetstream:install livewire
```
チーム機能必要な場合は
```bash
./vendor/bin/sail artisan jetstream:install livewire --teams
```

### Inertia インストール
```bash
./vendor/bin/sail artisan jetstream:install inertia
```

チーム機能必要な場合は
```bash
./vendor/bin/sail artisan jetstream:install inertia --teams
```
SSR サポート必要な場合は
```bash
./vendor/bin/sail artisan jetstream:install inertia --ssr
```

Livewire でも、Inertiaでも　`dark` モードが必要な場合は `--dark` でインストールできます。
```bash
./vendor/bin/sail artisan jetstream:install livewire --dart
```

最後、下記のコマンドでインストールを完了させます。
```bash
./vendor/bin/sail npm install
./vendor/bin/sail npm run build
./vendor/bin/sail artisan migrate
```