const menuItems = document.querySelectorAll('.menu-item');
const contents = document.querySelectorAll('.content');

// Функция для отображения выбранного контента
function showContent(id) {
    contents.forEach(section => {
        section.style.display = 'none'; // Скрываем все секции
    });
    const activeSection = document.getElementById(id);
    if (activeSection) {
        activeSection.style.display = 'block'; // Показываем выбранную секцию
        activeSection.scrollIntoView({ behavior: 'smooth' }); // Плавная прокрутка к секции
    }
    
    // Сброс стилей для всех элементов меню
    menuItems.forEach(item => {
        item.classList.remove('active'); // Удаляем класс активного элемента
    });

    // Добавляем класс активному элементу
    const activeItem = document.querySelector(`.menu-item[href="#${id}"]`);
    if (activeItem) {
        activeItem.classList.add('active'); // Добавляем класс активного элемента
    }
}

// Устанавливаем обработчики событий для элементов меню
menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = item.getAttribute('href').substring(1); // Получаем ID секции
        showContent(targetId); // Показываем соответствующую секцию
    });
});

// ==================================================================
  
  function openWalletModal(wallet) {
    const modal = document.getElementById('wallet-modal');
    const modalTitle = document.getElementById('wallet-modal-title');
    const modalDescription = document.getElementById('wallet-modal-description');

    const descriptions = {
    coinbase: {
    title: "Coinbase Wallet",
    content: `
        <h3>Обзор</h3>
        <p>Coinbase Wallet - это децентрализованный кошелек для хранения, управления и обмена криптовалютами с легким доступом к DeFi.</p>
        <h3>Как использовать</h3>
        <p>Скачайте приложение, создайте кошелек и управляйте своими активами с помощью простой и интуитивно понятной платформы.</p>
        <h3>Статистика</h3>
        <ul>
            <li>Поддержка: BTC, ETH, LTC и более 500 токенов</li>
            <li>Комиссии: Зависит от сети и типа транзакции</li>
        </ul>
    `
},
    metamask: {
    title: "MetaMask",
    content: `
        <h3>Обзор</h3>
        <p>MetaMask - это популярный кошелек и расширение для браузера, обеспечивающее доступ к Ethereum и децентрализованным приложениям (dApps).</p>
        <h3>Как использовать</h3>
        <p>Установите расширение, создайте кошелек и подключайтесь к dApps для торговли и управления токенами.</p>
        <h3>Статистика</h3>
        <ul>
            <li>Поддержка: ERC-20 токены и NFTs</li>
            <li>Комиссии: Зависит от сети Ethereum</li>
        </ul>
    `
},
    trust: {
    title: "Trust Wallet",
    content: `
        <h3>Обзор</h3>
        <p>Trust Wallet - это мобильный кошелек для хранения криптовалют, позволяющий легко взаимодействовать с dApps и DeFi.</p>
        <h3>Как использовать</h3>
        <p>Скачайте приложение, создайте или импортируйте кошелек и начинайте торговать или инвестировать в DeFi проекты.</p>
        <h3>Статистика</h3>
        <ul>
            <li>Поддержка: Более 160k токенов и 40 блокчейнов</li>
            <li>Комиссии: Зависит от типа транзакции</li>
        </ul>
    `
},
    exodus: {
    title: "Exodus",
    content: `
        <h3>Обзор</h3>
        <p>Exodus - это мультивалютный кошелек с удобным интерфейсом и встроенным обменником для криптовалют.</p>
        <h3>Как использовать</h3>
        <p>Скачайте приложение, создайте кошелек и начните управлять своими активами, используя интегрированные обменные функции.</p>
        <h3>Статистика</h3>
        <ul>
            <li>Поддержка: Более 100 криптовалют</li>
            <li>Комиссии: Комиссии зависят от обмена</li>
        </ul>
    `
},
    blockchainWallet: {
    title: "Blockchain.com Wallet",
    content: `
        <h3>Обзор</h3>
        <p>Blockchain.com Wallet - это безопасный кошелек с функциями хранения, обмена и торговли криптовалютами.</p>
        <h3>Как использовать</h3>
        <p>Создайте аккаунт на платформе, подключите кошелек и управляйте своими активами в удобном интерфейсе.</p>
        <h3>Статистика</h3>
        <ul>
            <li>Поддержка: BTC, ETH, BCH и более 30 токенов</li>
            <li>Комиссии: Зависит от транзакций</li>
        </ul>
    `
},
    trezor: {
    title: "Trezor Model T",
    content: `
        <h3>Обзор</h3>
        <p>Trezor Model T - это аппаратный кошелек с сенсорным экраном, обеспечивающий высокий уровень безопасности для хранения криптовалют.</p>
        <h3>Как использовать</h3>
        <p>Подключите устройство к компьютеру, установите ПО и следуйте инструкциям для создания кошелька.</p>
        <h3>Статистика</h3>
        <ul>
            <li>Поддержка: Более 1600 криптовалют</li>
            <li>Комиссии: Низкие, зависит от сети</li>
        </ul>
    `
},
    ledger: {
    title: "Ledger Nano X",
    content: `
        <h3>Обзор</h3>
        <p>Ledger Nano X - это портативный аппаратный кошелек, предлагающий безопасное хранение криптовалют с Bluetooth подключением.</p>
        <h3>Как использовать</h3>
        <p>Установите Ledger Live, подключите устройство и создайте или импортируйте кошелек для управления активами.</p>
        <h3>Статистика</h3>
        <ul>
            <li>Поддержка: Более 1800 токенов и криптовалют</li>
            <li>Комиссии: Зависит от сети и типа транзакции</li>
        </ul>
    `
},
    safepal: {
    title: "SafePal S1",
    content: `
        <h3>Обзор</h3>
        <p>SafePal S1 - это аппаратный кошелек, обеспечивающий безопасность для хранения криптовалют с поддержкой множественных блокчейнов.</p>
        <h3>Как использовать</h3>
        <p>Подключите устройство, загрузите приложение SafePal и следуйте инструкциям для создания кошелька.</p>
        <h3>Статистика</h3>
        <ul>
            <li>Поддержка: Более 20 блокчейнов и 10,000 токенов</li>
            <li>Комиссии: Низкие, зависят от сети</li>
        </ul>
    `
},
    bitbox: {
    title: "BitBox02",
    content: `
        <h3>Обзор</h3>
        <p>BitBox02 - это компактный аппаратный кошелек, предлагающий безопасность и удобство для хранения криптовалют.</p>
        <h3>Как использовать</h3>
        <p>Подключите устройство к компьютеру, установите BitBoxApp и создайте свой кошелек.</p>
        <h3>Статистика</h3>
        <ul>
            <li>Поддержка: BTC, ETH и другие токены</li>
            <li>Комиссии: Низкие, зависят от сети</li>
        </ul>
    `
}
        // Добавьте другие кошельки здесь
    };

    modalTitle.textContent = descriptions[wallet].title;
    modalDescription.innerHTML = descriptions[wallet].content;
    modal.style.display = "block";
}

function openDexModal(dex) {
    const modal = document.getElementById('dex-modal');
    const modalTitle = document.getElementById('dex-modal-title');
    const modalDescription = document.getElementById('dex-modal-description');

    const descriptions = {
        uniswap: {
            title: "Uniswap",
            content: `
                <h3>Обзор</h3>
                <p>Uniswap - одна из крупнейших децентрализованных бирж на базе Ethereum, использующая автоматизированный маркет-мейкинг для торговли токенами.</p>
                <h3>Как использовать</h3>
                <p>Присоединитесь к кошельку, выберите нужную пару токенов и начните обмен или предоставление ликвидности.</p>
                <h3>Статистика</h3>
                <ul>
                    <li>Торговые объемы: Миллиарды долларов ежедневно</li>
                    <li>Поддержка: Все ERC-20 токены</li>
                </ul>
            `
        },
        sushiswap: {
            title: "SushiSwap",
            content: `
                <h3>Обзор</h3>
                <p>SushiSwap - децентрализованная биржа с поддержкой обмена токенами и фермерства, основанная на коде Uniswap.</p>
                <h3>Как использовать</h3>
                <p>Зайдите на платформу, подключите кошелек и начните торговать токенами или предоставлять ликвидность для заработка SUSHI.</p>
                <h3>Статистика</h3>
                <ul>
                    <li>Поддержка: ERC-20 токены и стейкинг</li>
                    <li>Токен: SUSHI</li>
                </ul>
            `
        },
        pancakeswap: {
            title: "PancakeSwap",
            content: `
                <h3>Обзор</h3>
                <p>PancakeSwap - крупнейшая децентрализованная биржа на базе Binance Smart Chain с низкими комиссиями и высокими скоростями.</p>
                <h3>Как использовать</h3>
                <p>Подключите MetaMask или Trust Wallet, выберите пару токенов и начните обмен или фермерство.</p>
                <h3>Статистика</h3>
                <ul>
                    <li>Комиссии: Низкие благодаря BSC</li>
                    <li>Токен: CAKE</li>
                </ul>
            `
        },
        balancer: {
            title: "Balancer",
            content: `
                <h3>Обзор</h3>
                <p>Balancer - платформа для создания и управления ликвидными пулами с возможностью настройки пропорций активов.</p>
                <h3>Как использовать</h3>
                <p>Подключитесь к платформе, создайте пул или присоединитесь к существующему, чтобы заработать на комиссиях.</p>
                <h3>Статистика</h3>
                <ul>
                    <li>Поддержка: Пулы с множеством активов</li>
                    <li>Токен: BAL</li>
                </ul>
            `
        },
        oneinch: {
            title: "1inch",
            content: `
                <h3>Обзор</h3>
                <p>1inch - агрегатор децентрализованных бирж, который находит лучшие курсы обмена на множестве платформ.</p>
                <h3>Как использовать</h3>
                <p>Подключите кошелек и воспользуйтесь поиском лучшего курса для обмена токенов среди множества DEX.</p>
                <h3>Статистика</h3>
                <ul>
                    <li>Объемы: Интеграция с более чем 50 биржами</li>
                    <li>Токен: 1INCH</li>
                </ul>
            `
        },
        kyber: {
            title: "Kyber Network",
            content: `
                <h3>Обзор</h3>
                <p>Kyber Network - децентрализованная сеть ликвидности, позволяющая обменивать токены в реальном времени.</p>
                <h3>Как использовать</h3>
                <p>Присоединитесь к платформе и начните обменивать токены с низкими комиссиями.</p>
                <h3>Статистика</h3>
                <ul>
                    <li>Поддержка: Множество криптовалют и токенов</li>
                    <li>Токен: KNC</li>
                </ul>
            `
        },
        curve: {
            title: "Curve Finance",
            content: `
                <h3>Обзор</h3>
                <p>Curve Finance - DEX, оптимизированная для стабильных токенов с низкими комиссиями и минимальным проскальзыванием.</p>
                <h3>Как использовать</h3>
                <p>Выберите пул с поддержкой стейблкоинов, предоставьте ликвидность или начните торговать с минимальными потерями на проскальзывании.</p>
                <h3>Статистика</h3>
                <ul>
                    <li>Объемы: Лидирующая DEX для стейблкоинов</li>
                    <li>Токен: CRV</li>
                </ul>
            `
        },
        pangolin: {
            title: "Pangolin",
            content: `
                <h3>Обзор</h3>
                <p>Pangolin - DEX на базе Avalanche с низкими комиссиями и быстрыми транзакциями.</p>
                <h3>Как использовать</h3>
                <p>Подключите кошелек и начните торговать токенами или предоставляйте ликвидность на платформе.</p>
                <h3>Статистика</h3>
                <ul>
                    <li>Поддержка: Токены на Avalanche</li>
                    <li>Токен: PNG</li>
                </ul>
            `
        },
        mdex: {
            title: "MDEX",
            content: `
                <h3>Обзор</h3>
                <p>MDEX - децентрализованная биржа на Huobi Eco-Chain с множеством функций для торговли и ликвидности.</p>
                <h3>Как использовать</h3>
                <p>Присоединитесь к платформе, подключите кошелек и начните торговать токенами или фармить MDEX токены.</p>
                <h3>Статистика</h3>
                <ul>
                    <li>Поддержка: Huobi Eco-Chain</li>
                    <li>Токен: MDX</li>
                </ul>
            `
        },
        biswap: {
            title: "Biswap",
            content: `
                <h3>Обзор</h3>
                <p>Biswap - DEX на Binance Smart Chain с низкими комиссиями и бонусной программой.</p>
                <h3>Как использовать</h3>
                <p>Подключите кошелек и начните торговать токенами с низкими комиссиями и зарабатывайте бонусы.</p>
                <h3>Статистика</h3>
                <ul>
                    <li>Комиссии: Минимальные</li>
                    <li>Токен: BSW</li>
                </ul>
            `
        },
        quickswap: {
            title: "QuickSwap",
            content: `
                <h3>Обзор</h3>
                <p>QuickSwap - DEX на базе Polygon, предлагающая низкие комиссии и быструю обработку транзакций.</p>
                <h3>Как использовать</h3>
                <p>Присоединитесь к платформе, подключите MetaMask и начните торговать токенами на Polygon.</p>
                <h3>Статистика</h3>
                <ul>
                    <li>Комиссии: Низкие</li>
                    <li>Токен: QUICK</li>
                </ul>
            `
        },
        serum: {
            title: "Serum",
            content: `
                <h3>Обзор</h3>
                <p>Serum - высокопроизводительная децентрализованная биржа, построенная на блокчейне Solana.</p>
                <h3>Как использовать</h3>
                <p>Присоединитесь к платформе, подключите кошелек Solana и начните торговать токенами на скорости традиционных бирж.</p>
                <h3>Статистика</h3>
                <ul>
                    <li>Поддержка: Solana</li>
                    <li>Комиссии: Минимальные, благодаря высокой пропускной способности Solana</li>
                    <li>Токен: SRM</li>
                </ul>
            `
        }
        // Добавьте другие DEX здесь
    };

    modalTitle.textContent = descriptions[dex].title;
    modalDescription.innerHTML = descriptions[dex].content;
    modal.style.display = "block";
}

function openTradeModal(trade) {
    const modal = document.getElementById('trade-modal');
    const modalTitle = document.getElementById('trade-modal-title');
    const modalDescription = document.getElementById('trade-modal-description');

    const descriptions = {
    binance: {
    title: "Binance",
    content: `
        <h3>Обзор</h3>
        <p>Binance - одна из крупнейших криптовалютных бирж в мире с высоким объемом торгов и множеством доступных токенов.</p>
        <h3>Как использовать</h3>
        <p>Создайте аккаунт на Binance, пройдите процедуру KYC и начните торговать различными криптовалютами.</p>
        <h3>Статистика</h3>
        <ul>
            <li>Поддержка: Более 500 криптовалют</li>
            <li>Комиссии: Низкие торговые комиссии (до 0.1%)</li>
            <li>Токен: BNB</li>
        </ul>
    `
},
    coinbase: {
    title: "Coinbase",
    content: `
        <h3>Обзор</h3>
        <p>Coinbase - популярная криптобиржа, известная своей простотой в использовании и высоким уровнем безопасности.</p>
        <h3>Как использовать</h3>
        <p>Зарегистрируйтесь на платформе, подключите свой банковский аккаунт и начинайте покупать или продавать криптовалюты.</p>
        <h3>Статистика</h3>
        <ul>
            <li>Поддержка: Более 50 криптовалют</li>
            <li>Комиссии: Комиссия за покупку составляет 1.49%</li>
            <li>Токен: USDC</li>
        </ul>
    `
},
      kraken: {
    title: "Kraken",
    content: `
        <h3>Обзор</h3>
        <p>Kraken - одна из старейших криптобирж, предлагающая широкий выбор криптовалют и продвинутые функции для трейдеров.</p>
        <h3>Как использовать</h3>
        <p>Создайте учетную запись, пройдите проверку и начните торговать с использованием различных типов ордеров.</p>
        <h3>Статистика</h3>
        <ul>
            <li>Поддержка: Более 50 криптовалют</li>
            <li>Комиссии: От 0% до 0.26% в зависимости от объема торгов</li>
            <li>Токен: KRN</li>
        </ul>
    `
},
      bitfinex: {
    title: "Bitfinex",
    content: `
        <h3>Обзор</h3>
        <p>Bitfinex - криптовалютная биржа, известная высокими объемами торговли и множеством функций для профессиональных трейдеров.</p>
        <h3>Как использовать</h3>
        <p>Зарегистрируйтесь на платформе, верифицируйте свою учетную запись и начните использовать различные инструменты для торговли.</p>
        <h3>Статистика</h3>
        <ul>
            <li>Поддержка: Более 150 криптовалют</li>
            <li>Комиссии: От 0.1% до 0.2%</li>
            <li>Токен: LEO</li>
        </ul>
    `
},
      huobi: {
    title: "Huobi",
    content: `
        <h3>Обзор</h3>
        <p>Huobi - ведущая криптобиржа в Азии, предлагающая широкий выбор криптовалют и функции для маржинальной торговли.</p>
        <h3>Как использовать</h3>
        <p>Создайте аккаунт, пройдите процедуру верификации и начните торговать.</p>
        <h3>Статистика</h3>
        <ul>
            <li>Поддержка: Более 300 криптовалют</li>
            <li>Комиссии: Низкие (до 0.2%)</li>
            <li>Токен: HT</li>
        </ul>
    `
},
     kucoin: {
    title: "KuCoin",
    content: `
        <h3>Обзор</h3>
        <p>KuCoin - криптобиржа, известная широким выбором альткоинов и функциями для стейкинга.</p>
        <h3>Как использовать</h3>
        <p>Зарегистрируйтесь, подтвердите свою личность и начните торговать.</p>
        <h3>Статистика</h3>
        <ul>
            <li>Поддержка: Более 400 криптовалют</li>
            <li>Комиссии: До 0.1%</li>
            <li>Токен: KCS</li>
        </ul>
    `
},
 gateio: {
    title: "Gate.io",
    content: `
        <h3>Обзор</h3>
        <p>Gate.io - криптобиржа, предлагающая множество токенов и уникальных функций, таких как маржинальная торговля.</p>
        <h3>Как использовать</h3>
        <p>Создайте аккаунт, пройдите верификацию и начните торговать.</p>
        <h3>Статистика</h3>
        <ul>
            <li>Поддержка: Более 200 криптовалют</li>
            <li>Комиссии: От 0.2%</li>
            <li>Токен: GT</li>
        </ul>
    `
},
      bittrex: {
    title: "Bittrex",
    content: `
        <h3>Обзор</h3>
        <p>Bittrex - криптобиржа с высокой ликвидностью и безопасностью, предлагающая широкий выбор криптовалют.</p>
        <h3>Как использовать</h3>
        <p>Зарегистрируйтесь на платформе, пройдите верификацию и начните обмен криптовалют.</p>
        <h3>Статистика</h3>
        <ul>
            <li>Поддержка: Более 200 криптовалют</li>
            <li>Комиссии: 0.25%</li>
            <li>Токен: нет</li>
        </ul>
    `
},
cryptocom: {
    title: "Crypto.com",
    content: `
        <h3>Обзор</h3>
        <p>Crypto.com - платформа, предлагающая торговлю, стейкинг и криптокарты с кэшбэком.</p>
        <h3>Как использовать</h3>
        <p>Создайте учетную запись и начните покупать, продавать или использовать свою криптовалюту.</p>
        <h3>Статистика</h3>
        <ul>
            <li>Поддержка: Более 100 криптовалют</li>
            <li>Комиссии: Низкие (до 0.4%)</li>
            <li>Токен: CRO</li>
        </ul>
    `
},
phemex: {
    title: "Phemex",
    content: `
        <h3>Обзор</h3>
        <p>Phemex - криптобиржа, предлагающая высокочастотную торговлю с деривативами.</p>
        <h3>Как использовать</h3>
        <p>Создайте аккаунт и начните торговать с использованием различных инструментов и маржи.</p>
        <h3>Статистика</h3>
        <ul>
            <li>Поддержка: BTC, ETH и более 50 альткоинов</li>
            <li>Комиссии: Низкие (от 0.1%)</li>
            <li>Токен: PHEMEX</li>
        </ul>
    `
},
bybit: {
    title: "Bybit",
    content: `
        <h3>Обзор</h3>
        <p>Bybit - это ведущая криптовалютная биржа, известная своими деривативами и высокоскоростной торговлей.</p>
        <h3>Как использовать</h3>
        <p>Создайте аккаунт на платформе, пройдите верификацию, и начните торговать фьючерсами и спот-криптовалютами.</p>
        <h3>Статистика</h3>
        <ul>
            <li>Поддержка: BTC, ETH, XRP и другие</li>
            <li>Комиссии: Низкие (от 0.1% на сделках)</li>
            <li>Токен: BYD</li>
        </ul>
    `
},
    biki: {
    title: "Biki",
    content: `
        <h3>Обзор</h3>
        <p>Biki - криптобиржа, предлагающая широкий выбор токенов и услуги стейкинга.</p>
        <h3>Как использовать</h3>
        <p>Зарегистрируйтесь на платформе, пройдите верификацию и начните торговать.</p>
        <h3>Статистика</h3>
        <ul>
            <li>Поддержка: Более 200 криптовалют</li>
            <li>Комиссии: Низкие (до 0.2%)</li>
            <li>Токен: BIKI</li>
        </ul>
    `
},
    zb: {
    title: "ZB.com",
    content: `
        <h3>Обзор</h3>
        <p>ZB.com - криптобиржа с высоким объемом торгов и множеством криптовалют.</p>
        <h3>Как использовать</h3>
        <p>Создайте аккаунт и начните торговать сразу же.</p>
        <h3>Статистика</h3>
        <ul>
            <li>Поддержка: Более 100 криптовалют</li>
            <li>Комиссии: Низкие (до 0.1%)</li>
            <li>Токен: ZB</li>
        </ul>
    `
},
    coinex: {
    title: "CoinEx",
    content: `
        <h3>Обзор</h3>
        <p>CoinEx - международная криптобиржа с удобным интерфейсом и широкой поддержкой токенов.</p>
        <h3>Как использовать</h3>
        <p>Зарегистрируйтесь на платформе и начинайте торговать.</p>
        <h3>Статистика</h3>
        <ul>
            <li>Поддержка: Более 100 криптовалют</li>
            <li>Комиссии: Низкие (до 0.1%)</li>
            <li>Токен: CET</li>
        </ul>
    `
},
    coinex: {
    title: "CoinEx",
    content: `
        <h3>Обзор</h3>
        <p>CoinEx - международная криптобиржа с удобным интерфейсом и широкой поддержкой токенов.</p>
        <h3>Как использовать</h3>
        <p>Зарегистрируйтесь на платформе и начинайте торговать.</p>
        <h3>Статистика</h3>
        <ul>
            <li>Поддержка: Более 100 криптовалют</li>
            <li>Комиссии: Низкие (до 0.1%)</li>
            <li>Токен: CET</li>
        </ul>
    `
},
    bitso: {
    title: "Bitso",
    content: `
        <h3>Обзор</h3>
        <p>Bitso - первая криптобиржа в Мексике, предлагающая услуги обмена и кошельки.</p>
        <h3>Как использовать</h3>
        <p>Зарегистрируйтесь и начните торговать или хранить свою криптовалюту.</p>
        <h3>Статистика</h3>
        <ul>
            <li>Поддержка: Основные криптовалюты</li>
            <li>Комиссии: От 0.4%</li>
            <li>Токен: нет</li>
        </ul>
    `
},
exmo: {
    title: "Exmo",
    content: `
        <h3>Обзор</h3>
        <p>Exmo - криптобиржа с удобным интерфейсом и высоким уровнем безопасности.</p>
        <h3>Как использовать</h3>
        <p>Создайте аккаунт и начните обменивать криптовалюту.</p>
        <h3>Статистика</h3>
        <ul>
            <li>Поддержка: Более 60 криптовалют</li>
            <li>Комиссии: От 0.2%</li>
            <li>Токен: EXM</li>
        </ul>
    `
},
luno: {
    title: "Luno",
    content: `
        <h3>Обзор</h3>
        <p>Luno - платформа для покупки, хранения и торговли биткойнами и другими криптовалютами.</p>
        <h3>Как использовать</h3>
        <p>Зарегистрируйтесь, подтвердите свою личность и начните торговать.</p>
        <h3>Статистика</h3>
        <ul>
            <li>Поддержка: BTC, ETH и другие</li>
            <li>Комиссии: Низкие (0.1% на сделках)</li>
            <li>Токен: нет</li>
        </ul>
    `
},
      onebroker: {
    title: "1broker",
    content: `
        <h3>Обзор</h3>
        <p>1broker - платформа для торговли на криптовалютных рынках и контрактами на разницу (CFD).</p>
        <h3>Как использовать</h3>
        <p>Зарегистрируйтесь, выберите желаемую криптовалюту и начните торговать.</p>
        <h3>Статистика</h3>
        <ul>
            <li>Поддержка: BTC и другие криптовалюты</li>
            <li>Комиссии: 0.5%</li>
            <li>Токен: нет</li>
        </ul>
    `
}
        // Добавьте другие описания торговли здесь
    };

    modalTitle.textContent = descriptions[trade].title;
    modalDescription.innerHTML = descriptions[trade].content;
    modal.style.display = "block";
}

function openProjectModal(project) {
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('project-modal-title');
    const modalDescription = document.getElementById('project-modal-description');

    const descriptions = {
         Zignaly: {
            title: "Zignaly",
            content: `
                <h3>Обзор</h3>
                <p>Zignaly - платформа для копирования сделок и автоматизированной торговли криптовалютами.</p>
                <h3>Как использовать</h3>
                <p>Зарегистрируйтесь на платформе, выберите трейдера для копирования и настройте параметры торговли.</p>
                <h3>Статистика</h3>
                <ul>
                    <li>Поддержка: Основные криптовалюты</li>
                    <li>Доступные функции: Копирование сделок, управление рисками</li>
                </ul>
            `
        },
        myco: {
            title: "Myco",
            content: `
                <h3>Обзор</h3>
                <p>Myco - платформа для управления криптоактивами с функцией автоматизированного трейдинга.</p>
                <h3>Как использовать</h3>
                <p>Создайте аккаунт, настройте свою стратегию и начните автоматическую торговлю.</p>
                <h3>Статистика</h3>
                <ul>
                    <li>Поддержка: Более 50 криптовалют</li>
                    <li>Уникальные функции: Автоматические стратегии торговли</li>
                </ul>
            `
        },
        yieldnodes: {
            title: "YieldNodes",
            content: `
                <h3>Обзор</h3>
                <p>YieldNodes - платформа для стейкинга, предлагающая высокую доходность.</p>
                <h3>Как использовать</h3>
                <p>Инвестируйте свои средства в платформу и получайте ежемесячные выплаты.</p>
                <h3>Статистика</h3>
                <ul>
                    <li>Средняя доходность: 5-15% в месяц</li>
                    <li>Поддерживаемые монеты: Более 10 криптовалют</li>
                </ul>
            `
        },
        daisyai: {
            title: "Daisy AI",
            content: `
                <h3>Обзор</h3>
                <p>Daisy AI - платформа для автоматизированного трейдинга на основе искусственного интеллекта.</p>
                <h3>Как использовать</h3>
                <p>Зарегистрируйтесь, настройте алгоритмы и начинайте получать прибыль от торговли.</p>
                <h3>Статистика</h3>
                <ul>
                    <li>Доступные рынки: Forex, криптовалюты</li>
                    <li>Уникальные функции: AI-алгоритмы для трейдинга</li>
                </ul>
            `
        },
        aavegotchi: {
            title: "Aavegotchi",
            content: `
                <h3>Обзор</h3>
                <p>Aavegotchi - игра на блокчейне, совмещающая DeFi и NFT.</p>
                <h3>Как использовать</h3>
                <p>Создайте своего Aavegotchi, взаимодействуйте с игрой и зарабатывайте.</p>
                <h3>Статистика</h3>
                <ul>
                    <li>Уникальные NFT: Более 10,000 Aavegotchi</li>
                    <li>Поддерживаемые токены: GHST и другие</li>
                </ul>
            `
        },
        nexo: {
            title: "Nexo",
            content: `
                <h3>Обзор</h3>
                <p>Nexo - платформа для кредитования и стейкинга криптовалют.</p>
                <h3>Как использовать</h3>
                <p>Зарегистрируйтесь, внесите свои активы и начинайте получать проценты.</p>
                <h3>Статистика</h3>
                <ul>
                    <li>Кредиты: до 90% от стоимости активов</li>
                    <li>Поддерживаемые криптовалюты: Более 20</li>
                </ul>
            `
        },
        blockfi: {
            title: "BlockFi",
            content: `
                <h3>Обзор</h3>
                <p>BlockFi - платформа для кредитования и получения процентов на криптовалюты.</p>
                <h3>Как использовать</h3>
                <p>Создайте аккаунт, внесите активы и начинайте зарабатывать проценты.</p>
                <h3>Статистика</h3>
                <ul>
                    <li>Процентная ставка: до 8.6% годовых</li>
                    <li>Поддерживаемые активы: BTC, ETH и другие</li>
                </ul>
            `
        },
        celsius: {
            title: "Celsius Network",
            content: `
                <h3>Обзор</h3>
                <p>Celsius - платформа для получения процентов на ваши криптоактивы и заемных средств.</p>
                <h3>Как использовать</h3>
                <p>Создайте аккаунт, внесите средства и получите доступ к низким процентам на кредиты.</p>
                <h3>Статистика</h3>
                <ul>
                    <li>Процентная ставка: до 17.78% годовых</li>
                    <li>Доступные активы: BTC, ETH, и более 40 токенов</li>
                </ul>
            `
        }
    };

    modalTitle.textContent = descriptions[project].title;
    modalDescription.innerHTML = descriptions[project].content;
    modal.style.display = "block";
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Закрытие модального окна при нажатии вне его области
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
};

// ==================== ЗАСТАВКА ====================
document.addEventListener("DOMContentLoaded", function() {
    const splashScreen = document.getElementById('splash-screen');
    const letters = document.querySelectorAll('.letters span');
    const symbol = document.querySelector('.symbol');
    let delay = 0;

    // Анимация для каждой буквы
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.transform = 'translateY(0)'; // Буква падает на своё место
            letter.style.opacity = '1'; // Буква становится видимой
            letter.style.animation = 'glitch 0.5s ease-in-out'; // Эффект глитча
        }, delay);
        delay += 300; // Задержка между падениями букв
    });

    // Завершение анимации через время задержки
    setTimeout(() => {
        letters.forEach(letter => {
            letter.style.transform = 'scale(1.5)'; // Увеличение букв перед исчезновением
            letter.style.opacity = '0'; // Исчезновение букв
        });

        // Символ биткоина резко увеличивается
        symbol.style.transition = 'transform 1s ease'; // Плавная анимация увеличения
        symbol.style.transform = 'scale(3)'; // Увеличение символа биткоина до 3x

        // Переход фона в белый (если нужно)
        splashScreen.style.transition = 'background-color 1s ease';
        splashScreen.style.backgroundColor = 'white'; // Переход в белый фон

        // Скрытие заставки и показ основного контента
        setTimeout(() => {
            splashScreen.style.display = 'none'; // Скрываем заставку
            document.getElementById('main-content').style.display = 'block'; // Показываем основной контент
        }, 1000); // Задержка перед скрытием заставки
    }, 3000 + delay); // Время до завершения анимации
});

// ============== ТАБЛИЦА КРИПТОАКТИВОВ ==============
// Функция для отображения данных о криптовалютах в таблице с логотипами
function displayCryptoDataInTable(cryptos, tableId) {
    const tableBody = document.querySelector(`#${tableId} tbody`);
    tableBody.innerHTML = ''; // Очищаем таблицу перед вставкой новых данных

    cryptos.forEach(crypto => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${crypto.image}" alt="${crypto.name} logo" style="width: 24px; height: 24px; vertical-align: middle;"> ${crypto.name}</td>
            <td>${crypto.symbol.toUpperCase()}</td>
            <td>$${crypto.current_price.toFixed(2)}</td>
            <td>${crypto.price_change_percentage_24h.toFixed(2)}%</td>
        `;
        tableBody.appendChild(row);
    });
}

// Функция для получения данных криптовалют и отображения их в таблицах
async function getCryptoData() {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1');
    const data = await response.json();

    const topGainers = [...data].sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h).slice(0, 5);
    const topLosers = [...data].sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h).slice(0, 5);

    displayCryptoDataInTable(topGainers, 'top-gainers-table');
    displayCryptoDataInTable(topLosers, 'top-losers-table');
}

// Вызов функции для загрузки данных при открытии страницы
window.onload = () => {
    getCryptoData();

    // Установка интервала для обновления данных каждые 60 секунд
    setInterval(getCryptoData, 600000); // 60000 миллисекунд = 60 секунд
};
if (typeof window.ethereum !== 'undefined') {
    console.log('Ethereum provider detected');
    // Твой код работы с Web3
} else {
    console.log('No Ethereum provider detected');
}

// =============== ПОДЕЛИТЬСЯ ===================
    const sharePopupButton = document.getElementById("share-popup-button");
    const shareModal = document.getElementById("share-modal");
    const closeShareModal = document.getElementById("close-share-modal");

    // Открыть модальное окно для "Поделиться"
    sharePopupButton.addEventListener("click", function() {
        shareModal.style.display = "block";
    });

    // Закрыть модальное окно для "Поделиться"
    closeShareModal.addEventListener("click", function() {
        shareModal.style.display = "none";
    });

    // Закрыть модальное окно при клике вне его
    window.addEventListener("click", function(event) {
      
        if (event.target === shareModal) {
            shareModal.style.display = "none";
        }
    });
