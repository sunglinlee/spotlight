# SpotLight 網站 GitHub Pages 部署指南

## 步驟 1: 安裝必要套件

在專案根目錄執行：
```bash
npm install --save-dev gh-pages
```

## 步驟 2: 更新 package.json

已經為您更新了 `package.json`，但請記得修改 `homepage` 欄位：

```json
"homepage": "https://你的GitHub用戶名.github.io/spotlight"
```

## 步驟 3: 建立 GitHub 儲存庫

1. 前往 [GitHub](https://github.com) 並登入
2. 點擊右上角的 "+" 號，選擇 "New repository"
3. 儲存庫名稱輸入：`spotlight`
4. 選擇 "Public"（公開）
5. 不要勾選 "Add a README file"
6. 點擊 "Create repository"

## 步驟 4: 初始化 Git 並推送到 GitHub

在專案根目錄執行以下命令：

```bash
# 初始化 Git 儲存庫
git init

# 添加所有檔案
git add .

# 提交變更
git commit -m "Initial commit: SpotLight 汽車鍍膜網站"

# 添加遠端儲存庫（請替換 YOUR_USERNAME 為您的 GitHub 用戶名）
git remote add origin https://github.com/YOUR_USERNAME/spotlight.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

## 步驟 5: 部署到 GitHub Pages

執行部署命令：
```bash
npm run deploy
```

## 步驟 6: 設定 GitHub Pages

1. 前往您的 GitHub 儲存庫頁面
2. 點擊 "Settings" 標籤
3. 在左側選單中找到 "Pages"
4. 在 "Source" 部分選擇 "Deploy from a branch"
5. 在 "Branch" 下拉選單中選擇 "gh-pages"
6. 點擊 "Save"

## 步驟 7: 等待部署完成

部署通常需要幾分鐘時間。您可以在儲存庫的 "Actions" 標籤中查看部署進度。

## 步驟 8: 訪問您的網站

部署完成後，您的網站將可以通過以下網址訪問：
```
https://你的GitHub用戶名.github.io/spotlight
```

## 重要提醒

1. **修改 homepage URL**：記得在 `package.json` 中將 `your-username` 替換為您的實際 GitHub 用戶名

2. **後續更新**：每次修改程式碼後，執行以下命令重新部署：
   ```bash
   git add .
   git commit -m "更新描述"
   git push
   npm run deploy
   ```

3. **自訂網域**：如果您有自己的網域，可以在 GitHub Pages 設定中設定自訂網域

4. **HTTPS**：GitHub Pages 自動提供 HTTPS 憑證

## 故障排除

如果遇到問題：
- 確保所有依賴都已安裝：`npm install`
- 檢查 `homepage` URL 是否正確
- 確認 GitHub 儲存庫是公開的
- 檢查 GitHub Pages 設定是否正確

## 聯絡我們按鈕

網站右下角的聯絡我們按鈕會跳轉到實體門市頁面，確保所有功能都正常運作。 