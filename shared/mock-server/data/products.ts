import { TProductResponse } from '@/shared/api/product/types';
import { delay } from '../libs/helpers';

const mockProducts: TProductResponse[] = [
  { id: 1, name: 'Ноутбук ASUS VivoBook', price: 12500 },
  { id: 2, name: 'Наушники Sony WH-1000XM4', price: 3500 },
  { id: 3, name: 'Смартфон Samsung Galaxy', price: 8900 },
  { id: 4, name: 'Клавиатура Logitech MX Keys', price: 2100 },
  { id: 5, name: 'Мышь Razer DeathAdder', price: 2800 },
  { id: 6, name: 'Планшет iPad Air', price: 12000 },
  { id: 7, name: 'Веб-камера Logitech C920', price: 4500 },
  { id: 8, name: 'Монитор LG 27" 4K', price: 7800 },
  { id: 9, name: 'Колонки JBL Flip 6', price: 3200 },
  { id: 10, name: 'Коврик для мыши SteelSeries', price: 500 },
  { id: 11, name: 'Игровая клавиатура Corsair K95', price: 18900 },
  { id: 12, name: 'Беспроводные наушники AirPods Pro', price: 6700 },
  { id: 13, name: 'Внешний SSD Samsung T7 1TB', price: 4200 },
  { id: 14, name: 'Графический планшет Wacom Intuos', price: 9500 },
  { id: 15, name: 'Микрофон Blue Yeti', price: 13400 },
  { id: 16, name: 'Веб-камера Logitech Brio', price: 2800 },
  { id: 17, name: 'Игровая мышь Logitech G Pro X', price: 5600 },
  { id: 18, name: 'Монитор Dell UltraSharp 27"', price: 11200 },
  { id: 19, name: 'USB-C хаб Anker 7-in-1', price: 3800 },
  { id: 20, name: 'Ноутбук MacBook Air M2', price: 15600 },
  { id: 21, name: 'Игровая консоль PlayStation 5', price: 49900 },
  { id: 22, name: 'Геймпад Xbox Wireless', price: 5200 },
  { id: 23, name: 'Смарт-часы Apple Watch SE', price: 23900 },
  { id: 24, name: 'Видеокарта NVIDIA RTX 4070', price: 74900 },
  { id: 25, name: 'Материнская плата ASUS TUF', price: 18500 },
  { id: 26, name: 'ОЗУ Corsair Vengeance 32GB', price: 9800 },
  { id: 27, name: 'SSD NVMe Kingston 1TB', price: 7200 },
  { id: 28, name: 'Корпус NZXT H510', price: 8900 },
  { id: 29, name: 'Блок питания Corsair RM750x', price: 11900 },
  { id: 30, name: 'Монитор Xiaomi 34" UltraWide', price: 29900 },
];

export async function getProducts(): Promise<TProductResponse[]> {
  await delay(200);
  return [...mockProducts];
}

export async function getProductById(id: number): Promise<TProductResponse | null> {
  await delay(100);
  return mockProducts.find((p) => p.id === id) || null;
}

