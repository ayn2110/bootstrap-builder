(function () {
    const level = window.levelConfig;
    const navigationConfig = {
        chapters: [
            {
                id: '1',
                title: '第一章：網格系統與排版基礎',
                levels: [
                    { id: '1-1', title: '容器邊界' },
                    { id: '1-2', title: '全寬內容' },
                    { id: '1-3', title: '啟動分欄' },
                    { id: '1-4', title: '自動填充' },
                    { id: '1-5', title: '通用類別' },
                    { id: '1-6', title: '雙欄對等' },
                    { id: '1-7', title: '多包一層' },
                    { id: '1-8', title: '三欄佈局' },
                    { id: '1-9', title: '五等份挑戰' },
                    { id: '1-10', title: '多筆資料' },
                    { id: '1-11', title: '左窄右寬' },
                    { id: '1-12', title: '左寬右窄' },
                    { id: '1-13', title: '若超過12' },
                    { id: '1-14', title: '若加總超過12' },
                    { id: '1-15', title: '巢狀網格' }
                ]
            },
            {
                id: '2',
                title: '第二章：間距與對齊',
                levels: [
                    { id: '2-1', title: '水平居中' },
                    { id: '2-2', title: '文字置中' },
                    { id: '2-3', title: '底部外擴' },
                    { id: '2-4', title: '頂部留白' },
                    { id: '2-5', title: '垂直對齊' },
                    { id: '2-6', title: '均勻分佈' }
                ]
            },
            {
                id: '3',
                title: '第三章：響應式設計',
                levels: [
                    { id: '3-1', title: '中斷點分割' },
                    { id: '3-2', title: '順序反轉' },
                    { id: '3-3', title: '欄位位移' },
                    { id: '3-4', title: '消除間距' },
                    { id: '3-5', title: '特定隱藏' }
                ]
            }
        ]
    };

    if (!level) {
        document.body.innerHTML = '<div style="padding:20px;color:#dc3545;">缺少 levelConfig 設定。</div>';
        return;
    }

    const state = {
        inputs: [],
        previewWindow: null
    };

    const params = new URLSearchParams(window.location.search);
    const isFullscreenMode = params.get('mode') === 'fullscreen';

    function sanitizeClassInput(value) {
        return (value || '').replace(/[^a-zA-Z0-9\-\s_]/g, '').trim();
    }

    function buildPreviewHtml(values) {
        let result = level.preview;
        (level.inputs || []).forEach((_, index) => {
            result = result.replace(new RegExp(`\\{\\{class${index + 1}\\}\\}`, 'g'), values[index] || '');
        });
        return result;
    }

    function getJoinedInputValues() {
        return state.inputs.filter(Boolean).join(' ').trim();
    }

    function showFeedback(message, isSuccess) {
        const feedback = document.getElementById('feedback');
        feedback.className = `feedback ${isSuccess ? 'success' : 'error'}`;
        feedback.textContent = message;
        feedback.style.display = 'block';
    }

    function hideFeedback() {
        const feedback = document.getElementById('feedback');
        feedback.style.display = 'none';
    }

    function renderCodeEditor() {
        const editor = document.getElementById('codeEditor');
        if (!editor) return;

        const escaped = (level.htmlTemplate || '')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

        const withInputs = (level.inputs || []).reduce((content, inputDef, index) => {
            const placeholder = `{{input${index + 1}}}`;
            const inputElement = `<input type="text" class="code-input" id="inputClass${index}" placeholder="${inputDef.placeholder || ''}" value="${state.inputs[index] || ''}">`;
            return content.replace(new RegExp(placeholder.replace(/[{}]/g, '\\$&'), 'g'), inputElement);
        }, escaped);

        editor.innerHTML = withInputs
            .split('\n')
            .map(line => `<div class="code-line">${line}</div>`)
            .join('');
    }

    function updatePreview() {
        const previewArea = document.getElementById('previewArea');
        if (!previewArea) return;
        previewArea.innerHTML = buildPreviewHtml(state.inputs);
    }

    function checkAnswer() {
        const answers = (level.inputs || []).map(item => (item.answer || '').toLowerCase());
        const isCorrect = answers.every((answer, index) => (state.inputs[index] || '').toLowerCase() === answer);

        if (isCorrect) {
            showFeedback('🎉 太棒了！答案正確。', true);
        } else {
            showFeedback('❌ 還不太對喔，再試試看！', false);
        }
    }

    function resetCode() {
        state.inputs = (level.inputs || []).map(() => '');
        renderCodeEditor();
        updatePreview();
        hideFeedback();
        bindInputEvents();
        pushUpdateToFullscreen();
    }

    function buildFullscreenUrl() {
        const url = new URL(window.location.href);
        url.searchParams.set('mode', 'fullscreen');
        (level.inputs || []).forEach((_, index) => {
            url.searchParams.set(`class${index + 1}`, state.inputs[index] || '');
        });
        return url.toString();
    }

    function openFullscreenPreview() {
        const url = buildFullscreenUrl();
        if (state.previewWindow && !state.previewWindow.closed) {
            state.previewWindow.focus();
            pushUpdateToFullscreen();
            return;
        }
        state.previewWindow = window.open(url, '_blank', 'noopener');
    }

    function pushUpdateToFullscreen() {
        if (state.previewWindow && !state.previewWindow.closed) {
            state.previewWindow.postMessage({ type: 'preview-update', values: state.inputs }, window.location.origin);
        }
    }

    function bindInputEvents() {
        (level.inputs || []).forEach((_, index) => {
            const input = document.getElementById(`inputClass${index}`);
            if (!input) return;
            input.addEventListener('input', (event) => {
                const safeValue = sanitizeClassInput(event.target.value);
                state.inputs[index] = safeValue;
                if (event.target.value !== safeValue) {
                    event.target.value = safeValue;
                }
                updatePreview();
                hideFeedback();
                pushUpdateToFullscreen();
            });
        });
    }

    function bindMainEvents() {
        bindInputEvents();
        document.getElementById('btnCheck').addEventListener('click', checkAnswer);
        document.getElementById('btnReset').addEventListener('click', resetCode);
        document.getElementById('btnFullscreen').addEventListener('click', openFullscreenPreview);
    }

    function updateFullscreenPreview(values) {
        const preview = document.getElementById('fullscreenPreview');
        const currentClass = document.getElementById('currentClass');
        if (!preview) return;
        const joined = values.filter(Boolean).join(' ').trim();
        if (currentClass) {
            currentClass.textContent = joined || '(空白)';
        }
        preview.innerHTML = buildPreviewHtml(values);
    }

    function bindFullscreenMessage() {
        window.addEventListener('message', (event) => {
            if (event.origin !== window.location.origin) return;
            if (!event.data || event.data.type !== 'preview-update' || !Array.isArray(event.data.values)) return;
            state.inputs = event.data.values.map(item => sanitizeClassInput(item));
            updateFullscreenPreview(state.inputs);
        });
    }

    function renderMainPage() {
        const currentChapterId = (level.id || '').split('-')[0];
        const currentChapter = navigationConfig.chapters.find(chapter => chapter.id === currentChapterId);
        const currentLevelIndex = (currentChapter?.levels || []).findIndex(item => item.id === level.id);
        const chapterProgressText = currentChapter
            ? `${currentChapter.title}：${currentLevelIndex + 1} / ${currentChapter.levels.length}`
            : `關卡：${level.id}`;

        const navItems = navigationConfig.chapters
            .map(chapter => {
                const links = chapter.levels
                    .map(item => {
                        const isActive = item.id === level.id;
                        return `<a href="./${item.id}.html" class="list-group-item list-group-item-action ${isActive ? 'active' : ''}">${item.id} ${item.title}</a>`;
                    })
                    .join('');

                return `
                    <div class="border-bottom">
                        <div class="px-3 py-2 fw-bold bg-light">${chapter.title}</div>
                        <div class="list-group list-group-flush">${links}</div>
                    </div>
                `;
            })
            .join('');

        document.getElementById('app').innerHTML = `
            <div class="game-container">
                <div class="header">
                    <div class="header-top">
                        <h2 class="mb-0" style="font-size: 1.8rem;">Bootstrap Builder（關卡 ${level.id}）</h2>
                        <div class="d-flex align-items-center gap-2 text-white">
                            <span style="font-size: 0.9em; white-space: nowrap;">${chapterProgressText}</span>
                            <div class="progress-bar-container" style="width: 100px; margin: 0; height: 8px; background: rgba(255,255,255,0.3);">
                                <div class="progress-bar-fill" style="width: 100%"></div>
                            </div>
                            <button class="btn-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#chapterOffcanvas" aria-controls="chapterOffcanvas">
                                ☰ 導覽
                            </button>
                        </div>
                    </div>
                </div>

                <div class="main-content">
                    <div class="left-panel">
                        <div class="level-info">
                            <div class="level-number">關卡 ${level.id}</div>
                            <div class="level-title">${level.title}</div>
                            <div class="level-description">${level.description}</div>
                        </div>

                        <div class="section">
                            <div class="section-title">程式碼編輯器</div>
                            <div class="code-editor" id="codeEditor"></div>
                            <div class="button-group">
                                <button class="btn-custom btn-check" id="btnCheck">✓ 檢查答案</button>
                                <button class="btn-custom btn-reset" id="btnReset">↻ 重置</button>
                            </div>
                            <div class="feedback" id="feedback"></div>
                        </div>

                        <div class="section">
                            <div class="section-title">💡 提示</div>
                            <div class="hint-section">${level.hint || ''}</div>
                            <div class="manual-section" style="margin-top: 15px; display: block;">
                                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #007bff;">
                                    <div style="font-weight: bold; color: #495057; margin-bottom: 8px;">📚 Bootstrap 官方手冊</div>
                                    <div style="font-size: 0.9em; color: #6c757d; margin-bottom: 10px;">${level.pageTitle || ''}</div>
                                    <a href="${level.pageLink || '#'}" target="_blank" style="color: #007bff; text-decoration: none; font-size: 0.9em;">📖 查看官方文檔 →</a>
                                </div>
                            </div>
                            <div class="css-supplement-section" style="margin-top: 15px; display: block;">
                                <div style="background: #e2e3e5; padding: 15px; border-radius: 8px; border-left: 4px solid #6c757d;">
                                    <div style="font-weight: bold; color: #495057; margin-bottom: 8px;">🎨 CSS 補充</div>
                                    <pre style="margin: 0; white-space: pre-wrap; font-size: 0.85em; color: #212529;"><code>${level.cssRule || ''}</code></pre>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="right-panel">
                        <div class="section">
                            <div class="section-title d-flex justify-content-between align-items-center">
                                <span>即時預覽</span>
                                <button class="btn-custom btn-preview-full" id="btnFullscreen" style="max-width: 210px; font-size: 0.9rem; padding: 8px 12px;">🔍 全螢幕預覽</button>
                            </div>
                            <div class="preview-area" id="previewArea"></div>
                        </div>

                        <div class="section">
                            <div class="section-title">🎯 目標效果參考</div>
                            <div class="reference-image">
                                <a href="${level.url || '#'}" target="_blank">
                                    <img src="${level.image || './images/no-image.png'}" alt="參考圖片" style="max-width: 100%; border-radius: 5px; display: block;">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="offcanvas offcanvas-end" tabindex="-1" id="chapterOffcanvas" aria-labelledby="chapterOffcanvasLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="chapterOffcanvasLabel">章節導覽</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body p-0">
                        ${navItems}
                    </div>
                </div>
            </div>
        `;

        state.inputs = (level.inputs || []).map(() => '');
        renderCodeEditor();
        updatePreview();
        bindMainEvents();
    }

    function renderFullscreenPage() {
        state.inputs = (level.inputs || []).map((_, index) => sanitizeClassInput(params.get(`class${index + 1}`) || ''));

        document.getElementById('app').innerHTML = `
            <div class="fullscreen-page">
                <div class="fullscreen-toolbar">
                    <div>
                        <div><strong>關卡 ${level.id} 全螢幕預覽</strong></div>
                        <div class="fullscreen-note">目前輸入：<code id="currentClass">(空白)</code></div>
                    </div>
                </div>
                <div class="fullscreen-stage">
                    <div id="fullscreenPreview"></div>
                </div>
            </div>
        `;

        updateFullscreenPreview(state.inputs);
        bindFullscreenMessage();
    }

    if (isFullscreenMode) {
        renderFullscreenPage();
    } else {
        renderMainPage();
    }
})();
