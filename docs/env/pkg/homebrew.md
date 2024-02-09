---
---
# Homebrew
macOS（またはLinux）用パッケージマネージャー

## インストール方法
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

::: tip
M1(M2) 搭載の Mac の場合、更に以下のコマンドが必要です。
:::

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc
source ~/.zshrc
```

## コマンド説明
### バージョン確認
```bash
brew -v
```

### Homebrew更新
::: tip
Homebrew自体を更新します

インストールしたパッケージは更新しません
:::
```bash
brew update
```

### コマンド説明
```bash
brew help
```

### パッケージインストール
```bash
brew install [パッケージ名]
```
例：

```bash
brew install pnpm
```

### パッケージ更新
```bash
brew upgrade
```
::: tip
`brew upgrade` は Homebrew も、インストールしたパッケージも全部更新しますので、インストールしたパッケージが多い場合、時間かかるかもしれません
:::

### 個別パッケージ更新
```bash
brew upgrade [パッケージ名]
```
例：

```bash
brew upgrade pnpm
```

### パッケージ削除
```bash
brew uninstall [パッケージ名]
```
例：

```bash
brew uninstall pnpm
```

### パッケージ検索
```bash
brew search [パッケージ名]
```
例：
```bash
brew search wget
```

### パッケージの詳細情報を表示
```bash
brew info [パッケージ名]
```
例：
```bash
brew info wget
```

### インストールしたパッケージ一覧を表示
```bash
brew list
```