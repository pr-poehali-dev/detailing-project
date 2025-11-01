import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    car: '',
    package: '',
    comment: '',
    consent: false
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast({
        title: "Ошибка",
        description: "Необходимо согласие на обработку данных",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в WhatsApp в ближайшее время."
    });
    setFormData({ name: '', phone: '', car: '', package: '', comment: '', consent: false });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    { icon: 'Shield', title: 'Оклейка автомобиля', description: 'Защита кузова от царапин и сколов' },
    { icon: 'Sparkles', title: 'Полировка и керамика', description: 'Глубокий блеск и защита покрытия' },
    { icon: 'Droplets', title: 'Химчистка', description: 'Полная очистка салона и обивки' },
    { icon: 'ShieldCheck', title: 'Бронирование лобового стекла', description: 'Защита от сколов и трещин' },
    { icon: 'Wrench', title: 'Удаление вмятин (PDR)', description: 'Быстро, аккуратно, без следов' },
    { icon: 'Sun', title: 'Тонировка', description: 'Сертифицированные плёнки' },
    { icon: 'Paintbrush', title: 'Локальная покраска', description: 'Восстановление цвета без перекраски кузова' },
    { icon: 'Replace', title: 'Замена стёкол', description: 'Оригинальные и сертифицированные аналоги' },
    { icon: 'Tool', title: 'Ремонт лобового стекла', description: 'Устранение сколов и трещин' },
    { icon: 'Car', title: 'Предпродажная подготовка', description: 'Комплексная чистка перед продажей' }
  ];

  const benefits = [
    { icon: 'Award', title: 'Опыт более 10 лет', description: 'Тысячи проектов от эконом-класса до премиума' },
    { icon: 'Star', title: 'Сертифицированные материалы', description: 'Koch • Gyeon • 3M — долговечность и эффект' },
    { icon: 'Building', title: 'Закрытая чистая зона', description: 'Без пыли и лишних людей' },
    { icon: 'Camera', title: 'Фото-контроль этапов', description: 'Отчёт «до → после» в мессенджере' },
    { icon: 'BadgeCheck', title: 'Гарантия', description: 'Официальная гарантия на работы и материалы' }
  ];

  const reviews = [
    { name: 'Андрей', car: 'BMW X5', text: 'Полировка и керамика — авто как новое. Всё по срокам, присылали фото этапов. Рекомендую!' },
    { name: 'Михаил', car: 'Audi Q7', text: 'PPF на бампер и капот. Быстро, аккуратно, швов не видно. Цена честная.' },
    { name: 'Ирина', car: 'Mazda CX-5', text: 'Химчистка и тонировка — всё на высоте. Спасибо мастерам Propellini!' }
  ];

  const packages = [
    { name: 'Базовый', features: 'Экспресс-чистка салона, кузов, стекла', price: 'от 6 900 ₽' },
    { name: 'Стандарт', features: 'Полная внутренняя чистка, кузов, мотор, защита', price: 'от 12 900 ₽' },
    { name: 'Премиум', features: 'Полная полировка, нанокерамика, антидождь, салон', price: 'от 18 900 ₽' }
  ];

  const steps = [
    { icon: 'Search', title: 'Осмотр и диагностика', description: 'Оценка состояния, подбор пакета' },
    { icon: 'Wrench', title: 'Разборка и чистка', description: 'Аккуратный демонтаж, очистка' },
    { icon: 'Sparkles', title: 'Восстановление', description: 'Удаление дефектов ЛКП' },
    { icon: 'Shield', title: 'Защитные составы', description: 'Керамика/воск/PPF' },
    { icon: 'CheckCircle', title: 'Контроль и выдача', description: 'Фото-отчёт, рекомендации' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_16px_rgba(22,132,145,0.6)]" />
              <span className="text-xl font-bold tracking-wider">Propellini</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('services')} className="text-muted-foreground hover:text-foreground transition-colors font-medium">Услуги</button>
              <button onClick={() => scrollToSection('benefits')} className="text-muted-foreground hover:text-foreground transition-colors font-medium">Преимущества</button>
              <button onClick={() => scrollToSection('reviews')} className="text-muted-foreground hover:text-foreground transition-colors font-medium">Отзывы</button>
              <button onClick={() => scrollToSection('prices')} className="text-muted-foreground hover:text-foreground transition-colors font-medium">Цены</button>
              <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-foreground transition-colors font-medium">Контакты</button>
            </nav>
            <Button onClick={() => scrollToSection('form')} className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Записаться
            </Button>
          </div>
        </div>
      </header>

      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://cdn.poehali.dev/projects/79a51910-729a-4fe2-98ce-428f8410d123/files/b114b7b1-455e-4311-a44b-814d45bd8b6c.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <div className={`container mx-auto px-4 relative z-10 text-center ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            ⭐ 12 лет опыта • Премиум-материалы • Гарантия
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Детейлинг автомобиля в&nbsp;Москве — премиальный уход от&nbsp;Propellini
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Полное восстановление блеска, чистоты и&nbsp;защиты вашего авто. Более 5000 машин вернулись с&nbsp;новым обликом.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button onClick={() => scrollToSection('form')} size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
              Записаться на детейлинг
            </Button>
            <Button onClick={() => scrollToSection('prices')} size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white/10">
              Рассчитать стоимость
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 justify-center text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" className="text-primary" size={20} />
              <span>12 лет опыта</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" className="text-primary" size={20} />
              <span>Премиум-материалы</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" className="text-primary" size={20} />
              <span>Гарантия на результат</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Что входит в детейлинг</h2>
            <Button onClick={() => scrollToSection('form')} className="hidden md:inline-flex bg-gradient-to-r from-primary to-secondary">
              Записаться
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name={service.icon} className="text-primary" size={24} />
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 border-t border-border bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Почему выбирают Propellini</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name={benefit.icon} className="text-primary" size={28} />
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Наши работы</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <img 
              src="https://cdn.poehali.dev/projects/79a51910-729a-4fe2-98ce-428f8410d123/files/eeeba0db-6d8f-46fe-a854-3dd15badade4.jpg" 
              alt="Детейлинг студия Propellini"
              className="rounded-2xl w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
            <img 
              src="https://cdn.poehali.dev/projects/79a51910-729a-4fe2-98ce-428f8410d123/files/5010939f-5075-4969-a005-d954a9e44c62.jpg" 
              alt="Полировка и керамика"
              className="rounded-2xl w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
            <img 
              src="https://cdn.poehali.dev/projects/79a51910-729a-4fe2-98ce-428f8410d123/files/0df54fcb-2abc-4679-8f6e-2365cce4292e.jpg" 
              alt="Химчистка салона"
              className="rounded-2xl w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 border-t border-border bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4">
            <h2 className="text-3xl md:text-4xl font-bold">Отзывы клиентов</h2>
            <Button variant="outline" onClick={() => window.open('https://yandex.ru/maps/?text=Propellini', '_blank')}>
              Смотреть в Яндекс.Картах
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="CheckCircle" className="text-primary" size={20} />
                    <CardTitle className="text-lg">Отличный результат</CardTitle>
                  </div>
                  <CardDescription className="text-base mb-3">«{review.text}»</CardDescription>
                  <p className="text-muted-foreground text-sm">— {review.name}, {review.car}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Пакеты услуг и цены</h2>
            <Button onClick={() => scrollToSection('form')} className="hidden md:inline-flex bg-gradient-to-r from-primary to-secondary">
              Выбрать пакет
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {packages.map((pkg, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all">
                <CardHeader>
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-base mt-3">{pkg.features}</CardDescription>
                  <p className="text-3xl font-bold text-primary mt-4">{pkg.price}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
          <p className="text-muted-foreground text-sm">
            * Точная стоимость зависит от класса авто и состояния покрытия. Узнайте цену через заявку.
          </p>
        </div>
      </section>

      <section id="process" className="py-20 border-t border-border bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Как проходит процесс</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name={step.icon} className="text-primary" size={20} />
                    <span className="font-bold text-lg">{index + 1})</span>
                  </div>
                  <CardTitle className="text-base mb-2">{step.title}</CardTitle>
                  <CardDescription className="text-sm">{step.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Локация и контакты</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl mb-6">Контактная информация</CardTitle>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-1">Адрес:</p>
                    <p className="text-muted-foreground">Москва, ул. Авиационная, 79 (м. Щукино)</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Время работы:</p>
                    <p className="text-muted-foreground">10:00 – 21:00, без выходных</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Телефон:</p>
                    <a href="tel:+79919361489" className="text-primary hover:underline">+7 (991) 936-14-89</a>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">E-mail:</p>
                    <a href="mailto:info@proppelini.ru" className="text-primary hover:underline">info@proppelini.ru</a>
                  </div>
                  <div className="flex flex-wrap gap-3 pt-4">
                    <Button 
                      onClick={() => window.open('https://wa.me/79686648888', '_blank')}
                      className="bg-gradient-to-r from-primary to-secondary"
                    >
                      <Icon name="MessageCircle" className="mr-2" size={18} />
                      WhatsApp
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => window.open('https://t.me/propellini_detailing', '_blank')}
                    >
                      <Icon name="Send" className="mr-2" size={18} />
                      Telegram
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => window.open('https://vk.com/propellini', '_blank')}
                    >
                      VK
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <div className="rounded-2xl overflow-hidden border border-border h-[400px] bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Карта Яндекс (iframe)</p>
            </div>
          </div>
        </div>
      </section>

      <section id="form" className="py-20 border-t border-border bg-muted/20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Получите бесплатную консультацию мастера</h2>
            <p className="text-muted-foreground">Введите контакты — подскажем подходящий пакет и свободные слоты</p>
          </div>
          <Card className="bg-card border-border">
            <CardHeader>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input 
                      id="name"
                      placeholder="Иван"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      placeholder="+7 900 000-00-00"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="car">Модель авто</Label>
                    <Input 
                      id="car"
                      placeholder="BMW X5 / Toyota Camry"
                      value={formData.car}
                      onChange={(e) => setFormData({...formData, car: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="package">Пакет</Label>
                    <Select value={formData.package} onValueChange={(value) => setFormData({...formData, package: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите пакет" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Базовый">Базовый</SelectItem>
                        <SelectItem value="Стандарт">Стандарт</SelectItem>
                        <SelectItem value="Премиум">Премиум</SelectItem>
                        <SelectItem value="Не знаю">Пока не решил(а)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="comment">Комментарий</Label>
                  <Textarea 
                    id="comment"
                    placeholder="Опишите задачу: состояние ЛКП/салона, пожелания по защите..."
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    rows={4}
                  />
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox 
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => setFormData({...formData, consent: checked as boolean})}
                    required
                  />
                  <Label htmlFor="consent" className="text-sm text-muted-foreground cursor-pointer">
                    Согласен(на) с политикой обработки персональных данных
                  </Label>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button type="submit" className="bg-gradient-to-r from-primary to-secondary">
                    Отправить заявку
                  </Button>
                  <Button type="button" variant="outline" onClick={() => scrollToSection('prices')}>
                    Посмотреть цены
                  </Button>
                </div>
              </form>
            </CardHeader>
          </Card>
        </div>
      </section>

      <footer className="py-8 border-t border-border text-center">
        <div className="container mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />
          <p className="text-muted-foreground text-sm">
            © Propellini, 2013–2025 • Детейлинг-студия, Москва • Политика конфиденциальности
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;