import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);

export const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'ru',
    messages: {
        en: {
            welcomeTitle: 'Want anything to be easy with LaslesVPN.',
            welcomeText: "Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.",
            welcomeButton: 'Get Started',
            featuresTitle: "We Provide Many Features You Can Use",
            featuresText: "You can explore the features that we provide with fun and have their own functions each feature.",
            featuresItem_1: "Powerfull online protection.",
            featuresItem_2: "Internet without borders.",
            featuresItem_3: "Supercharged VPN",
            featuresItem_4: "No specific time limits.",
            planTitle: "Choose Your Plan",
            planText: "Let's choose the package that is best for you and explore it happily and cheerfully.",
            locationsTitle: "Huge Global Network of Fast VPN",
            locationsText: "See LaslesVPN everywhere to make it easier for you when you move locations.",
            reviewsTitle: "Trusted by Thousands of Happy Customer",
            reviewsText: "These are the stories of our customers who have joined us with great pleasure when using this crazy feature.",
            subscribeTitle: "Subscribe Now for Get Special Features!",
            subscribeText: "Let's subscribe with us and find the fun.",
            subscribeButton: 'Subscribe Now',
            footerText: "LaslesVPN is a private virtual network that has unique features and has high security.",
            plan: [
                {
                    name: 'Free Plan',
                    price: 'Free', 
                    include: ['Unlimited Bandwitch', 'Encrypted Connection', 'No Traffic Logs','Works on All Devices'],
                    activeClass: 'price-block'
                },
                {
                    name: 'Standard Plan', 
                    price: '$9 / mo', 
                    include:['Unlimited Bandwitch', 'Encrypted Connection', 'Yes Traffic Logs','Works on All Devices', 'Connect Anyware'],
                    activeClass: 'price-block__package_standart'
                },
                {
                    name: 'Premium Plan', 
                    price: '$12 / mo', 
                    include:['Unlimited Bandwitch', 'Encrypted Connection', 'Yes Traffic Logs','Works on All Devices', 'Connect Anyware', 'Get New Features'],
                    activeClass: 'price-block__package_premium'
                }
            ],
            priseButton: 'Select',
            footerInfo: '©2020LaslesVPN',
            passwordError: 'Password must be at least 6 characters',
            passwordNotMatch: 'Passwords must match',
            emailError: 'Please enter a valid email address. Example: name@gmail.com',
            authorizationError: 'Incorrect E-mail or password'
        },
        ru: {
            welcomeTitle: 'Хотите, чтобы с LaslesVPN все было просто.',
            welcomeText: 'С легкостью и увлекательностью предоставьте сеть для всех ваших потребностей, используя LaslesVPN. Откройте для себя интересные функции от нас.',
            welcomeButton: 'Начать',
            featuresTitle: "Мы предоставляем множество функций, которые вы можете использовать",
            featuresText: "Вы можете с удовольствием изучить функции, которые мы предоставляем, и иметь свои собственные функции для каждой функции.",
            featuresItem_1: "Мощная онлайн-защита.",
            featuresItem_2: "Интернет без границ.",
            featuresItem_3: "VPN с наддувом",
            featuresItem_4: "Нет конкретных сроков.",
            planTitle: "Выберите свой план",
            planText: "Давайте выберем пакет, который вам больше всего подходит, и рассмотрим его весело и весело.",
            locationsTitle: "Огромная глобальная сеть быстрых VPN",
            locationsText: "Смотрите LaslesVPN повсюду, чтобы вам было проще перемещать локации.",
            reviewsTitle: "Нам доверяют тысячи довольных клиентов",
            reviewsText: "Это истории наших клиентов, которые с большим удовольствием присоединились к нам, воспользовавшись этой безумной функцией.",
            subscribeTitle: "Подпишитесь сейчас, чтобы получить специальные функции!",
            subscribeText: "Давайте подписываемся с нами и найдем самое интересное.",
            subscribeButton: 'Подпишитесь сейчас',
            footerText: "LaslesVPN - это частная виртуальная сеть с уникальными функциями и высоким уровнем безопасности.",
            plan: [
                {
                    name: 'Бесплатный план',
                    price: 'Бесплатно', 
                    include: ['Неограниченный коммутатор', 'Зашифрованное соединение', 'Без журналов трафика','Работает на всех устройствах'],
                    activeClass: 'price-block'
                },
                {
                    name: 'Стандартный план', 
                    price: '$9 / мес', 
                    include:['Неограниченный коммутатор', 'Зашифрованное соединение', 'Есть журналы трафика','Работает на всех устройствах', 'Подключиться где угодно'],
                    activeClass: 'price-block__package_standart'
                },
                {
                    name: 'Премиум план', 
                    price: '$12 / мес', 
                    include:['Неограниченный коммутатор', 'Зашифрованное соединение', 'Есть журналы трафика','Работает на всех устройствах', 'Подключиться где угодно', 'Получите новые возможности'],
                    activeClass: 'price-block__package_premium'
                }
            ],
            priseButton: 'Выбрать',
            footerInfo: '©2020LaslesVPN',
            passwordError: 'Пароль должен быть не менее 6 символов',
            passwordNotMatch: 'Пароли должны совподать',
            emailError: 'Введите корректный email. Пример: name@gmail.com',
            authorizationError: 'Не правильный E-mail или пароль'
        }
    }
})