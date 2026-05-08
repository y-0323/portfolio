# LP媒体別ディレクトリ

媒体ごとにLPデザインを作成するための作業フォルダです。

- `meta/`: Meta広告向け
- `google/`: Google広告向け
- `yahoo/`: Yahoo!広告向け
- `tiktok/`: TikTok広告向け
- `instagram/`: Instagram広告向け
- `line/`: LINE広告向け
- `x/`: X(旧Twitter)広告向け

必要に応じて各フォルダ内に `index.html` / `scss` / `assets` などを作成してください。

## Savoriaプレビュー手順

`practice/lp/savoria.html` はこのリポジトリ配下の相対パスです。  
`/workspace/portfolio/...` はCodex実行環境専用の絶対パスのため、ローカルMacでは存在しません。

### ローカル確認コマンド（Mac / Linux）

```bash
cd /Users/<your-name>/path/to/portfolio  # 例
python3 -m http.server 8080
# ブラウザで http://localhost:8080/practice/lp/savoria.html を開く
```

### ファイル存在確認

```bash
ls practice/lp/savoria.html
```


> ※ `<>` はプレースホルダ記法です。ターミナルにそのまま入力すると構文エラーになります。
