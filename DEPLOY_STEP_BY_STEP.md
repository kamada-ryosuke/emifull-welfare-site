# EMIFULL障がい福祉事業部サイト 外部共有URL作成 手順書

対象フォルダ：

```txt
C:/Users/user01/Documents/Codex/2026-05-18/web-ui-ux-emifull-https-sorato/
```

Vercel設定：

```txt
Framework：Next.js
Build Command：npm run build:vercel
Output Directory：out
Install Command：npm install
```

この手順どおりに進めると、外部の人がアクセスできる `https://xxxxx.vercel.app` のURLを作成できます。

---

## STEP 1：GitHubアカウントを確認

やること：

GitHubにログインできるか確認します。

クリックする場所：

1. ブラウザで `https://github.com/` を開く
2. 右上の `Sign in` をクリック
3. メールアドレスまたはユーザー名、パスワードを入力

入力する内容：

- GitHubのメールアドレスまたはユーザー名
- パスワード
- 2段階認証がある場合は認証コード

注意点：

- GitHubアカウントがない場合は `Sign up` から作成してください。
- 会社用アカウントで管理する場合は、個人アカウントではなく会社管理のGitHubを使うのが理想です。

完了の目安：

GitHubの右上に自分のアイコンが表示されていればOKです。

---

## STEP 2：GitHubで新しいリポジトリを作成

やること：

サイトのコードを置く場所をGitHub上に作ります。

クリックする場所：

1. GitHub右上の `+` ボタンをクリック
2. `New repository` をクリック

入力する内容：

```txt
Repository name：emifull-welfare-site
Description：EMIFULL障がい福祉事業部 統合サイト
Public / Private：Private 推奨
```

チェック項目：

- `Add a README file` はチェックしない
- `.gitignore` は選ばない
- `Choose a license` は選ばない

注意点：

このあとローカルフォルダからアップロードするため、GitHub側では空のリポジトリを作ります。

完了の目安：

作成後、以下のようなURLが表示されます。

```txt
https://github.com/ユーザー名/emifull-welfare-site
```

このURLをコピーしておいてください。

---

## STEP 3：ローカルフォルダをGitHubへpushする

やること：

作成したサイトフォルダをGitHubへアップロードします。

開くもの：

- Git Bash または PowerShell

まず以下を実行します。

```bash
cd "C:/Users/user01/Documents/Codex/2026-05-18/web-ui-ux-emifull-https-sorato"
```

次に、GitHubへ送る準備をします。

```bash
git init
git add .
git commit -m "initial deploy"
git branch -M main
```

次に、GitHubのリポジトリURLを登録します。

`<GitHubのURL>` は、STEP 2で作成したURLに置き換えてください。

例：

```bash
git remote add origin https://github.com/ユーザー名/emifull-welfare-site.git
git push -u origin main
```

入力する内容：

GitHubログインを求められた場合は、GitHubの認証を行ってください。

注意点：

- GitHubのURLは `.git` で終わるURLを使うと分かりやすいです。
- `node_modules` や `.next` は `.gitignore` によりアップロードされません。
- `out` もアップロードされません。Vercel側で自動生成します。

完了の目安：

GitHubのリポジトリ画面を再読み込みして、以下のフォルダやファイルが見えていればOKです。

```txt
app
components
data
lib
public
package.json
next.config.mjs
vercel.json
```

---

## STEP 4：Vercelアカウントを確認

やること：

Vercelにログインします。

クリックする場所：

1. `https://vercel.com/` を開く
2. `Log In` または `Sign Up` をクリック
3. `Continue with GitHub` を選ぶ

入力する内容：

GitHub連携の許可画面が出たら許可します。

注意点：

GitHubとVercelを連携すると、GitHubにpushした変更が自動でVercelへ反映されます。

完了の目安：

VercelのDashboardが表示されればOKです。

---

## STEP 5：VercelでImport Projectする

やること：

GitHubにアップロードしたプロジェクトをVercelへ読み込みます。

クリックする場所：

1. Vercel Dashboardを開く
2. `Add New...` をクリック
3. `Project` をクリック
4. GitHubリポジトリ一覧から `emifull-welfare-site` を探す
5. `Import` をクリック

注意点：

リポジトリが表示されない場合は、GitHub連携権限が不足している可能性があります。

対応：

1. VercelのGitHub連携設定を開く
2. `emifull-welfare-site` へのアクセスを許可
3. VercelのImport画面を再読み込み

完了の目安：

VercelのProject設定画面に進めばOKです。

---

## STEP 6：VercelのBuild設定を入力

やること：

Vercelでビルド設定を確認・入力します。

クリックする場所：

Import Project画面の `Configure Project`

入力する内容：

```txt
Framework Preset：Next.js
Build Command：npm run build:vercel
Output Directory：out
Install Command：npm install
```

Root Directory：

通常は空欄のままでOKです。

注意点：

- `Output Directory` は必ず `out` にしてください。
- `Build Command` は `npm run build:vercel` にしてください。
- `npm run build:preview` はローカルのfile確認用なので、Vercelでは使いません。

完了の目安：

Build設定が上記と同じになっていればOKです。

---

## STEP 7：環境変数を設定

やること：

Vercelに公開URLや計測IDなどを登録します。

クリックする場所：

1. Configure Project画面内の `Environment Variables`
2. または Project作成後に `Settings` > `Environment Variables`

入力する内容：

まずはプレビュー公開用として、以下を入れてください。

```txt
NEXT_PUBLIC_SITE_URL=https://あとで発行されるURL.vercel.app
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_LINE_URL=https://lin.ee/XXXXXXXX
NEXT_PUBLIC_PHONE_NUMBER=0000000000
NEXT_PUBLIC_FORM_URL=https://example.com/contact-form
```

まだ正式情報がない場合：

```txt
NEXT_PUBLIC_SITE_URL=https://あとで発行されるURL.vercel.app
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_LINE_URL=https://lin.ee/XXXXXXXX
NEXT_PUBLIC_PHONE_NUMBER=0000000000
NEXT_PUBLIC_FORM_URL=https://example.com/contact-form
```

注意点：

- 最初のデプロイ前はVercel URLがまだ分からないため、`NEXT_PUBLIC_SITE_URL` は仮でもOKです。
- デプロイ後に発行されたURLへ変更し、再デプロイしてください。
- GA4 IDが未発行なら `G-XXXXXXXXXX` のままで構いませんが、本番公開前に差し替えてください。

完了の目安：

Environment Variablesに上記のKeyが登録されていればOKです。

---

## STEP 8：Deployを実行

やること：

Vercelで公開処理を開始します。

クリックする場所：

1. 設定を確認
2. `Deploy` ボタンをクリック

待つ時間：

通常1〜3分程度です。

注意点：

Buildエラーが出た場合は、Vercelのエラー画面に表示されるログを確認します。

完了の目安：

以下のようなURLが発行されればOKです。

```txt
https://emifull-welfare-site-xxxxx.vercel.app
```

---

## STEP 9：発行されたURLを確認

やること：

Vercelが発行したURLでサイトが開くか確認します。

クリックする場所：

VercelのDeploy完了画面に表示される `Visit` ボタン

確認するURL例：

```txt
https://emifull-welfare-site-xxxxx.vercel.app
```

確認するページ：

```txt
/
/about
/services
/services/jido-hattatsu
/services/houkago-day
/services/hoikusho-houmon
/services/group-home
/services/b-type
/brands
/facilities
/consultation
/recruit
/faq
/sitemap.xml
/robots.txt
```

完了の目安：

トップページと下層ページが404にならず開けばOKです。

---

## STEP 10：スマホで確認

やること：

発行されたURLをスマホで開きます。

方法：

1. Vercel URLを自分のスマホへ送る
2. iPhone Safari または Android Chrome で開く

確認すること：

- トップページが開く
- 文字が小さすぎない
- 下部固定CTAが表示される
- LINE相談、電話相談、見学予約、施設検索が押せる
- ハンバーガーメニューが開く
- 画像が表示される
- 横スクロールが出ない
- 相談ページのフォームが見やすい

完了の目安：

スマホで違和感なくトップから相談ページまで進めればOKです。

---

## STEP 11：URL共有前の確認

やること：

理事長・関係者へ送る前に、最低限の確認をします。

確認するファイル：

```txt
SHARE_CHECKLIST.md
TODO_PUBLICATION.md
PUBLICATION_CHECKLIST.md
```

特に確認すること：

- 電話番号が仮のままではないか
- LINE URLが仮のままではないか
- フォーム送信先が仮のままではないか
- 住所・営業時間が「確認中」でも共有して問題ないか
- 画像が関係者確認用として問題ないか

完了の目安：

共有前チェックに問題がなければ、URLを共有できます。

---

# トラブル対応

## git が使えない

症状：

```txt
git: command not found
```

対応：

1. Gitをインストールします。
2. `https://git-scm.com/downloads` を開く
3. Windows版をダウンロード
4. インストール後、PowerShellまたはGit Bashを開き直す
5. 以下を実行

```bash
git --version
```

バージョンが表示されればOKです。

---

## GitHubのリポジトリ作成が分からない

対応：

1. GitHub右上の `+` をクリック
2. `New repository`
3. Repository name に `emifull-welfare-site`
4. `Private` を選ぶ
5. READMEなどは追加しない
6. `Create repository`

---

## git push でエラーが出る

よくある原因：

- GitHubのURLが間違っている
- ログイン認証ができていない
- すでにremote originが登録されている

確認コマンド：

```bash
git remote -v
```

remoteを入れ直す場合：

```bash
git remote remove origin
git remote add origin https://github.com/ユーザー名/emifull-welfare-site.git
git push -u origin main
```

---

## VercelでBuildエラーが出る

まず確認する場所：

VercelのDeploy画面 > `Build Logs`

確認する設定：

```txt
Build Command：npm run build:vercel
Output Directory：out
Install Command：npm install
Framework：Next.js
```

よくある原因：

- Build Commandが違う
- Output Directoryが `out` になっていない
- GitHubに必要ファイルがpushされていない
- Nodeの依存関係インストールに失敗している

対応：

1. Vercel Project Settingsを開く
2. Build & Development Settingsを確認
3. 上記の設定に直す
4. Deployments > Redeploy

---

## 画像が表示されない

確認すること：

- `public/images` に画像が入っているか
- GitHubに `public/images` がアップロードされているか
- VercelのBuildが成功しているか

対応：

GitHub上で以下を確認してください。

```txt
public/images/hero-life-01.webp
public/images/brand-sorato.webp
public/images/brand-umie.webp
```

画像がなければ、ローカルから再pushしてください。

---

## ページが404になる

確認するURL：

```txt
/about
/services
/services/jido-hattatsu
/brands/sorato
/facilities
/consultation
```

対応：

1. VercelのBuild Commandが `npm run build:vercel` か確認
2. Output Directoryが `out` か確認
3. 再デプロイ

---

## 環境変数が分からない

最低限、最初は以下だけで進められます。

```txt
NEXT_PUBLIC_SITE_URL=https://発行されたURL.vercel.app
```

後で正式に入れるもの：

```txt
NEXT_PUBLIC_GA_ID
NEXT_PUBLIC_LINE_URL
NEXT_PUBLIC_PHONE_NUMBER
NEXT_PUBLIC_FORM_URL
```

---

## Deploy後に修正したい

やること：

1. ローカルでファイルを修正
2. GitHubへpush
3. Vercelが自動で再デプロイ

コマンド：

```bash
git add .
git commit -m "update site"
git push
```

---

## 再デプロイしたい

GitHubから再デプロイ：

```bash
git add .
git commit -m "redeploy"
git push
```

Vercel管理画面から再デプロイ：

1. Vercel Projectを開く
2. `Deployments` を開く
3. 最新デプロイの右側メニューをクリック
4. `Redeploy` をクリック

---

# 最短コマンドまとめ

GitHubリポジトリ作成後、以下をコピーして使えます。

`<GitHubのURL>` は自分のリポジトリURLに置き換えてください。

```bash
cd "C:/Users/user01/Documents/Codex/2026-05-18/web-ui-ux-emifull-https-sorato"
git init
git add .
git commit -m "initial deploy"
git branch -M main
git remote add origin <GitHubのURL>
git push -u origin main
```

例：

```bash
cd "C:/Users/user01/Documents/Codex/2026-05-18/web-ui-ux-emifull-https-sorato"
git init
git add .
git commit -m "initial deploy"
git branch -M main
git remote add origin https://github.com/your-name/emifull-welfare-site.git
git push -u origin main
```
