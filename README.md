# 張鵬 Zhang Peng - 个人作品集网站

这是一个专业的个人介绍网站，支持中英文（繁体/English）双语切换，专为部署到 GitHub Pages 设计。

## 🌟 功能特点

- **响应式设计** - 完美适配桌面、平板和手机
- **双语支持** - 一键切换繁体中文/英文
- **平滑滚动** - 流畅的页面导航体验
- **滚动动画** - 元素进入视口时的优雅动画
- **现代化 UI** - 简洁专业的设计风格
- **无需构建** - 纯 HTML/CSS/JS，开箱即用

## 📁 项目结构

```
personal-portfolio/
├── index.html      # 主 HTML 文件
├── style.css       # 样式文件
├── script.js       # JavaScript 交互脚本
└── README.md       # 项目说明文档
```

## 🚀 部署到 GitHub Pages

### 方法一：创建用户名站点（推荐）

1. **创建 GitHub 仓库**
   - 访问 [GitHub](https://github.com)
   - 创建新仓库，命名为：`你的用户名.github.io`
   - 例如：如果用户名是 `zhangpeng2025`，则仓库名为 `zhangpeng2025.github.io`

2. **上传文件**
   ```bash
   # 克隆仓库到本地
   git clone https://github.com/你的用户名/zhangpeng2025.github.io.git
   
   # 将项目文件复制到仓库目录
   cp personal-portfolio/* zhangpeng2025.github.io/
   
   # 提交并推送
   cd zhangpeng2025.github.io
   git add .
   git commit -m "Initial commit - Personal portfolio website"
   git push origin main
   ```

3. **访问网站**
   - 几分钟后访问：`https://你的用户名.github.io`

### 方法二：使用项目站点

1. **创建 GitHub 仓库**
   - 创建任意名称的仓库，如 `portfolio`

2. **上传文件**
   ```bash
   git clone https://github.com/你的用户名/portfolio.git
   cp personal-portfolio/* portfolio/
   cd portfolio
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **配置 GitHub Pages**
   - 进入仓库的 **Settings** → **Pages**
   - 在 **Source** 下选择 `main` 分支
   - 点击 **Save**

4. **访问网站**
   - 访问：`https://你的用户名.github.io/portfolio`

## 🛠 本地开发

直接在浏览器中打开 `index.html` 文件即可预览：

```bash
# 在浏览器中打开
open index.html  # Mac
start index.html # Windows
xdg-open index.html # Linux
```

或者使用本地服务器：

```bash
# 使用 Python
python -m http.server 8000

# 使用 Node.js
npx serve .
```

然后访问 `http://localhost:8000`

## 📝 自定义内容

### 修改个人信息

1. 编辑 `index.html` 文件中的文本内容
2. 在 `script.js` 中更新 `i18n` 对象来修改双语内容

### 修改样式

- 编辑 `style.css` 文件
- 主要颜色变量在 `:root` 中定义：
  ```css
  --primary-color: #2563eb;    /* 主色调 */
  --accent-color: #06b6d4;     /* 强调色 */
  ```

### 添加头像

在 `index.html` 的 Hero 区域添加头像：

```html
<div class="hero-avatar">
    <img src="your-photo.jpg" alt="張鵬 Zhang Peng">
</div>
```

然后在 `style.css` 中添加相应样式。

### 📄 添加简历 PDF 下载

网站已包含简历下载功能。要启用此功能：

1. **将 Word 简历转换为 PDF**
   - 打开 Word 文档
   - 点击"文件" → "另存为" → 选择 PDF 格式
   - 保存为 `张鹏_简历_Zhang_Peng_Resume.pdf`

2. **将 PDF 文件放入 assets 文件夹**
   ```
   personal-portfolio/
   └── assets/
       └── 张鹏_简历_Zhang_Peng_Resume.pdf
   ```

3. **上传到 GitHub 时确保包含 assets 文件夹**
   ```bash
   git add assets/
   git commit -m "Add resume PDF"
   git push origin main
   ```

> **注意**：如果 PDF 文件名不同，请修改 `index.html` 中 `download-btn` 的 `href` 属性。

## 📱 移动端优化

网站已针对移动端进行优化：
- 响应式导航菜单（汉堡菜单）
- 适配各种屏幕尺寸
- 触摸友好的交互

## 🌐 浏览器支持

- Chrome (最新)
- Firefox (最新)
- Safari (最新)
- Edge (最新)
- 移动端浏览器

## 📄 许可证

MIT License - 可自由使用和修改

## 🤝 贡献

如需修改或改进，欢迎创建 Pull Request。

---

**网站预览：** [https://你的用户名.github.io](https://你的用户名.github.io)

**联系方式：** zhangpeng20252025@163.com