// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Navigation smooth scrolling
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Animate counters when they come into view
    const animateCounters = () => {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const current = parseInt(counter.innerText);
            
            if (current < target) {
                const increment = target / 100;
                const newValue = Math.ceil(current + increment);
                counter.innerText = newValue;
                
                if (newValue < target) {
                    setTimeout(() => animateCounters(), 20);
                }
            }
        });
    };

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate counters when stats section is visible
                if (entry.target.classList.contains('about-stats')) {
                    animateCounters();
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.fade-in, .about-stats');
    animatedElements.forEach(el => observer.observe(el));

    // Modal functionality
    const modal = document.getElementById('assignmentModal');
    const assignmentCards = document.querySelectorAll('.assignment-card');
    const closeBtn = document.querySelector('.close');

    // Assignment card data
    const assignmentData = {
        1: {
            title: "Управление командой техподдержки",
            description: "Комплексное решение задач по управлению командой технической поддержки, оптимизации процессов и внедрению инновационных подходов в работе с клиентами.",
            objectives: [
                "Повышение эффективности работы команды техподдержки",
                "Сокращение времени ответа на обращения клиентов",
                "Внедрение системы мониторинга качества обслуживания",
                "Оптимизация процессов эскалации сложных вопросов"
            ],
            solutions: [
                {
                    title: "Система тикетинга",
                    description: "Внедрение современной системы управления обращениями с автоматизацией процессов"
                },
                {
                    title: "База знаний",
                    description: "Создание централизованной базы знаний для быстрого решения типовых вопросов"
                },
                {
                    title: "Обучение команды",
                    description: "Программа непрерывного обучения и развития навыков сотрудников"
                },
                {
                    title: "Аналитика",
                    description: "Система метрик и KPI для контроля качества и эффективности работы"
                }
            ],
            kpis: [
                {
                    name: "Время ответа",
                    description: "Среднее время первого ответа на обращение",
                    target: "< 2 часов",
                    weight: "25%"
                },
                {
                    name: "Решение с первого раза",
                    description: "Процент обращений, решенных с первого контакта",
                    target: "> 80%",
                    weight: "30%"
                },
                {
                    name: "Удовлетворенность клиентов",
                    description: "Средняя оценка качества обслуживания",
                    target: "> 4.5/5",
                    weight: "25%"
                },
                {
                    name: "Эскалация",
                    description: "Процент обращений, переданных на второй уровень",
                    target: "< 15%",
                    weight: "20%"
                }
            ],
            timeline: [
                {
                    phase: "1",
                    title: "Анализ текущего состояния",
                    description: "Аудит существующих процессов и выявление узких мест",
                    tasks: [
                        "Анализ метрик текущей работы",
                        "Интервью с сотрудниками команды",
                        "Исследование обратной связи от клиентов"
                    ]
                },
                {
                    phase: "2",
                    title: "Планирование и подготовка",
                    description: "Разработка стратегии улучшений и подготовка к внедрению",
                    tasks: [
                        "Создание плана оптимизации процессов",
                        "Выбор и настройка инструментов",
                        "Подготовка обучающих материалов"
                    ]
                },
                {
                    phase: "3",
                    title: "Внедрение изменений",
                    description: "Поэтапное внедрение новых процессов и инструментов",
                    tasks: [
                        "Запуск новой системы тикетинга",
                        "Обучение команды новым процессам",
                        "Мониторинг и корректировка"
                    ]
                }
            ]
        },
        2: {
            title: "Оптимизация процессов",
            description: "Анализ и улучшение существующих бизнес-процессов для повышения эффективности работы и снижения операционных затрат.",
            objectives: [
                "Автоматизация рутинных операций",
                "Сокращение времени выполнения задач",
                "Улучшение качества процессов",
                "Снижение операционных затрат"
            ],
            solutions: [
                {
                    title: "Процессный анализ",
                    description: "Детальное изучение текущих процессов и выявление точек оптимизации"
                },
                {
                    title: "Автоматизация",
                    description: "Внедрение инструментов автоматизации для рутинных операций"
                },
                {
                    title: "Стандартизация",
                    description: "Создание единых стандартов и регламентов выполнения процессов"
                },
                {
                    title: "Мониторинг",
                    description: "Система контроля эффективности и качества процессов"
                }
            ],
            kpis: [
                {
                    name: "Время выполнения",
                    description: "Среднее время выполнения ключевых процессов",
                    target: "-30%",
                    weight: "35%"
                },
                {
                    name: "Качество процессов",
                    description: "Процент процессов, выполненных без ошибок",
                    target: "> 95%",
                    weight: "25%"
                },
                {
                    name: "Автоматизация",
                    description: "Процент автоматизированных операций",
                    target: "> 70%",
                    weight: "25%"
                },
                {
                    name: "Экономия затрат",
                    description: "Снижение операционных затрат",
                    target: "-20%",
                    weight: "15%"
                }
            ],
            timeline: [
                {
                    phase: "1",
                    title: "Картирование процессов",
                    description: "Создание детальной карты всех бизнес-процессов",
                    tasks: [
                        "Документирование текущих процессов",
                        "Выявление узких мест и проблем",
                        "Анализ временных затрат"
                    ]
                },
                {
                    phase: "2",
                    title: "Разработка решений",
                    description: "Создание плана оптимизации и выбор инструментов",
                    tasks: [
                        "Проектирование оптимизированных процессов",
                        "Выбор инструментов автоматизации",
                        "Планирование внедрения"
                    ]
                },
                {
                    phase: "3",
                    title: "Внедрение и контроль",
                    description: "Реализация изменений и мониторинг результатов",
                    tasks: [
                        "Поэтапное внедрение изменений",
                        "Обучение сотрудников",
                        "Контроль эффективности"
                    ]
                }
            ]
        },
        3: {
            title: "Внедрение инноваций",
            description: "Исследование и внедрение инновационных технологий и подходов для повышения конкурентоспособности и эффективности бизнеса.",
            objectives: [
                "Внедрение современных технологий",
                "Повышение конкурентоспособности",
                "Улучшение пользовательского опыта",
                "Создание инновационной культуры"
            ],
            solutions: [
                {
                    title: "Исследование трендов",
                    description: "Анализ современных технологических трендов и их применимости"
                },
                {
                    title: "Пилотные проекты",
                    description: "Тестирование новых решений на ограниченной аудитории"
                },
                {
                    title: "Масштабирование",
                    description: "Внедрение успешных инноваций в масштабах всей организации"
                },
                {
                    title: "Обучение команды",
                    description: "Развитие навыков работы с новыми технологиями"
                }
            ],
            kpis: [
                {
                    name: "Инновационные проекты",
                    description: "Количество успешно внедренных инноваций",
                    target: "> 5 в год",
                    weight: "30%"
                },
                {
                    name: "ROI инноваций",
                    description: "Возврат инвестиций от внедренных решений",
                    target: "> 150%",
                    weight: "35%"
                },
                {
                    name: "Время внедрения",
                    description: "Среднее время от идеи до внедрения",
                    target: "< 6 месяцев",
                    weight: "20%"
                },
                {
                    name: "Удовлетворенность пользователей",
                    description: "Оценка новых решений пользователями",
                    target: "> 4.0/5",
                    weight: "15%"
                }
            ],
            timeline: [
                {
                    phase: "1",
                    title: "Исследование и планирование",
                    description: "Анализ возможностей и создание стратегии инноваций",
                    tasks: [
                        "Исследование рынка и технологий",
                        "Анализ потребностей бизнеса",
                        "Создание инновационной стратегии"
                    ]
                },
                {
                    phase: "2",
                    title: "Пилотирование",
                    description: "Тестирование выбранных решений в ограниченном масштабе",
                    tasks: [
                        "Запуск пилотных проектов",
                        "Сбор обратной связи",
                        "Анализ результатов"
                    ]
                },
                {
                    phase: "3",
                    title: "Масштабирование",
                    description: "Внедрение успешных решений в масштабах организации",
                    tasks: [
                        "Планирование масштабирования",
                        "Обучение персонала",
                        "Полное внедрение"
                    ]
                }
            ]
        }
    };

    // Open modal when assignment card is clicked
    assignmentCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            const cardNumber = index + 1;
            const data = assignmentData[cardNumber];
            
            if (data && modal) {
                // Update modal content
                updateModalContent(data);
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // Close modal when clicking outside
    if (modal) {
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Function to update modal content
    function updateModalContent(data) {
        const modalContent = modal.querySelector('.modal-content');
        
        modalContent.innerHTML = `
            <h2>${data.title}</h2>
            
            <div class="modal-section">
                <h3>Описание</h3>
                <p>${data.description}</p>
            </div>
            
            <div class="modal-section">
                <h3>Основные цели</h3>
                <ul>
                    ${data.objectives.map(obj => `<li>${obj}</li>`).join('')}
                </ul>
            </div>
            
            <div class="modal-section">
                <h3>Решения</h3>
                <div class="solution-grid">
                    ${data.solutions.map(solution => `
                        <div class="solution-item">
                            <h4>${solution.title}</h4>
                            <p>${solution.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="modal-section">
                <h3>Ключевые показатели эффективности (KPI)</h3>
                <div class="kpi-grid">
                    ${data.kpis.map(kpi => `
                        <div class="kpi-item">
                            <h4>${kpi.name}</h4>
                            <p>${kpi.description}</p>
                            <p><strong>Цель:</strong> ${kpi.target}</p>
                            <span class="kpi-weight">${kpi.weight}</span>
                        </div>
                    `).join('')}
                </div>
                
                <div class="calculation-formula">
                    <h4>Формула расчета общего KPI:</h4>
                    <p>Общий KPI = Σ (Показатель × Вес) / 100%</p>
                </div>
                
                <div class="grade-system">
                    <h4>Система оценки:</h4>
                    <ul>
                        <li><strong>Отлично (90-100%):</strong> Все цели достигнуты или превышены</li>
                        <li><strong>Хорошо (75-89%):</strong> Большинство целей достигнуто</li>
                        <li><strong>Удовлетворительно (60-74%):</strong> Основные цели достигнуты частично</li>
                        <li><strong>Требует улучшения (<60%):</strong> Необходимы корректирующие действия</li>
                    </ul>
                </div>
            </div>
            
            <div class="modal-section">
                <h3>План реализации</h3>
                <div class="training-timeline">
                    ${data.timeline.map(phase => `
                        <div class="timeline-item">
                            <div class="timeline-marker">${phase.phase}</div>
                            <div class="timeline-content">
                                <h4>${phase.title}</h4>
                                <p>${phase.description}</p>
                                <ul>
                                    ${phase.tasks.map(task => `<li>${task}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        // Удалён обработчик для .close
    }

    // Add fade-in animation to elements
    const fadeElements = document.querySelectorAll('.assignment-card, .project-card, .stat-card');
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
    });

    // Navbar remains constant on scroll - no background changes
});

// Modern Animations and Scroll Effects

// Intersection Observer for scroll animations
const scrollObserverOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, scrollObserverOptions);

// Add animation classes to elements
document.addEventListener('DOMContentLoaded', () => {
    // Add animation classes to different sections
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('animate-on-scroll');
        scrollObserver.observe(heroContent);
    }

    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        if (index % 2 === 0) {
            card.classList.add('animate-left');
        } else {
            card.classList.add('animate-right');
        }
        scrollObserver.observe(card);
    });

    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.classList.add('animate-on-scroll');
        scrollObserver.observe(card);
    });

    const aboutSection = document.querySelector('#about .container');
    if (aboutSection) {
        aboutSection.classList.add('animate-on-scroll');
        scrollObserver.observe(aboutSection);
    }

    const contactSection = document.querySelector('#contact .container');
    if (contactSection) {
        contactSection.classList.add('animate-on-scroll');
        scrollObserver.observe(contactSection);
    }

    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add pulse effect to service cards on hover
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.animation = 'pulse 0.6s ease-in-out';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.animation = 'float 6s ease-in-out infinite';
        });
    });

    // Parallax effect for hero section - disabled to prevent overlay issues
    // window.addEventListener('scroll', () => {
    //     const scrolled = window.pageYOffset;
    //     const hero = document.querySelector('.hero');
    //     if (hero) {
    //         hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    //     }
    // });

});

// Modal functions
function openPaymentModal() {
    document.getElementById('paymentModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function openKPIModal() {
    document.getElementById('kpiModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function openTrainingModal() {
    document.getElementById('trainingModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function openKonvertumModal() {
    document.getElementById('konvertumModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function openTelegramBotModal() {
    document.getElementById('telegramBotModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function openGeminiBotModal() {
    document.getElementById('geminiBotModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    const modals = ['paymentModal', 'kpiModal', 'trainingModal', 'konvertumModal', 'telegramBotModal', 'geminiBotModal'];
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (event.target === modal) {
            closeModal(modalId);
        }
    });
});

// Scroll to Top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide scroll to top button based on scroll position
window.addEventListener('scroll', function() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

// Initialize scroll to top button on page load
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (scrollToTopBtn) {
        // Initially hide the button
        scrollToTopBtn.classList.remove('visible');
    }
});