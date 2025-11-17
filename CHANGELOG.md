# CHANGELOG

所有值得注意的本專案更新都將被記錄在此檔案中。

格式基於 [Keep a Changelog](https://keepachangelog.com/zh-TW/) 規範，
本專案遵循 [Semantic Versioning](https://semver.org/lang/zh-TW/) 版本控制。

## [未發佈]

### 計劃中
- 📊 集成參考設計圖片到每個關卡
- 🏆 成就和勳章系統
- 💾 進度保存功能（localStorage）
- 🌍 多語言支援
- 📱 進一步的行動裝置最佳化
- 🔍 菜單搜尋功能
- ⌨️ 快捷鍵支援

---

## [v0.3.0] - 2025-11-17

### 新增
- ✨ **Offcanvas 級別導航菜單** - 右側滑出式遊戲大綱
- 🎯 **快速關卡導航** - 可從菜單直接跳轉至任意關卡
- 📍 **活躍狀態指示器** - 菜單中高亮顯示當前關卡
- 🎨 **菜單樣式優化** - 美化 offcanvas 的視覺設計
- 📊 **主題分類展示** - 3 個主題的關卡組織結構

### 改進
- 🔧 **Header 佈局優化** - 使用 Flexbox 實現菜單按鈕右對齐
- 📱 **響應式設計增強** - 菜單在行動裝置上自適應寬度（100%）
- ✨ **使用者交互改進** - 平滑的滾動和過渡效果
- 🎨 **CSS 樣式重構** - 新增 60+ 行菜單和 header 相關樣式

### 修復
- 🐛 **CSS 屬性修正** - 修正 `line-opacity` 為 `opacity`
- 🐛 **跨平台同步問題解決** - 確保本機和遠程版本一致

### 技術細節
- 新增 `updateMenuActiveState()` 函數用於菜單狀態管理
- 新增 `jumpToLevel()` 函數實現菜單導航跳轉
- 集成 Bootstrap Offcanvas 組件
- 改進 JavaScript 函數邏輯

---

## [v0.2.0] - 2025-11-17

### 新增
- 📝 **CHANGELOG.md** - 版本歷史記錄文件
- ⚙️ **.gitattributes** - 統一行尾符設定

### 文件
- 📝 建立完整的版本歷史記錄
- 📝 配置 Git 行尾符為 LF

---

## [v0.1.0] - 2025-11-17

### 新增
- 🎮 **完整遊戲框架** - 21 個互動式 Bootstrap 學習關卡
- 📚 **三大主題課程**
  - 主題一：網格系統與排版基礎（9 關）
  - 主題二：間距與對齊（7 關）
  - 主題三：響應式設計（5 關）
- 💻 **代碼編輯器** - 學生輸入 Bootstrap Class 的互動式編輯器
- 👁️ **即時預覽系統** - 即時顯示代碼效果
- ✅ **答案驗證機制** - 自動檢查學生輸入是否正確
- 📈 **進度追蹤** - 進度條和關卡計數器
- 💡 **提示系統** - 每個關卡提供學習提示
- 🏆 **完成頁面** - 全部關卡完成後顯示成就頁面

### 文件
- 📄 建立 `README.md` - 專案說明文檔
- 📝 建立 `.gitignore` - 排除不必要的檔案
- 🎨 建立 `styles.css` - 遊戲樣式表
- 📄 建立 `bootstrap-builder-game.html` - 主要遊戲 HTML

### 技術
- 使用 HTML5、CSS3、JavaScript ES6
- 集成 Bootstrap 5.3.2
- 純前端實現，無需後端

---

## 版本歷史說明

### Commit 詳情

#### b1d616f - Add .gitattributes to enforce LF line endings
**日期**: 2025-11-17  
**類型**: 配置改進

**變更內容**:
- 建立 `.gitattributes` 檔案
- 設定所有文本檔案統一使用 LF 行尾符
- 設定 `core.autocrlf = input` 確保跨平台一致性
- 設定 `core.safecrlf = false` 避免 CRLF 警告

**檔案變更**:
```
.gitattributes (新增)
- 統一行尾符設定
- 二進制檔案排除設定
```

---

#### 274ef12 - Initial commit: Bootstrap Builder game with 21 levels
**日期**: 2025-11-17  
**類型**: 初始提交

**變更內容**:
- 初始化專案結構
- 完成 21 個遊戲關卡的設計和實現
- 建立完整的遊戲邏輯和互動系統
- 建立專案文檔和配置

**檔案變更**:
```
bootstrap-builder-game.html (新增)
- 完整遊戲 HTML 結構
- 21 個關卡的資料定義
- JavaScript 遊戲邏輯
- 4 個輸入框（某些關卡支援多個輸入）
- 答案驗證系統
- 進度追蹤系統

styles.css (新增)
- 遊戲整體樣式
- 代碼編輯器樣式
- 預覽區域樣式
- 按鈕和反饋樣式
- 響應式設計

README.md (新增)
- 專案概述
- 技術棧說明
- 21 個關卡詳細列表
- 快速開始指南
- 學習收穫說明

.gitignore (新增)
- 系統文件排除
- IDE 配置排除
- 依賴檔案排除
- 編譯產物排除
```

---

## 貢獻者

- Bootstrap Builder 開發團隊

## 授權

MIT License

---

**最後更新**: 2025-11-17  
**當前版本**: v0.2.0
