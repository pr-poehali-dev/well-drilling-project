import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const services = [
    {
      icon: 'Droplets',
      title: 'Песчаные скважины',
      description: 'Бурение песчаных скважин глубиной до 50 метров для дач и коттеджей. Быстрый монтаж и доступная цена.',
      price: 'от 25 000 ₽'
    },
    {
      icon: 'FlaskConical',
      title: 'Анализ воды',
      description: 'Комплексный химический и бактериологический анализ воды из скважины с рекомендациями по очистке.',
      price: 'от 3 500 ₽'
    },
    {
      icon: 'Settings',
      title: 'Системы очистки',
      description: 'Подбор и установка современных систем водоочистки под конкретный состав воды.',
      price: 'от 15 000 ₽'
    }
  ];

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/projects/04e7956f-8d7c-41d5-9f83-f14779e510de/files/f1249c72-01c6-4bcd-b10d-4d918e663dc4.jpg',
      title: 'Бурение в Павловске',
      description: 'Песчаная скважина 45м, производительность 3 м³/час'
    },
    {
      image: 'https://cdn.poehali.dev/projects/04e7956f-8d7c-41d5-9f83-f14779e510de/files/b030690a-3692-4ce4-bd40-bf91caaed334.jpg',
      title: 'Система очистки в Пушкине',
      description: 'Комплексная очистка от железа и жесткости'
    },
    {
      image: 'https://cdn.poehali.dev/projects/04e7956f-8d7c-41d5-9f83-f14779e510de/files/c389e92d-3ed3-4666-b2cc-604567e79545.jpg',
      title: 'Скважина в Гатчине',
      description: 'Скважина 38м с кессоном и автоматикой'
    }
  ];

  const faqItems = [
    {
      question: 'Сколько времени занимает бурение скважины?',
      answer: 'Бурение песчаной скважины глубиной до 50 метров обычно занимает 1-2 дня. В эту стоимость входит выезд бригады, бурение, обсадка трубами и первичная прокачка.'
    },
    {
      question: 'Какая гарантия на скважину?',
      answer: 'Мы даем гарантию 3 года на буровые работы и 1 год на установленное оборудование. Также предоставляем паспорт скважины и договор на обслуживание.'
    },
    {
      question: 'Нужны ли разрешения на бурение?',
      answer: 'Для песчаных скважин глубиной до 50 метров на частном участке разрешения не требуются. Скважина оформляется как бытовая.'
    },
    {
      question: 'Какой дебит у песчаной скважины?',
      answer: 'Дебит песчаной скважины в Ленинградской области обычно составляет 1-3 м³/час, чего достаточно для водоснабжения дома или дачи.'
    },
    {
      question: 'Как часто нужно проводить анализ воды?',
      answer: 'Рекомендуется делать анализ воды сразу после бурения и далее раз в 2-3 года, чтобы контролировать качество и при необходимости корректировать систему очистки.'
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Drill" size={32} className="text-primary" />
            <span className="text-xl font-bold text-foreground">АкваБур СПб</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#prices" className="text-foreground hover:text-primary transition-colors">Цены</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Работы</a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">FAQ</a>
          </nav>
          <Button asChild>
            <a href="#contact">Заказать звонок</a>
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="md:text-6xl font-bold mb-6 text-foreground text-4xl">
                Бурение скважин в Санкт-Петербурге
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Профессиональное бурение песчаных скважин до 50 метров. Анализ воды и системы очистки под ключ.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg" asChild>
                  <a href="#contact">Оставить заявку</a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg" asChild>
                  <a href="#prices">Узнать цену</a>
                </Button>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">скважин</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">7 лет</div>
                  <div className="text-sm text-muted-foreground">на рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">3 года</div>
                  <div className="text-sm text-muted-foreground">гарантия</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/04e7956f-8d7c-41d5-9f83-f14779e510de/files/f1249c72-01c6-4bcd-b10d-4d918e663dc4.jpg"
                alt="Бурение скважины"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">от 25 000 ₽</div>
                <div className="text-sm">за скважину под ключ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный спектр работ по водоснабжению</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Прозрачные цены</h2>
            <p className="text-xl text-muted-foreground">Никаких скрытых платежей</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <h3 className="text-xl font-semibold">Бурение скважины до 30м</h3>
                      <p className="text-muted-foreground">Включает обсадку трубами</p>
                    </div>
                    <div className="text-2xl font-bold text-primary">25 000 ₽</div>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <h3 className="text-xl font-semibold">Бурение скважины 30-50м</h3>
                      <p className="text-muted-foreground">Включает обсадку трубами</p>
                    </div>
                    <div className="text-2xl font-bold text-primary">35 000 ₽</div>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <h3 className="text-xl font-semibold">Анализ воды</h3>
                      <p className="text-muted-foreground">Полный химический анализ</p>
                    </div>
                    <div className="text-2xl font-bold text-primary">3 500 ₽</div>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <h3 className="text-xl font-semibold">Установка кессона</h3>
                      <p className="text-muted-foreground">Пластиковый кессон 1м</p>
                    </div>
                    <div className="text-2xl font-bold text-primary">18 000 ₽</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold">Система очистки</h3>
                      <p className="text-muted-foreground">Подбор и монтаж фильтров</p>
                    </div>
                    <div className="text-2xl font-bold text-primary">от 15 000 ₽</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши работы</h2>
            <p className="text-xl text-muted-foreground">Реализованные проекты в Петербурге и области</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-xl text-muted-foreground">Ответы на популярные вопросы о бурении</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Оставить заявку</h2>
            <p className="text-xl text-muted-foreground">Мы свяжемся с вами в течение 15 минут</p>
          </div>
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Комментарий</label>
                  <Textarea 
                    placeholder="Расскажите о вашем участке и задаче..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Drill" size={32} className="text-primary" />
                <span className="text-xl font-bold">АкваБур СПб</span>
              </div>
              <p className="text-white/70">Профессиональное бурение скважин в Санкт-Петербурге и Ленинградской области</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-white/70">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (812) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@akvabur-spb.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>Санкт-Петербург</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Режим работы</h3>
              <div className="space-y-2 text-white/70">
                <div>Пн-Пт: 9:00 - 20:00</div>
                <div>Сб-Вс: 10:00 - 18:00</div>
                <div className="mt-4 text-primary font-semibold">Выезд на объект 24/7</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            <p>© 2024 АкваБур СПб. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;