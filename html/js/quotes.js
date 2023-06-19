const quotes = [
    {
        "original": "男兒一言重千金",
        "translation": "남아일언 중천금",
        "meaning": "남자의 말 한 마디는 천금의 무게를 가짐",
        "author": "논어 (Lun Yu)"
    },
    {
        "original": "不恥下問",
        "translation": "불치하문",
        "meaning": "자기보다 아래 사람에게 물어보는 것을 부끄럽게 생각하지 않다",
        "author": "논어 (Lun Yu)"
    },
    {
        "original": "己所不欲 勿施於人",
        "translation": "기소불욕 물시어인",
        "meaning": "내가 원치 않는 일은 다른 사람에게도 강요해서는 안 된다",
        "author": "논어 (Lun Yu)"
    },
    {
        "original": "I find that the harder I work, the more luck I seem to have.",
        "translation": "나는 내가 더 노력할수록 운이 더 좋아진다는 걸 발견했다.",
        "meaning": "",
        "author": "Thomas Jefferson (토마스 제퍼슨)"
    },
    {
        "original": "If you have great talents, industry will improve them; if you have but moderate abilities, industry will supply their deficiency.",
        "translation": "큰 재주를 가졌다면 근면은 그 재주를 더 낫게 해줄 것이며 보통의 능력밖에서 없다면 근면은 부족함을 보충해줄 것이다.",
        "meaning": "",
        "author": "Joshua Reynolds (J.레이놀드)"
    },
    {
        "original": "Rudeness is a means to self-correction.",
        "translation": "무례한 사람의 행위는 내 행실을 바로 잡게 해주는 스승이다.",
        "meaning": "",
        "author": "Confucius (공자)"
    },
    {
        "original": "Love does not consist in gazing at each other, but in looking outward together in the same direction.",
        "translation": "사랑은 두 사람이 마주 쳐다보는 것이 아니라 함께 같은 방향을 바라보는 것이다.",
        "meaning": "",
        "author": "Antoine de Saint-Exupéry (생책쉬페리)"
    },
    {
        "original": "Lying is not only a crime in itself, but it taints the soul.",
        "translation": "거짓말은 그 자체가 죄일 뿐 아니라 정신을 더럽힌다.",
        "meaning": "",
        "author": "Plato (플라톤)"
    },
    {
        "original": "Neither learning nor virtue can thrive without health.",
        "translation": "학식도 미덕도 건강이 없으면 퇴색한다.",
        "meaning": "",
        "author": "Montaigne (몽테뉴)"
    },
    {
        "original": "Poverty breeds soul and spirit; Misfortune gives birth to great men.",
        "translation": "궁핍은 영혼과 정신을 낳고 불행은 위대한 인물을 낳는다.",
        "meaning": "",
        "author": "Victor Hugo (빅토르 위고)"
    },
    {
        "original": "Insult is a problem for those who feel insulted.",
        "translation": "모욕은 모욕을 당했다고 여기는 그 자체가 문제이다.",
        "meaning": "",
        "author": "Epictetus (에픽테토스)"
    },
    {
        "original": "Heaven never helps the man who will not act.",
        "translation": "하늘은 행동하지 않는 사람을 결코 돕지 않는다.",
        "meaning": "",
        "author": "Sophocles (소포클레스)"
    }
]


const quote = document.querySelector("#quote span:first-child");
const translation = document.querySelector("#quote span:nth-child(2)");
const meaning = document.querySelector("#quote span:nth-child(3)");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.original;
translation.innerText = todaysQuote.translation;
meaning.innerText = todaysQuote.meaning;
author.innerText = todaysQuote.author;