// 动态创建HTML结构
(function () {
    // 创建HTML元素
    const html = document.implementation.createHTMLDocument('搜索框示例');

    // 创建样式
    const style = html.createElement('style');
    style.textContent = `
        /* 搜索框容器样式 */
        .search-container {
            text-align: center;
            margin: 20px auto;
            max-width: 600px;
        }

        /* 搜索框样式 */
        .search-box {
            display: flex;
            justify-content: center;
            align-items: stretch; /* 确保所有子元素高度一致 */
        }

        /* 搜索引擎图标 */
        .icon {
            width: 40px;
            height: 40px;
            background-size: cover;
            background-position: center;
            border: 1px solid #ccc;
            border-right: none; /* 去掉右侧边框，与输入框无缝衔接 */
            border-radius: 5px 0 0 5px;
            box-sizing: border-box; /* 确保边框包含在高度内 */
            cursor: pointer; /* 设置鼠标指针为手型 */
        }

        /* 输入框 */
        .search-box input[type='text'] {
            width: 300px;
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-left: none; /* 去掉左侧边框，与图标无缝衔接 */
            border-right: none; /* 去掉右侧边框，与选择框无缝衔接 */
            outline: none;
            box-sizing: border-box; /* 确保边框和内边距包含在高度内 */
            height: 40px; /* 固定高度 */
        }

        /* 选择框 */
        .search-box select {
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ccc; /* 保留完整的边框 */
            border-right: none; /* 去掉右侧边框，与按钮无缝衔接 */
            background-color: #fff;
            cursor: pointer;
            box-sizing: border-box; /* 确保边框包含在高度内 */
            height: 40px; /* 固定高度 */
        }

        /* 按钮 */
        .search-box button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #0073e6;
            color: #fff;
            border: none;
            border-radius: 0 5px 5px 0;
            cursor: pointer;
            box-sizing: border-box; /* 确保内边距包含在高度内 */
            height: 40px; /* 固定高度 */
        }

        /* 按钮悬停效果 */
        .search-box button:hover {
            background-color: #005bb5;
        }
    `;
    html.head.appendChild(style);

    // 创建搜索框容器
    const searchContainer = html.createElement('div');
    searchContainer.className = 'search-container';

    // 创建搜索框
    const searchBox = html.createElement('div');
    searchBox.className = 'search-box';

    // 创建图标
    const icon = html.createElement('div');
    icon.id = 'search-icon';
    icon.style.backgroundImage = "url('im/ss/baidu.ico')";
    icon.className = 'icon';
    searchBox.appendChild(icon);

    // 创建输入框
    const input = html.createElement('input');
    input.type = 'text';
    input.id = 'search-input';
    input.placeholder = '请输入搜索内容';
    searchBox.appendChild(input);

    // 创建选择框
    const select = html.createElement('select');
    select.id = 'search-engine';
    const engines = [
        { value: 'https://www.baidu.com/s?wd=', url: 'https://www.baidu.com', name: '百度' },
        { value: 'https://www.google.com/search?q=', url: 'https://www.google.com', name: 'Google' },
        { value: 'https://www.bing.com/search?q=', url: 'https://www.bing.com', name: 'Bing' }
    ];
    engines.forEach(engine => {
        const option = html.createElement('option');
        option.value = engine.value;
        option.setAttribute('data-url', engine.url);
        option.textContent = engine.name;
        select.appendChild(option);
    });
    searchBox.appendChild(select);

    // 创建按钮
    const button = html.createElement('button');
    button.id = 'search-button';
    button.textContent = '搜索一下';
    searchBox.appendChild(button);

    // 将搜索框添加到容器
    searchContainer.appendChild(searchBox);

    // 将容器添加到body
    html.body.appendChild(searchContainer);

    // 替换当前文档
    document.open();
    document.write(html.documentElement.outerHTML);
    document.close();

    // 搜索引擎图标映射
    const engineIcons = {
        'https://www.baidu.com/s?wd=': 'im/ss/baidu.ico',
        'https://www.google.com/search?q=': 'im/ss/google.ico',
        'https://www.bing.com/search?q=': 'im/ss/bing.ico'
    };

    // 更新图标函数
    function updateIcon(engineUrl) {
        const iconElement = document.getElementById('search-icon');
        iconElement.style.backgroundImage = `url('${engineIcons[engineUrl]}')`;
    }

    // 页面加载时设置默认图标
    window.onload = function () {
        const searchEngineSelect = document.getElementById('search-engine');
        const selectedEngine = searchEngineSelect.value;
        updateIcon(selectedEngine);
    };

    // 监听搜索引擎选择变化
    document.getElementById('search-engine').addEventListener('change', function () {
        const selectedEngine = this.value;
        updateIcon(selectedEngine);
    });

    // 搜索功能
    function performSearch() {
        const searchInput = document.getElementById('search-input').value;
        const searchEngine = document.getElementById('search-engine').value;

        if (searchInput.trim() !== '') {
            window.open(searchEngine + encodeURIComponent(searchInput), '_blank');
        } else {
            alert('请输入搜索内容！');
        }
    }

    // 绑定搜索按钮点击事件
    document.getElementById('search-button').addEventListener('click', performSearch);

    // 回车键触发搜索
    document.getElementById('search-input').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // 搜索图标点击事件
    document.getElementById('search-icon').addEventListener('click', function () {
        const searchEngineSelect = document.getElementById('search-engine');
        const selectedOption = searchEngineSelect.options[searchEngineSelect.selectedIndex];
        const engineUrl = selectedOption.getAttribute('data-url');
        window.open(engineUrl, '_blank');
    });
})();