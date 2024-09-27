import React from 'react';
import { ArrowUpDown, BookCheck, DollarSign, ShoppingBag } from 'lucide-react';
import {
  AdidasLogo,
  ConversLogo,
  NDLogo,
  NikeLogo,
  PumaLogo,
} from './svgIcons';

export const siteContent = {
  navMenu: [
    {
      id: 1,
      title: 'Homem',
      subItems: [],
    },
    {
      id: 2,
      title: 'Mulhere',
      subItems: [],
    },
    {
      id: 3,
      title: 'Criança',
      subItems: [],
    },
  ],
};

export const HELPER_LINKS = [
  {
    id: 1,
    name: 'Procurar uma loja',
    route: '#',
  },
  {
    id: 2,
    name: 'Ajuda',
    route: '#',
  },
  {
    id: 3,
    name: 'Aderir',
    route: '#',
  },
];
export const HELPE_LINKS = [
  'Estado da encomenda',
  'Devololuções',
  'Contacte-nos',
  'Envio e entrega',
  'Tabela de tamanho',
  'Politicas de privacidade',
  'Termos de venda',
  'Envie-nos feedback',
];
export const PRODUCTS = [
  {
    id: '1',
    title: 'Nike Air Max Plus',
    display: 'banner',
    size: [36, 37.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 45, 45.5, 46, 47],
    brand: 'Nike',
    style: ['Sapatilhas', 'Sapatilhas para homem'],
    category: 'homens',
    price: 10000,
    discountPercentage: 20, // Optional field
    discountedPrice: 0,
    gallery: [
      { image: '/image.jpg', name: '@demoUser' },
      { image: '/pdp.jpg', name: '@demoUser' },
    ],
    noBackground: '/product/NIKE_AIR_MAX_PLUS-transformedd.png',
    image: '/product/NIKE+AIR+MAX+PLUS.png',
    images: [
      {
        color: '',
        urls: [
          '/product/NIKE+AIR+MAX+PLUS.png',
          '/product/NIKE+AIR+MAX+PLUS.png',
          '/product/NIKE+AIR+MAX+PLUS.png',
          '/product/NIKE+AIR+MAX+PLUS.png',
          '/product/NIKE+AIR+MAX+PLUS.png',
        ],
      },
    ],
    description:
      'Sai da tua zona de conforto e exibe um estilo arrojado com as Nike Air Max Plus, uma experiência Tuned Air que oferece uma estabilidade premium e um amortecimento inacreditável enquanto exploras novos horizontes. Com malha arejada, cores de gradiente arrojadas e as linhas de design onduladas das originais, este modelo celebra um estilo arrojado.',
  },
  {
    id: '2',
    title: 'Patta Chuck 70 Marquis',
    display: 'banner',
    brand: 'Converse',
    size: [36, 37.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 45, 45.5, 46, 47],
    style: ['Sapatilhas', 'Sapatilhas para homem'],
    category: 'homens',
    price: 8000,
    discountPercentage: 15, // Optional field
    discountedPrice: 0,
    gallery: [],
    noBackground: '/product/a09784c_c_08x1-removebg-preview-transformed.png',
    image: '/product/a09784c_c_08x1.jpg',
    images: [
      {
        color: '',
        urls: [
          '/product/AIR+MAX+DNB-nbg.png',
          '/product/sapatilhas-air-max-dnbp-nbg.png',
          '/product/sapatilhas-air-max-dno-nbg.png',
          '/product/sapatilhas-air-max-dnw-nbg.png',
        ],
      },
    ],
    description:
      'Sai da tua zona de conforto e exibe um estilo arrojado com as Nike Air Max Plus, uma experiência Tuned Air que oferece uma estabilidade premium e um amortecimento inacreditável enquanto exploras novos horizontes. Com malha arejada, cores de gradiente arrojadas e as linhas de design onduladas das originais, este modelo celebra um estilo arrojado.',
  },
  {
    id: '3',
    title: 'Air Jordan 1 Mid',
    display: 'banner',
    brand: 'Nike',
    size: [36, 37.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 45, 45.5, 46, 47],
    style: ['Sapatilhas', 'Sapatilhas para homem'],
    category: 'homens',
    price: 45000,
    discountPercentage: 5, // Optional field
    discountedPrice: 0,
    gallery: [],
    noBackground: '/product/AIR+JORDAN+1+MID.jpg',
    image: '/product/AIR+JORDAN+1+MID.jpg',
    images: [
      {
        color: '',
        urls: [
          '/product/AIR+MAX+DNB-nbg.png',
          '/product/sapatilhas-air-max-dnbp-nbg.png',
          '/product/sapatilhas-air-max-dno-nbg.png',
          '/product/sapatilhas-air-max-dnw-nbg.png',
        ],
      },
    ],
    description:
      'Sai da tua zona de conforto e exibe um estilo arrojado com as Nike Air Max Plus, uma experiência Tuned Air que oferece uma estabilidade premium e um amortecimento inacreditável enquanto exploras novos horizontes. Com malha arejada, cores de gradiente arrojadas e as linhas de design onduladas das originais, este modelo celebra um estilo arrojado.',
  },
  {
    id: '4',
    title: 'Nike Air Force 107',
    display: 'banner',
    style: ['Sapatilhas', 'Sapatilhas para homem'],
    brand: 'Nike',
    size: [36, 37.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 45, 45.5, 46, 47],
    category: 'homens',
    price: 7000,
    discountPercentage: 10, // Optional field
    discountedPrice: 0,
    gallery: [],
    noBackground: '/product/AIR+FORCE+1+07.png',
    image: '/product/AIR+FORCE+1+07.png',
    images: [
      {
        color: '',
        urls: [
          '/product/AIR+MAX+DNB-nbg.png',
          '/product/sapatilhas-air-max-dnbp-nbg.png',
          '/product/sapatilhas-air-max-dno-nbg.png',
          '/product/sapatilhas-air-max-dnw-nbg.png',
        ],
      },
    ],
    description:
      'Sai da tua zona de conforto e exibe um estilo arrojado com as Nike Air Max Plus, uma experiência Tuned Air que oferece uma estabilidade premium e um amortecimento inacreditável enquanto exploras novos horizontes. Com malha arejada, cores de gradiente arrojadas e as linhas de design onduladas das originais, este modelo celebra um estilo arrojado.',
  },
  {
    id: '5',
    title: 'Chuck 70 Marquis',
    display: 'banner',
    style: ['Sapatilhas', 'Sapatilhas para homem'],
    brand: 'Converse',
    size: [36, 37.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 45, 45.5, 46, 47],
    category: 'mulhers',
    price: 15000,
    discountPercentage: 20, // Optional field
    discountedPrice: 0,
    gallery: [],
    noBackground: '/product/AIR+FORCE+1+07.png',
    image: '/product/a03427c_c_08x1.jpg',
    images: [
      {
        color: '',
        urls: [
          '/product/AIR+MAX+DNB-nbg.png',
          '/product/sapatilhas-air-max-dnbp-nbg.png',
          '/product/sapatilhas-air-max-dno-nbg.png',
          '/product/sapatilhas-air-max-dnw-nbg.png',
        ],
      },
    ],
    description:
      'Sai da tua zona de conforto e exibe um estilo arrojado com as Nike Air Max Plus, uma experiência Tuned Air que oferece uma estabilidade premium e um amortecimento inacreditável enquanto exploras novos horizontes. Com malha arejada, cores de gradiente arrojadas e as linhas de design onduladas das originais, este modelo celebra um estilo arrojado.',
  },
];
export const BANNER = {
  id: '1',
  title: 'Nike Air Max Dn',
  display: 'banner',
  brand: 'nike',
  category: ['Sapatilhas', 'Sapatilhas'],
  price: 10.99,
  noBackground: '/AIR+MAX+DN-nbg.png',
  image: '/product/NIKE+AIR+MAX+PLUS.png',
  images: [
    '/product/AIR+MAX+DNB-nbg.png',
    '/product/AIR+MAX+DNP-nbg.png',
    '/product/AIR+MAX+DNG-nbg.png',
    '/product/AIR+MAX+DNWH-nbg.png',
  ],
  description:
    'Dá as boas-vindas à próxima geração da tecnologia Air. As Air Max DN contam com o nosso sistema de unidades Dynamic Air de tubos de pressão dupla, criando uma sensação reativa a cada passo. Isto resulta num design futurista que é suficientemente confortável para dia e noite. Feel the Unreal',
};
export const RESUCES_LINKS = [
  { id: '1', name: 'Cartões de oferta', route: '' },
  { id: '2', name: 'Procurar loja de oferta', route: '' },
  { id: '3', name: 'Tornate-te membro', route: '' },
  { id: '4', name: 'Feedback', route: '' },
  { id: '5', name: 'Codigo promosional', route: '' },
];
export const CUMPONY_LINKS = [
  { id: '1', name: 'Sobre a Redxp', route: '/sobre' },
  { id: '2', name: 'Notícias', route: '/noticias' },
  { id: '3', name: 'Tornate-te membro', route: '/tornate-membro' },
  { id: '4', name: 'Feedback', route: '/feddback' },
  { id: '5', name: 'Codigo promosional', route: '' },
];
export const LANGUAGES = ['Portugues', 'English'];
export const CATEGORY = [
  { id: '1', image: '/mens.jpg', url: 'mens', title: 'Homems' },
  { id: '2', image: '/womens.jpg', url: 'womens', title: 'Mulheres' },
  { id: '3', image: '/kids.jpg', url: 'kids', title: 'Crianças' },
];
export const GENDER = [
  { id: 1, name: 'Homem', value: 'Homem' },
  { id: 2, name: 'Mulher', value: 'Mulher' },
  { id: 3, name: 'Unisex', value: 'Unisex' },
];
export const CATEGORIES = [
  { id: 1, name: 'Stilo de vida', value: 'Stilo de vida' },
  { id: 2, name: 'Corrida', value: 'Corrida' },
  { id: 3, name: 'Football', value: 'Football' },
  { id: 4, name: 'Basketball', value: 'Basketball' },
  { id: 5, name: 'Treino & GYM', value: 'Treino & GYM' },
];
export const SUB_CATEGORY = [
  { id: 1, name: 'Novos', value: 'Novos' },
  { id: 2, name: 'Mais vendidos', value: 'Mais vendidos' },
  { id: 3, name: 'Preços baixos', value: 'Preços baixos' },
  { id: 4, name: 'Preços altos', value: 'Preços altos' },
];
export const BRANDS = [
  {
    id: '1',
    value: 'Nike',
    logo: React.createElement(NikeLogo, { width: 40, height: 40 }),
  },
  {
    id: '2',
    value: 'Converse',
    logo: React.createElement(ConversLogo, { width: 40, height: 40 }),
  },
  {
    id: '3',
    value: 'Adidas',
    logo: React.createElement(AdidasLogo, { width: 40, height: 40 }),
  },
  {
    id: '4',
    value: 'Puma',
    logo: React.createElement(PumaLogo, { width: 40, height: 40 }),
  },
  {
    id: '5',
    value: 'Nd',
    logo: React.createElement(NDLogo, { width: 40, height: 40 }),
  },
];
export const BRAND = [
  { id: 1, name: 'Nike', value: 'Nike' },
  { id: 2, name: 'Converse', value: 'Converse' },
  { id: 3, name: 'Adidas', value: 'Adidas' },
  { id: 4, name: 'Puma', value: 'Puma' },
  { id: 5, name: 'Nd', value: 'Nd' },
];
export const SOCIAL_MEDIA = [
  { id: '1', logo: '/facebook.png', url: '#' },
  { id: '2', logo: '/x.png', url: '#' },
  { id: '3', logo: '/instagram.png', url: '#' },
];
export const SIZES = [
  36, 36.5, 37.5, 38, 38.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 44.5, 45, 45.5,
  46, 47,
];
export const FEEDBACKS = [
  { id: '1', replay: 'Oh this is rally nice shoe', stars: 4 },
  { id: '2', replay: 'Oh this is rally nice shoe', stars: 5 },
  { id: '3', replay: 'Oh this is rally nice shoe', stars: 3 },
];
export const OVERVIEWS = [
  {
    id: '1',
    title: 'Orcamento ',
    total: 32499.0,
    new: 12.9,
    icon: React.createElement(DollarSign),
  },
  {
    id: '2',
    title: 'Productos',
    total: 32499.0,
    new: 12.9,
    icon: React.createElement(ShoppingBag),
  },
  {
    id: '3',
    title: 'Encomendas',
    total: 32499.0,
    new: 12.9,
    icon: React.createElement(BookCheck),
  },
  {
    id: '4',
    title: 'Rembolso',
    total: 32499.0,
    new: 12.9,
    icon: React.createElement(ArrowUpDown),
  },
];
export const COLORES = [
  { id: 1, value: '#fff', name: 'Branco' },
  { id: 2, value: '#000', name: 'Preto' },
  { id: 3, value: '#1809e8', name: 'Azul' },
  { id: 4, value: '#e86609', name: 'Laranja' },
  { id: 5, value: '#fce90f', name: 'Amarelo' },
  { id: 6, value: '#11f505', name: 'Verde' },
  { id: 7, value: '#f70fec', name: 'Lilas' },
  { id: 8, value: '#f70f17', name: 'Vermelho' },
  { id: 9, value: '#dbd0d1', name: 'Zinsa' },
];
export const PRODUCT_TYPE = [
  { id: 1, value: 'Sapatos', name: 'Sapatos' },
  { id: 2, value: 'Tshite', name: 'Tshite' },
  { id: 3, value: 'Calças', name: 'Calças' },
];
