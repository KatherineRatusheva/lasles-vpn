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
            featuresItems: ["Powerfull online protection.", "Internet without borders.", "Supercharged VPN", "No specific time limits."], 
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
            signInTitle: "Sign in",
            signUpTitle: "Sign up",
            modalMessage: "Leave a request",
            modalMessagePlan: "You chose",
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
            authorizationErrorPassword: 'Incorrect password',
            authorizationErrorEmail: 'E-mail not found',
            authorizationErrorDisabled: 'Access to this account has been temporarily disabled due to many failed login attempts. You can try again later.',
            modalErrorName: 'Name must be at least 2 characters long',
            modalErrorPhone: 'Please enter a valid phone. Example for the Belarus +37529 ХХХ ХХ ХХ',
            isNotRegistred: 'You are not registred',
            registredText: 'Register here',
            basketText: 'Basket is empty'
        },
        ru: {
            welcomeTitle: 'Хотите, чтобы с LaslesVPN все было просто.',
            welcomeText: 'С легкостью и увлекательностью предоставьте сеть для всех ваших потребностей, используя LaslesVPN. Откройте для себя интересные функции от нас.',
            welcomeButton: 'Начать',
            featuresTitle: "Мы предоставляем множество функций, которые вы можете использовать",
            featuresText: "Вы можете с удовольствием изучить функции, которые мы предоставляем, и иметь свои собственные функции для каждой функции.",
            featuresItems: ["Мощная онлайн-защита.", "Интернет без границ.", "VPN с наддувом", "Нет конкретных сроков."],
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
            signInTitle: "Войти",
            signUpTitle: "Зарегистрироваться",
            modalMessage: "Оставить заявку",
            modalMessagePlan: "Вы выбрали",
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
            authorizationErrorPassword: 'Не правильный пароль',
            authorizationErrorEmail: 'E-mail не найден',
            authorizationErrorDisabled: 'Доступ к этой учетной записи был временно отключен из-за множества неудачных попыток входа в систему. Вы можете повторить попытку позже.',
            modalErrorName: 'Имя должно состоять минимум из 2 символов',
            modalErrorPhone: 'Введите корректный номер телефона. Пример для Беларуси: +37529 ХХХ ХХ ХХ',
            isNotRegistred: 'Вы не зарегистрированы',
            registredText: 'Зарегистрируйтесь здесь',
            basketText: 'Корзина пустая'
        }
    }
})