---
---
# Homebrew
## 説明
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

### パッケージインストール
```bash
brew install [パッケージ名]
```
例：

```bash
brew install pnpm
```
