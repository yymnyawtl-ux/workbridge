'use client';

import Image from 'next/image';
import { FormEvent, useEffect, useState } from 'react';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  Compass,
  Layers3,
  Menu,
  MessageSquareText,
  Search,
  UserRound,
  UsersRound,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { company, faq, process as processSteps, services } from '@/app/data';

const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nav = [
  ['Услуги', '#services'],
  ['Работодателям', '#employers'],
  ['Соискателям', '#candidates'],
  ['Как мы работаем', '#process'],
  ['О компании', '#about'],
];
const icons = [
  Search,
  UsersRound,
  MessageSquareText,
  Compass,
  Layers3,
  CheckCircle2,
];

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="WorkBridge — на главную">
      <span className="logo-mark">
        <i />
        <i />
      </span>
      <span>{company.brandName}</span>
    </a>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <Logo />
      <nav aria-label="Основная навигация">
        {nav.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="#request">
        Обсудить подбор <ArrowUpRight size={17} />
      </a>
      <Sheet>
        <SheetTrigger
          render={<button className="menu-button" aria-label="Открыть меню" />}
        >
          <Menu />
        </SheetTrigger>
        <SheetContent className="mobile-sheet">
          <SheetHeader>
            <SheetTitle>Навигация</SheetTitle>
          </SheetHeader>
          <div className="mobile-nav">
            {nav.map(([label, href]) => (
              <SheetClose
                key={href}
                nativeButton={false}
                render={<a href={href} />}
              >
                {label}
              </SheetClose>
            ))}
            <SheetClose
              nativeButton={false}
              render={<a className="button primary" href="#request" />}
            >
              Обсудить подбор
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">
          <span /> Кадровое агентство для бизнеса
        </p>
        <h1>
          Находим <strong>людей</strong>
          <br />
          под <em>ваши задачи</em>
        </h1>
        <p className="hero-lead">
          Берём на себя поиск, первичный отбор и коммуникацию с кандидатами — от
          заявки до следующего этапа найма.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#request">
            Подобрать сотрудника <ArrowUpRight size={18} />
          </a>
          <a className="button secondary" href="#candidates">
            Ищу работу
          </a>
        </div>
        <div className="hero-note">
          <Check size={16} /> Работаем с точечным и массовым подбором
        </div>
      </div>
      <div
        className="hero-visual"
        aria-label="Рабочая встреча рекрутера и кандидата"
      >
        <Image
          src={`${assetBase}/workbridge-hero-v2.png`}
          alt="Рекрутер беседует с кандидатом"
          fill
          priority
          sizes="(max-width: 900px) 100vw, 48vw"
        />
        <div className="candidate-card card-one">
          <span className="avatar">АК</span>
          <div>
            <b>Первичное интервью</b>
            <small>Кандидат приглашён</small>
          </div>
          <span className="status">Готово</span>
        </div>
        <div className="candidate-card card-two">
          <span className="pulse" />
          <div>
            <b>Подбор в работе</b>
            <small>Фокус: требования вакансии</small>
          </div>
        </div>
        <div className="visual-index">01 / 04</div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="section reveal" id="services">
      <div className="section-head">
        <p className="section-label">Услуги</p>
        <h2>
          Подключаемся там, где
          <br />
          команде нужен <i>ресурс</i> на поиск.
        </h2>
        <p>
          От одного специалиста до потока кандидатов — с понятной логикой отбора
          и коммуникацией по ходу работы.
        </p>
      </div>
      <div className="services-grid">
        {services.map((item, i) => {
          const Icon = icons[i];
          return (
            <article className="service-card" key={item.title}>
              <span className="service-number">0{i + 1}</span>
              <Icon />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href="#request" aria-label={`Обсудить услугу: ${item.title}`}>
                Обсудить задачу <ArrowUpRight size={15} />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="process-section reveal" id="process">
      <div className="section-head compact">
        <p className="section-label">Как мы работаем</p>
        <h2>
          Один маршрут
          <br />
          от задачи к кандидату.
        </h2>
      </div>
      <div className="process-list">
        {processSteps.map(([title, text], i) => (
          <article key={title}>
            <span>0{i + 1}</span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
            <i />
          </article>
        ))}
      </div>
    </section>
  );
}

export function Audience() {
  return (
    <>
      <section className="audience employers reveal" id="employers">
        <div>
          <p className="section-label">Работодателям</p>
          <h2>Закрывайте вакансии без лишней нагрузки на команду.</h2>
          <p>
            Берём на себя трудоёмкую часть поиска: находим, связываемся,
            уточняем ключевые критерии и проводим первичный отбор. Внутренняя
            команда получает более сфокусированный поток кандидатов.
          </p>
          <a className="button primary" href="#request">
            Обсудить вакансию <ArrowUpRight size={18} />
          </a>
        </div>
        <aside>
          <BriefcaseBusiness />
          <p>
            Подбор строится под требования конкретной вакансии, а не по
            универсальному шаблону.
          </p>
        </aside>
      </section>
      <section className="audience candidates reveal" id="candidates">
        <aside>
          <div className="candidate-profile-head">
            <UserRound />
            <span>Профиль кандидата</span>
          </div>
          <div className="candidate-profile-copy">
            <small>Когда появится подходящая вакансия</small>
            <strong>Свяжемся, познакомимся и обсудим следующий шаг.</strong>
          </div>
          <div className="candidate-profile-tags" aria-label="Преимущества для кандидата">
            <span>Конфиденциально</span>
            <span>Без лишних этапов</span>
          </div>
          <div className="candidate-profile-status">
            <i /> Открыты к диалогу
          </div>
        </aside>
        <div>
          <p className="section-label">Соискателям</p>
          <h2>Помогаем найти работу, которая подходит вам.</h2>
          <p>
            Расскажите о желаемой роли и опыте. Если появится релевантная
            возможность, мы обсудим детали и проведём первичное интервью перед
            следующим этапом.
          </p>
          <a className="button secondary" href="#candidate-form">
            Посмотреть возможности <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}

const benefits = [
  'Понятный процесс',
  'Один контакт на этапах',
  'Предварительный отбор',
  'Гибкий формат работы',
  'Регулярная обратная связь',
  'Фокус на требованиях вакансии',
];
export function About() {
  return (
    <>
      <section className="benefits reveal">
        <div>
          <p className="section-label">Почему WorkBridge</p>
          <h2>
            Удобно для бизнеса.
            <br />
            <i>Понятно</i> для кандидата.
          </h2>
        </div>
        <div className="benefit-list">
          {benefits.map((item, i) => (
            <div key={item}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              <p>{item}</p>
              <Check size={17} />
            </div>
          ))}
        </div>
      </section>
      <section className="about reveal" id="about">
        <p className="section-label">О компании</p>
        <div>
          <h2>Поиск и подбор сотрудников для бизнеса.</h2>
          <p>
            WorkBridge помогает компаниям организовать поиск, первичный отбор и
            коммуникацию с кандидатами. Мы начинаем с требований конкретной
            вакансии и выстраиваем процесс, который удобно контролировать обеим
            сторонам.
          </p>
        </div>
      </section>
    </>
  );
}

export function FAQ() {
  return (
    <section className="faq-section reveal" id="faq">
      <div className="section-head compact">
        <p className="section-label">FAQ</p>
        <h2>Коротко о важном.</h2>
      </div>
      <Accordion className="faq-list">
        {faq.map(([q, a], i) => (
          <AccordionItem key={q} value={`item-${i}`} className="faq-item">
            <AccordionTrigger className="faq-trigger">
              <span>0{i + 1}</span>
              {q}
            </AccordionTrigger>
            <AccordionContent className="faq-content">
              <p>{a}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

function Notice({ shown }: { shown: boolean }) {
  return shown ? (
    <output className="form-notice">
      Демонстрационный режим: данные не отправлены. После подключения API здесь
      появится подтверждение.
    </output>
  ) : null;
}
function Consent() {
  return (
    <label className="consent">
      <input type="checkbox" required />
      <span>
        Согласен с <a href={`${assetBase}/consent.html`}>условиями обработки данных</a> и
        ознакомлен с <a href={`${assetBase}/privacy.html`}>политикой конфиденциальности</a>.
      </span>
    </label>
  );
}
function EmployerForm() {
  const [shown, setShown] = useState(false);
  function submit(e: FormEvent) {
    e.preventDefault();
    setShown(true);
  }
  return (
    <form onSubmit={submit}>
      <div className="form-title">
        <span>01</span>
        <h3>Для работодателя</h3>
      </div>
      <label>
        Имя
        <input name="name" required autoComplete="name" />
      </label>
      <label>
        Компания
        <input name="company" required />
      </label>
      <label>
        Какая вакансия нужна
        <input name="vacancy" required />
      </label>
      <label>
        Как с вами связаться
        <input name="contact" required placeholder="Телефон или email" />
      </label>
      <label>
        Комментарий
        <textarea name="comment" rows={3} />
      </label>
      <Consent />
      <button className="form-button" type="submit">
        Отправить заявку <ArrowUpRight size={18} />
      </button>
      <Notice shown={shown} />
    </form>
  );
}
function CandidateForm() {
  const [shown, setShown] = useState(false);
  function submit(e: FormEvent) {
    e.preventDefault();
    setShown(true);
  }
  return (
    <form id="candidate-form" onSubmit={submit}>
      <div className="form-title">
        <span>02</span>
        <h3>Для кандидата</h3>
      </div>
      <label>
        Имя
        <input name="name" required autoComplete="name" />
      </label>
      <label>
        Желаемая должность
        <input name="position" required />
      </label>
      <label>
        Как с вами связаться
        <input name="contact" required placeholder="Телефон или email" />
      </label>
      <label>
        Комментарий
        <textarea name="comment" rows={3} />
      </label>
      <Consent />
      <button className="form-button outline" type="submit">
        Отправить <ArrowUpRight size={18} />
      </button>
      <Notice shown={shown} />
    </form>
  );
}
export function Request() {
  return (
    <section className="request-section reveal" id="request">
      <div className="request-copy">
        <p className="section-label">Начнём с задачи</p>
        <h2>
          Расскажите,
          <br />
          кого вы ищете.
        </h2>
        <p>
          Зафиксируем основные требования и предложим следующий шаг. Сейчас
          формы работают в демонстрационном режиме.
        </p>
      </div>
      <div className="forms">
        <EmployerForm />
        <CandidateForm />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <Logo />
        <p>
          Поиск и подбор персонала
          <br />
          <span>ОКВЭД 78.1 — деятельность агентств по подбору персонала</span>
        </p>
        <div>
          {nav.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
      </div>
            <div className="footer-company" aria-label="Реквизиты и контакты WorkBridge">
        <div>
          <span>Организация</span>
          <strong>ИП Крейдер Ирина Александровна</strong>
        </div>
        <div>
          <span>Реквизиты</span>
          <p>ИНН 234104427303<br />ОГРНИП 326237500335221</p>
        </div>
        <div>
          <span>Адрес</span>
          <address>353762, Россия, Краснодарский край, Ленинградский район, посёлок Уманский, ул. 50 лет Октября, д. 14</address>
        </div>
        <div>
          <span>Связаться</span>
          <a href="mailto:workbridge278@gmail.com">workbridge278@gmail.com</a>
          <a href="tel:+79928423645">+7 992 842-36-45</a>
        </div>
      </div>
<div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {company.brandName}
        </span>
        <div>
          <a href={`${assetBase}/privacy.html`}>Политика конфиденциальности</a>
          <a href={`${assetBase}/consent.html`}>Обработка персональных данных</a>
        </div>
      </div>
    </footer>
  );
}

export default function Landing() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Process />
      <Audience />
      <About />
      <FAQ />
      <Request />
      <Footer />
    </main>
  );
}
