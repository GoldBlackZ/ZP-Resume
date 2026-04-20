/**
 * 个人作品集网站 - JavaScript 交互脚本
 * 功能：语言切换、导航栏滚动效果、移动端菜单、平滑滚动、动画效果
 */

// ========================================
// 国际化配置
// ========================================
const i18n = {
    zh: {
        'nav.about': '關於',
        'nav.education': '教育',
        'nav.skills': '技能',
        'nav.experience': '經歷',
        'nav.projects': '項目',
        'nav.contact': '聯繫',
        'hero.title': 'AI產品運營總監 | 金融科技專家',
        'hero.subtitle': '金融科技 / 數字營銷 / 數據分析',
        'hero.phone': '電話：69958288',
        'hero.scroll': '向下滚动了解更多',
        'about.title': '關於我',
        'about.text': '10+年金融科技、房地產數字化、AI產品運營實戰經驗，兼具商業戰略思維+AI技術落地能力，能打通"業務需求-AI模型開發-產品商業化"全鏈路；主導從0到1搭建金融科技平臺、數字化營銷體系，服務頭部企業超50家，累計落地專利、軟著超30項，操盤業務交易規模超百億；現攻讀AI商業分析碩士，系統掌握AI建模、大數據架構技術，無縫銜接產業/商業AI數字化發展要求。',
        'education.title': '教育背景',
        'education.master1.degree': '碩士研究生 - AI商業分析',
        'education.master1.school': '香港·嶺南大學 Lingnan University',
        'education.master1.date': '2025/09 - 至今（在讀）',
        'education.master1.detail': 'Master of Science in Artificial Intelligence and Business Analytics | Grade: 3.67 / 4.0<br>核心課程：AI基礎、商業分析、數據庫管理、機器-深度學習、區塊鏈、計算機視覺、數據可視化等',
        'education.master2.degree': '碩士研究生 - 電氣工程（通訊方向）',
        'education.master2.school': '美國·喬治華盛頓大學 The George Washington University',
        'education.master2.date': '2010/01 - 2012/02',
        'education.master2.detail': 'Electrical Engineering | Grade Scholarship，發表論文',
        'education.bachelor.degree': '本科學士 - 材料科學與工程',
        'education.bachelor.school': '北京·華北電力大學（211、985平臺高校）',
        'education.bachelor.date': '2005/09 - 2009/06',
        'education.bachelor.detail': '校優秀學生、校獎學金、校學生會',
        'skills.title': '資質技能',
        'skills.tech.title': '核心技術棧',
        'skills.ai.title': 'AI專業能力',
        'skills.data.title': '數據分析',
        'skills.product.title': '產品設計',
        'skills.pm.title': '項目管理',
        'skills.fintech.title': '金融科技',
        'experience.title': '履職經歷',
        'experience.job1.title': 'AI產品運營總監',
        'experience.job1.company': '深圳術源萬算信息技術有限公司',
        'experience.job1.date': '2024/11 - 至今',
        'experience.job2.title': 'AI合富互聯網平臺 運營總監',
        'experience.job2.company': '合富輝煌集團（香港聯交所：0733.HK）',
        'experience.job2.date': '2016/08 - 2024/10',
        'experience.job3.title': '互聯網金融事業部 部門經理',
        'experience.job3.company': '合富輝煌集團',
        'experience.job3.date': '兼任',
        'experience.job4.title': '運營總監',
        'experience.job4.company': '深圳第三方互聯網服務股份有限公司',
        'experience.job4.date': '2015/07 - 2016/08',
        'experience.job5.title': '產品經理',
        'experience.job5.company': '廣東德利發展集團有限公司',
        'experience.job5.date': '2013/07 - 2015/07',
        'experience.job6.title': 'IT工程師',
        'experience.job6.company': '聯合國NGO機構（美國）United Nation Association',
        'experience.job6.date': '2011/12 - 2013/06',
        'projects.title': 'AI實戰項目',
        'projects.p1.title': '金融信用評估預測模型',
        'projects.p1.scenario': '場景：中小微企業信貸風控，解決傳統評估低效、主觀性強問題',
        'projects.p1.tech': '技術：PyTorch+決策樹/迴歸算法，Hadoop分佈式處理5萬+條數據',
        'projects.p1.result': '成果：達行業可用準確率，輸出自動化信用評級',
        'projects.p2.title': '房產智能評估與個性化推薦系統',
        'projects.p2.scenario': '場景：地產數字化，實現房產價值動態評估+房源精準匹配',
        'projects.p2.tech': '技術：Python+Spark大數據架構，多因子估值模型+推薦算法',
        'projects.p2.result': '成果：評估效率提升80%，推薦精準度+60%，用戶轉化率+35%',
        'projects.p3.title': '基於區塊鏈的金融數據分析平臺',
        'projects.p3.scenario': '場景：金融數據安全，解決泄露、篡改風險，RWA資產上鍊',
        'projects.p3.tech': '技術：分佈式架構+Solidity智能合約，全流程數據上鍊存證',
        'projects.p3.result': '成果：滿足區塊鏈安全合規，參與香港區塊鏈競賽',
        'projects.p4.title': 'SRR 智能案件處理系統（房屋署AI）',
        'projects.p4.scenario': '場景：香港建築署斜坡維修申請，解決政務案件處理慢痛點',
        'projects.p4.tech': '技術：7層Agent架構，集OCR/多模態/RAG/GraphRAG/Transformer',
        'projects.p4.result': '成果：處理時長從55min降至10min，信息提取準確率95%+',
        'achievements.title': '專利著作與成果',
        'achievements.patents.title': '知識產權',
        'achievements.patents.text': '金融科技、房地產數字化營銷、AI大數據領域專利+軟著超30項',
        'achievements.papers.title': '學術論文',
        'achievements.papers.text': 'AI領域論文2篇（待刊），國際會議論文（CISS 2012，普林斯頓大學）',
        'achievements.ai.title': 'AI生態資質',
        'achievements.ai.text': '華為、超聚變SA大模型生態合作伙伴、字節火山引擎AI服務商',
        'achievements.scale.title': '業務規模',
        'achievements.scale.text': '操盤業務交易規模超百億，服務頭部企業超50家',
        'contact.title': '聯繫方式',
        'contact.location': '香港 / 深圳',
        'contact.languages': '語言：英語流利（工作語言）、粵語基礎（日常溝通）、普通話',
        'contact.download': '下載簡歷 PDF',
        'contact.download.note': '點擊下載我的完整簡歷（PDF格式）',
        'footer.text': '© 2025 張鵬 Zhang Peng. All Rights Reserved.',
        'skills.tech.list': [
            'Python (Pandas/Numpy/Matplotlib/Scikit-learn)',
            'PyTorch (深度學習/模型構建)',
            'Solidity (區塊鏈智能合約)',
            'SQL (MySQL/PostgreSQL)',
            'Hadoop / Spark 大數據架構'
        ],
        'skills.ai.list': [
            'Transformer架構、長文本處理',
            'Diffusion模型 (圖像/視頻生成)',
            'RAG (知識增強檢索)',
            'Hugging Face生態微調',
            '多模態內容生成'
        ],
        'skills.data.list': [
            'SPSS (統計分析)',
            'PowerBI / Tableau',
            '帆軟 (企業級BI報表)',
            '端到端數據分析鏈路'
        ],
        'skills.product.list': [
            'Axure RP / 墨刀 / Sketch',
            'PRD/MRD / 高保真原型',
            'HTML5/JavaScript',
            'Jupyter Notebook / VS Code'
        ],
        'skills.pm.list': [
            'PMI-PMP 認證',
            'Jira / Asana / Linear',
            '敏捷開發',
            '全生命週期管控'
        ],
        'skills.fintech.list': [
            '基金從業資格',
            '資產評估師',
            'CFA Level I',
            '廣州金融科技人才庫'
        ],
        'experience.job1.detail': [
            '帶領AI項目實施和交付、商業化運作與拓展',
            '主導AI大數據系統、BI智能分析大屏、生產銷售大模型等產品落地',
            '成功對接新寶電器、北京汽車、中國菸草、五菱汽車等頭部企業',
            '推動公司取得AI相關專利9項，在5大行業形成垂類模型優勢',
            '成為字節跳動火山引擎、華為昇騰的AI生態合作伙伴'
        ],
        'experience.job2.detail': [
            '參與集團AI+數字化轉型戰略，構建全鏈路數字營銷體系',
            '完成官網、App、小程序、抖音/視頻號等新媒體矩陣搭建',
            '覆蓋全國83區分運營平臺，累計為550萬家庭提供服務',
            '推進AI智能版圖、房地產評估系統、徵信等項目落地',
            '獲行業"最佳數字化轉型項目獎"'
        ],
        'experience.job3.detail': [
            '負責合富金融科技Fintech的互聯網端到端運營',
            '為10萬+中小企業提供融資擔保服務，平臺累計成交規模超百億',
            '獲得12項系統技術軟件著作權',
            '幫助公司申請成為高新技術企業、普惠金融協會會長單位'
        ],
        'experience.job4.detail': [
            '負責IT產品運營管理與線上合規化經營',
            '主導公司F2B系統平臺建設與O2O推廣',
            '為超過200家中小企業完成投融資服務'
        ],
        'experience.job5.detail': [
            '制定IT互聯網產品全週期運營計劃',
            '負責綠色電商生活平臺、供應鏈金融App等產品實現'
        ],
        'experience.job6.detail': [
            '負責華盛頓DC特區的聯合國慈善基金網站開發與維護',
            '服務23萬慈善家客戶，優化客戶管理界面'
        ]
    },
    en: {
        'nav.about': 'About',
        'nav.education': 'Education',
        'nav.skills': 'Skills',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'hero.title': 'AI Product Operations Director | Fintech Expert',
        'hero.subtitle': 'Fintech / Digital Marketing / Data Analytics',
        'hero.phone': 'Tel: 69958288',
        'hero.scroll': 'Scroll down to learn more',
        'about.title': 'About Me',
        'about.text': '10+ years of hands-on experience in fintech, real estate digitalization, and AI product operations, combining business strategic thinking with AI technology implementation capabilities. Able to bridge the entire chain from "business requirements - AI model development - product commercialization". Led the building of fintech platforms and digital marketing systems from 0 to 1, serving over 50 top enterprises, with more than 30 patents and software copyrights landed, and managing business transactions exceeding 10 billion. Currently pursuing a Master\'s degree in AI Business Analytics, systematically mastering AI modeling and big data architecture technologies.',
        'education.title': 'Education',
        'education.master1.degree': 'MSc - AI and Business Analytics',
        'education.master1.school': 'Lingnan University, Hong Kong',
        'education.master1.date': '2025/09 - Present (Expected Jun 2026)',
        'education.master1.detail': 'Master of Science in Artificial Intelligence and Business Analytics | GPA: 3.67 / 4.0<br>Core Courses: AI Fundamentals, Business Analytics, Database Management, Machine-Deep Learning, Blockchain, Computer Vision, Data Visualization',
        'education.master2.degree': 'MSc - Electrical Engineering (Communications)',
        'education.master2.school': 'The George Washington University, USA',
        'education.master2.date': '2010/01 - 2012/02',
        'education.master2.detail': 'Electrical Engineering | Grade Scholarship, Published Papers',
        'education.bachelor.degree': 'BSc - Materials Science and Engineering',
        'education.bachelor.school': 'North China Electric Power University (211/985), Beijing',
        'education.bachelor.date': '2005/09 - 2009/06',
        'education.bachelor.detail': 'Outstanding Student, University Scholarship, Student Union Member',
        'skills.title': 'Skills & Qualifications',
        'skills.tech.title': 'Core Tech Stack',
        'skills.ai.title': 'AI Expertise',
        'skills.data.title': 'Data Analytics',
        'skills.product.title': 'Product Design',
        'skills.pm.title': 'Project Management',
        'skills.fintech.title': 'Fintech',
        'experience.title': 'Work Experience',
        'experience.job1.title': 'AI Product Operations Director',
        'experience.job1.company': 'Shenzhen Shuyuan Wansuan Information Technology Co., Ltd.',
        'experience.job1.date': '2024/11 - Present',
        'experience.job2.title': 'AI Hofu Internet Platform - Operations Director',
        'experience.job2.company': 'Hofu Brilliant Group (HKEX: 0733)',
        'experience.job2.date': '2016/08 - 2024/10',
        'experience.job3.title': 'Internet Finance Division - Department Manager',
        'experience.job3.company': 'Hofu Brilliant Group',
        'experience.job3.date': 'Concurrent',
        'experience.job4.title': 'Operations Director',
        'experience.job4.company': 'Shenzhen Third Party Internet Service Co., Ltd.',
        'experience.job4.date': '2015/07 - 2016/08',
        'experience.job5.title': 'Product Manager',
        'experience.job5.company': 'Guangdong Deli Development Group Co., Ltd.',
        'experience.job5.date': '2013/07 - 2015/07',
        'experience.job6.title': 'IT Engineer',
        'experience.job6.company': 'United Nation Association (NGO, USA)',
        'experience.job6.date': '2011/12 - 2013/06',
        'projects.title': 'AI Projects',
        'projects.p1.title': 'Financial Credit Assessment Model',
        'projects.p1.scenario': 'Scenario: SME credit risk control, solving traditional assessment inefficiency and subjectivity',
        'projects.p1.tech': 'Tech: PyTorch + Decision Tree/Regression, Hadoop distributed processing of 50K+ records',
        'projects.p1.result': 'Result: Industry-usable accuracy, automated credit rating output',
        'projects.p2.title': 'Real Estate Intelligent Valuation & Recommendation System',
        'projects.p2.scenario': 'Scenario: Real estate digitalization, dynamic property valuation + precise matching',
        'projects.p2.tech': 'Tech: Python + Spark big data architecture, multi-factor valuation + recommendation algorithms',
        'projects.p2.result': 'Result: Valuation efficiency +80%, recommendation accuracy +60%, user conversion +35%',
        'projects.p3.title': 'Blockchain-based Financial Data Analytics Platform',
        'projects.p3.scenario': 'Scenario: Financial data security, solving leakage and tampering risks, RWA tokenization',
        'projects.p3.tech': 'Tech: Distributed architecture + Solidity smart contracts, full-process data on-chain',
        'projects.p3.result': 'Result: Blockchain security compliance, participated in Hong Kong blockchain competition',
        'projects.p4.title': 'SRR Intelligent Case Processing System (Housing Dept AI)',
        'projects.p4.scenario': 'Scenario: Hong Kong Buildings Dept slope repair applications, solving slow processing',
        'projects.p4.tech': 'Tech: 7-layer Agent architecture, OCR/Multimodal/RAG/GraphRAG/Transformer',
        'projects.p4.result': 'Result: Processing time reduced from 55min to 10min, info extraction accuracy 95%+',
        'achievements.title': 'Patents & Achievements',
        'achievements.patents.title': 'Intellectual Property',
        'achievements.patents.text': '30+ patents and software copyrights in fintech, real estate digital marketing, and AI big data',
        'achievements.papers.title': 'Academic Papers',
        'achievements.papers.text': '2 AI papers (pending publication), International conference paper (CISS 2012, Princeton)',
        'achievements.ai.title': 'AI Ecosystem Partnerships',
        'achievements.ai.text': 'Huawei & Inspur SA LLM ecosystem partner, ByteDance Volcano Engine AI service provider',
        'achievements.scale.title': 'Business Scale',
        'achievements.scale.text': 'Managed business transactions exceeding 10 billion, served 50+ top enterprises',
        'contact.title': 'Contact',
        'contact.location': 'Hong Kong / Shenzhen',
        'contact.languages': 'Languages: English (Fluent, working language), Cantonese (Basic), Mandarin',
        'contact.download': 'Download Resume PDF',
        'contact.download.note': 'Click to download my complete resume (PDF format)',
        'footer.text': '© 2025 Zhang Peng. All Rights Reserved.',
        'skills.tech.list': [
            'Python (Pandas/Numpy/Matplotlib/Scikit-learn)',
            'PyTorch (Deep Learning / Model Building)',
            'Solidity (Blockchain Smart Contracts)',
            'SQL (MySQL/PostgreSQL)',
            'Hadoop / Spark Big Data Architecture'
        ],
        'skills.ai.list': [
            'Transformer Architecture, Long-text Processing',
            'Diffusion Models (Image/Video Generation)',
            'RAG (Retrieval-Augmented Generation)',
            'Hugging Face Ecosystem Fine-tuning',
            'Multimodal Content Generation'
        ],
        'skills.data.list': [
            'SPSS (Statistical Analysis)',
            'PowerBI / Tableau',
            'FanRuan (Enterprise BI Reporting)',
            'End-to-end Data Analytics Pipeline'
        ],
        'skills.product.list': [
            'Axure RP / Modao / Sketch',
            'PRD/MRD / High-fidelity Prototypes',
            'HTML5/JavaScript',
            'Jupyter Notebook / VS Code'
        ],
        'skills.pm.list': [
            'PMI-PMP Certified',
            'Jira / Asana / Linear',
            'Agile Development',
            'Full Lifecycle Management'
        ],
        'skills.fintech.list': [
            'Fund Practitioner Qualification',
            'Asset Appraiser',
            'CFA Level I',
            'Guangzhou Fintech Talent Pool'
        ],
        'experience.job1.detail': [
            'Led AI project implementation, delivery, and commercialization',
            'Spearheaded AI big data systems, BI analytics dashboards, sales LLM products',
            'Successfully partnered with Xinbao Electric, BAIC, China Tobacco, Wuling Motors',
            'Drove 9 AI-related patents, established vertical model advantages in 5 industries',
            'Became ByteDance Volcano Engine and Huawei Ascend AI ecosystem partner'
        ],
        'experience.job2.detail': [
            'Participated in group AI+digital transformation strategy, built full-chain digital marketing system',
            'Launched official website, App, mini-programs, Douyin/Video accounts matrix',
            'Covered 83 districts nationwide, served 5.5M families cumulatively',
            'Advanced AI intelligent map, real estate valuation, credit reporting projects',
            'Won industry "Best Digital Transformation Project Award"'
        ],
        'experience.job3.detail': [
            'Managed end-to-end internet operations for Hofu Fintech',
            'Provided financing guarantee services for 100K+ SMEs, platform transactions exceeded 10B',
            'Obtained 12 system technology software copyrights',
            'Helped company become High-tech Enterprise and Inclusive Finance Association President Unit'
        ],
        'experience.job4.detail': [
            'Managed IT product operations and online compliance',
            'Led F2B platform construction and O2O promotion',
            'Completed investment and financing services for 200+ SMEs'
        ],
        'experience.job5.detail': [
            'Developed full-lifecycle IT internet product operation plans',
            'Implemented green e-commerce platform, supply chain finance App products'
        ],
        'experience.job6.detail': [
            'Developed and maintained UN charity fund website in Washington DC',
            'Served 230K philanthropist clients, optimized client management interface'
        ]
    }
};

// ========================================
// 当前语言状态
// ========================================
let currentLang = 'zh';

// ========================================
// DOM 加载完成后初始化
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initMobileMenu();
    initLanguageToggle();
    initScrollAnimations();
    initSmoothScroll();
    initActiveNavigation();
});

// ========================================
// 导航栏滚动效果
// ========================================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // 添加滚动效果
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// ========================================
// 移动端菜单
// ========================================
function initMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // 切换汉堡菜单动画
        const spans = navToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // 点击链接后关闭菜单
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// ========================================
// 语言切换
// ========================================
function initLanguageToggle() {
    const langToggle = document.getElementById('lang-toggle');
    const langCn = langToggle.querySelector('.lang-cn');
    const langEn = langToggle.querySelector('.lang-en');

    langToggle.addEventListener('click', function() {
        if (currentLang === 'zh') {
            currentLang = 'en';
            langCn.classList.remove('active');
            langEn.classList.add('active');
            document.documentElement.lang = 'en';
        } else {
            currentLang = 'zh';
            langEn.classList.remove('active');
            langCn.classList.add('active');
            document.documentElement.lang = 'zh';
        }
        updateContent();
    });
}

// 更新内容
function updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        
        if (i18n[currentLang][key]) {
            // 检查是否是列表元素
            if (key.endsWith('.list') && element.tagName === 'UL') {
                const items = i18n[currentLang][key];
                element.innerHTML = items.map(item => `<li>${item}</li>`).join('');
            } else if (key.endsWith('.detail') && element.tagName === 'UL') {
                const items = i18n[currentLang][key];
                element.innerHTML = items.map(item => `<li>${item}</li>`).join('');
            } else {
                element.innerHTML = i18n[currentLang][key];
            }
        }
    });
    
    // 更新聊天机器人内容
    updateChatbotContent();
}

// ========================================
// 滚动动画
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) translateX(0)';
            }
        });
    }, observerOptions);

    // 观察所有需要动画的元素
    const animatedElements = document.querySelectorAll(
        '.section-title, .about-content, .timeline-item, .skill-card, .project-card, .achievement-card, .contact-item'
    );

    animatedElements.forEach((el, index) => {
        // 设置初始状态 - 保持可见但添加过渡效果
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.05}s, transform 0.6s ease ${index * 0.05}s`;
        observer.observe(el);
    });

    // Fallback: 如果 IntersectionObserver 不可用或失败，确保内容可见
    if (!('IntersectionObserver' in window)) {
        animatedElements.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
    }

    // 额外安全检查：5秒后强制显示所有元素
    setTimeout(() => {
        animatedElements.forEach(el => {
            if (el.style.opacity === '0') {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                el.classList.add('visible');
            }
        });
    }, 3000);
}

// ========================================
// 平滑滚动
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// 活跃导航链接
// ========================================
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        let current = '';
        const navbarHeight = document.getElementById('navbar').offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 100;
            const sectionHeight = section.offsetHeight;

            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// ========================================
// 打字机效果（可选增强）
// ========================================
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ========================================
// 数字动画（可选增强）
// ========================================
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    
    window.requestAnimationFrame(step);
}

// ========================================
// 聊天机器人
// ========================================

// 聊天机器人知识库
const chatbotKnowledge = {
    // 技能相关
    'python': {
        zh: "是的，我完全掌握了Python，并在多个实际项目中使用过，包括Pandas/Numpy/Matplotlib/Scikit-learn等库。我在金融信用评估预测模型、房产智能评估系统等项目中都使用了Python进行开发。",
        en: "Yes, I have mastered Python and used it in multiple real projects, including libraries like Pandas/Numpy/Matplotlib/Scikit-learn. I have used Python in projects such as Financial Credit Assessment Model and Real Estate Intelligent Valuation System."
    },
    'pytorch': {
        zh: "是的，我熟练使用PyTorch进行深度学习模型构建。在金融信用评估预测模型中，我使用PyTorch结合决策树/回归算法处理了5万+条数据。",
        en: "Yes, I am proficient in using PyTorch for deep learning model building. In the Financial Credit Assessment Model, I used PyTorch combined with decision tree/regression algorithms to process 50,000+ records."
    },
    'ai': {
        zh: "我有丰富的AI专业能力，包括：\n• Transformer架构、长文本处理\n• Diffusion模型（图像/视频生成）\n• RAG（知识增强检索）\n• Hugging Face生态微调\n• 多模态内容生成",
        en: "I have extensive AI expertise, including:\n• Transformer architecture, long-text processing\n• Diffusion models (image/video generation)\n• RAG (Retrieval-Augmented Generation)\n• Hugging Face ecosystem fine-tuning\n• Multimodal content generation"
    },
    '技术': {
        zh: "我的核心技术栈包括：\n• Python (Pandas/Numpy/Matplotlib/Scikit-learn)\n• PyTorch (深度学习/模型构建)\n• Solidity (区块链智能合约)\n• SQL (MySQL/PostgreSQL)\n• Hadoop / Spark 大数据架构",
        en: "My core tech stack includes:\n• Python (Pandas/Numpy/Matplotlib/Scikit-learn)\n• PyTorch (Deep Learning / Model Building)\n• Solidity (Blockchain Smart Contracts)\n• SQL (MySQL/PostgreSQL)\n• Hadoop / Spark Big Data Architecture"
    },
    
    // 项目经验相关
    '项目': {
        zh: "我有多个AI实战项目经验：\n1. 金融信用评估预测模型 - 使用PyTorch+决策树/回归算法，Hadoop分布式处理5万+条数据\n2. 房产智能评估与个性化推荐系统 - 使用Python+Spark大数据架构，多因子估值模型+推荐算法\n3. 基于区块链的金融数据分析平台 - 使用分布式架构+Solidity智能合约，全流程数据上链存证\n4. SRR智能案件处理系统（房屋署AI） - 使用7层Agent架构，集OCR/多模态/RAG/GraphRAG/Transformer",
        en: "I have several AI project experiences:\n1. Financial Credit Assessment Model - Using PyTorch+decision tree/regression algorithms, Hadoop distributed processing of 50K+ records\n2. Real Estate Intelligent Valuation & Recommendation System - Using Python+Spark big data architecture, multi-factor valuation+recommendation algorithms\n3. Blockchain-based Financial Data Analytics Platform - Using distributed architecture+Solidity smart contracts, full-process data on-chain\n4. SRR Intelligent Case Processing System (Housing Dept AI) - Using 7-layer Agent architecture, integrating OCR/multimodal/RAG/GraphRAG/Transformer"
    },
    '金融信用': {
        zh: "金融信用评估预测模型：这是一个针对中小微企业信贷风控的项目，解决了传统评估低效、主观性强的问题。使用PyTorch+决策树/回归算法，Hadoop分布式处理5万+条数据，达到了行业可用准确率，输出了自动化信用评级。",
        en: "Financial Credit Assessment Model: This is a project for SME credit risk control, solving traditional assessment inefficiency and subjectivity. Using PyTorch+decision tree/regression algorithms, Hadoop distributed processing of 50K+ records, achieving industry-usable accuracy and outputting automated credit ratings."
    },
    '房产': {
        zh: "房产智能评估与个性化推荐系统：这个项目实现了房产价值动态评估+房源精准匹配。使用Python+Spark大数据架构，多因子估值模型+推荐算法，评估效率提升80%，推荐精准度+60%，用户转化率+35%。",
        en: "Real Estate Intelligent Valuation & Recommendation System: This project achieves dynamic property valuation + precise matching. Using Python+Spark big data architecture, multi-factor valuation+recommendation algorithms, valuation efficiency +80%, recommendation accuracy +60%, user conversion +35%."
    },
    '区块链': {
        zh: "基于区块链的金融数据分析平台：这个项目解决了金融数据泄露、篡改风险，实现RWA资产上链。使用分布式架构+Solidity智能合约，全流程数据上链存证，满足区块链安全合规，参与了香港区块链竞赛。",
        en: "Blockchain-based Financial Data Analytics Platform: This project solves financial data leakage and tampering risks, achieving RWA tokenization. Using distributed architecture+Solidity smart contracts, full-process data on-chain, meeting blockchain security compliance, participated in Hong Kong blockchain competition."
    },
    
    // 工作履历相关
    '工作': {
        zh: "我的工作履历：\n1. AI产品运营总监 - 深圳術源萬算信息技術有限公司 (2024/11 - 至今)\n2. AI合富互聯網平臺 運營總監 - 合富輝煌集團 (2016/08 - 2024/10)\n3. 互聯網金融事業部 部門經理 - 合富輝煌集團 (兼任)\n4. 運營總監 - 深圳第三方互聯網服務股份有限公司 (2015/07 - 2016/08)\n5. 產品經理 - 廣東德利發展集團有限公司 (2013/07 - 2015/07)\n6. IT工程師 - 聯合國NGO機構（美國） (2011/12 - 2013/06)",
        en: "My work experience:\n1. AI Product Operations Director - Shenzhen Shuyuan Wansuan Information Technology Co., Ltd. (2024/11 - Present)\n2. AI Hofu Internet Platform - Operations Director - Hofu Brilliant Group (2016/08 - 2024/10)\n3. Internet Finance Division - Department Manager - Hofu Brilliant Group (Concurrent)\n4. Operations Director - Shenzhen Third Party Internet Service Co., Ltd. (2015/07 - 2016/08)\n5. Product Manager - Guangdong Deli Development Group Co., Ltd. (2013/07 - 2015/07)\n6. IT Engineer - United Nation Association (NGO, USA) (2011/12 - 2013/06)"
    },
    '职责': {
        zh: "我目前的工作职责：\n• 带领AI项目实施和交付、商业化运作与拓展\n• 主导AI大数据系统、BI智能分析大屏、生产销售大模型等产品落地\n• 成功对接新宝电器、北京汽车、中国烟草、五菱汽车等头部企业\n• 推动公司取得AI相关专利9项，在5大行业形成垂类模型优势\n• 成为字节跳动火山引擎、华为昇腾的AI生态合作伙伴",
        en: "My current responsibilities:\n• Lead AI project implementation, delivery, and commercialization\n• Spearhead AI big data systems, BI analytics dashboards, sales LLM products\n• Successfully partner with Xinbao Electric, BAIC, China Tobacco, Wuling Motors\n• Drive 9 AI-related patents, establish vertical model advantages in 5 industries\n• Become ByteDance Volcano Engine and Huawei Ascend AI ecosystem partner"
    },
    
    // 教育背景相关
    '教育': {
        zh: "我的教育背景：\n1. 硕士研究生 - AI商业分析 - 香港·嶺南大學 (2025/09 - 至今)\n2. 硕士研究生 - 电气工程（通讯方向） - 美国·乔治华盛顿大学 (2010/01 - 2012/02)\n3. 本科学生 - 材料科学与工程 - 北京·华北电力大学 (2005/09 - 2009/06)",
        en: "My education background:\n1. MSc - AI and Business Analytics - Lingnan University, Hong Kong (2025/09 - Present)\n2. MSc - Electrical Engineering (Communications) - The George Washington University, USA (2010/01 - 2012/02)\n3. BSc - Materials Science and Engineering - North China Electric Power University, Beijing (2005/09 - 2009/06)"
    },
    
    // 联系方式相关
    '联系': {
        zh: "你可以通过以下方式联系我：\n• 邮箱：zhangpeng20252025@163.com\n• 电话：69958288\n• 地点：香港 / 深圳\n• 语言：英语流利（工作语言）、粤语基础（日常沟通）、普通话",
        en: "You can contact me through:\n• Email: zhangpeng20252025@163.com\n• Phone: 69958288\n• Location: Hong Kong / Shenzhen\n• Languages: English (Fluent, working language), Cantonese (Basic), Mandarin"
    },
    
    // 默认回答
    'default': {
        zh: "你好！我是张鹏的AI助手。我可以回答关于张鹏的技能、项目经验、工作履历、教育背景等方面的问题。你可以尝试问我：\n• 你有什么AI项目经验？\n• 你最擅长的技术是什么？\n• 你目前的工作职责是什么？\n• 你的教育背景是怎样的？",
        en: "Hello! I'm Zhang Peng's AI assistant. I can answer questions about Zhang Peng's skills, project experience, work history, education background, etc. You can try asking me:\n• What AI project experience do you have?\n• What are your strongest technical skills?\n• What are your current work responsibilities?\n• What is your education background?"
    }
};

// 聊天机器人初始化
function initChatbot() {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotDialog = document.getElementById('chatbot-dialog');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const quickQuestions = document.querySelectorAll('.quick-question');
    
    // 添加欢迎消息
    addBotMessage(getChatbotResponse('greeting'));
    
    // 切换对话框显示/隐藏
    chatbotToggle.addEventListener('click', function() {
        chatbotDialog.classList.toggle('active');
        if (chatbotDialog.classList.contains('active')) {
            chatbotInput.focus();
        }
    });
    
    chatbotClose.addEventListener('click', function() {
        chatbotDialog.classList.remove('active');
    });
    
    // 发送消息
    chatbotSend.addEventListener('click', sendMessage);
    
    chatbotInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // 预设问题按钮
    quickQuestions.forEach(button => {
        button.addEventListener('click', function() {
            const question = this.getAttribute('data-question');
            chatbotInput.value = question;
            sendMessage();
        });
    });
    
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (!message) return;
        
        // 添加用户消息
        addUserMessage(message);
        
        // 清空输入框
        chatbotInput.value = '';
        
        // 模拟思考延迟
        setTimeout(() => {
            const response = getChatbotResponse(message);
            addBotMessage(response);
        }, 500);
    }
    
    function addUserMessage(text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message user';
        messageDiv.textContent = text;
        chatbotMessages.appendChild(messageDiv);
        scrollToBottom();
    }
    
    function addBotMessage(text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message bot';
        messageDiv.textContent = text;
        chatbotMessages.appendChild(messageDiv);
        scrollToBottom();
    }
    
    function scrollToBottom() {
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    function getChatbotResponse(question) {
        const lang = currentLang;
        const questionLower = question.toLowerCase();
        
        // 关键词匹配
        const keywords = [
            { key: 'python', priority: 1 },
            { key: 'pytorch', priority: 1 },
            { key: 'ai', priority: 1 },
            { key: '技术', priority: 1 },
            { key: '技能', priority: 1 },
            { key: '项目', priority: 2 },
            { key: '金融信用', priority: 2 },
            { key: '房产', priority: 2 },
            { key: '区块链', priority: 2 },
            { key: '工作', priority: 3 },
            { key: '职责', priority: 3 },
            { key: '教育', priority: 4 },
            { key: '联系', priority: 5 },
            { key: 'contact', priority: 5 },
            { key: 'hello', priority: 0 },
            { key: 'hi', priority: 0 },
            { key: '你好', priority: 0 },
            { key: 'greeting', priority: 0 }
        ];
        
        // 检查是否是问候语
        if (questionLower.includes('hello') || questionLower.includes('hi') || 
            questionLower.includes('你好') || question === 'greeting') {
            return chatbotKnowledge['default'][lang];
        }
        
        // 按优先级匹配关键词
        const matchedKeywords = keywords
            .filter(kw => questionLower.includes(kw.key))
            .sort((a, b) => a.priority - b.priority);
        
        if (matchedKeywords.length > 0) {
            const bestMatch = matchedKeywords[0];
            if (chatbotKnowledge[bestMatch.key]) {
                return chatbotKnowledge[bestMatch.key][lang];
            }
        }
        
        // 如果没有匹配到关键词，返回默认回答
        return chatbotKnowledge['default'][lang];
    }
}

// 在DOM加载完成后初始化聊天机器人
document.addEventListener('DOMContentLoaded', function() {
    // 原有的初始化函数
    initNavigation();
    initMobileMenu();
    initLanguageToggle();
    initScrollAnimations();
    initSmoothScroll();
    initActiveNavigation();
    
    // 新增：初始化聊天机器人
    initChatbot();
});

// 更新聊天机器人国际化内容
function updateChatbotContent() {
    const chatbotTitle = document.querySelector('[data-i18n="chatbot.title"]');
    const chatbotInput = document.getElementById('chatbot-input');
    
    if (chatbotTitle && i18n[currentLang]['chatbot.title']) {
        chatbotTitle.textContent = i18n[currentLang]['chatbot.title'];
    }
    
    if (chatbotInput && i18n[currentLang]['chatbot.placeholder']) {
        chatbotInput.placeholder = i18n[currentLang]['chatbot.placeholder'];
    }
}

// 扩展i18n对象，添加聊天机器人相关文本
i18n.zh['chatbot.title'] = 'AI助手';
i18n.zh['chatbot.placeholder'] = '输入你的问题...';
i18n.en['chatbot.title'] = 'AI Assistant';
i18n.en['chatbot.placeholder'] = 'Type your question...';
