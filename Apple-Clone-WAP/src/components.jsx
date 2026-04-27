import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { images } from './assets/images.js'

const NAV_ITEMS = [
  { label: 'Mac', href: '/mac' },
  { label: 'iPad', href: '/ipad' },
  { label: 'iPhone', href: '/iphone' },
]

const DROPDOWN_SECTIONS = [
  {
    title: 'Explore',
    items: ['Compare models', 'Switch to Apple', 'Why Apple'],
  },
  {
    title: 'Shop',
    items: ['Shop the latest', 'Accessories', 'Trade In'],
  },
  {
    title: 'More',
    items: ['Support', 'Financing', 'Special offers'],
  },
]

const PAGE_CONTENT = {
  home: {
    eyebrow: 'Apple-inspired design',
    title: 'A simple, polished storefront feel.',
    description:
      'Clean layouts, generous spacing, and soft motion keep the experience calm and familiar.',
    products: [
      product('iphone-16-pro', 'iPhone 16 Pro', 'Strength. Speed. A calmer kind of power.', 'Titanium Black', images.iphone[0]),
      product('macbook-air', 'MacBook Air', 'Thin, light, and quietly capable every day.', 'Sky Blue', images.mac[0]),
      product('ipad-pro', 'iPad Pro', 'Big ideas, bright display, and smooth pencil flow.', 'Silver', images.ipad[0]),
      product('imac', 'iMac', 'All-in-one desktop with color and clarity.', 'Blue', images.mac[1]),
      product('iphone-16', 'iPhone 16', 'A balanced everyday phone with a fresh finish.', 'Ultramarine', images.iphone[1]),
    ],
  },
  iphone: {
    eyebrow: 'iPhone',
    title: 'Meet the iPhone lineup.',
    description:
      'Five cards, simple motion, and a bright product grid that feels right at home.',
    products: [
      product('iphone-16-pro', 'iPhone 16 Pro', 'Titanium design with a premium edge.', 'Desert Titanium', images.iphone[0]),
      product('iphone-16', 'iPhone 16', 'Color-forward and ready for everyday life.', 'Ultramarine', images.iphone[1]),
      product('iphone-16-plus', 'iPhone 16 Plus', 'More screen, more room, same clean feel.', 'Teal', images.iphone[2]),
      product('iphone-15', 'iPhone 15', 'A polished favorite with Dynamic Island.', 'Pink', images.iphone[3]),
      product('iphone-se', 'iPhone SE', 'Compact, familiar, and still quick.', 'Midnight', images.iphone[4]),
    ],
  },
  mac: {
    eyebrow: 'Mac',
    title: 'Power, shaped with restraint.',
    description:
      'Minimal cards, soft glass surfaces, and plenty of air around the products.',
    products: [
      product('macbook-pro', 'MacBook Pro', 'Dark finish, bright display, serious performance.', 'Space Black', images.mac[0]),
      product('macbook-air', 'MacBook Air', 'Light in hand, smooth in motion.', 'Starlight', images.mac[1]),
      product('imac', 'iMac', 'Desktop simplicity in a clean color palette.', 'Blue', images.mac[2]),
      product('mac-mini', 'Mac mini', 'Small footprint, surprisingly big output.', 'Silver', images.mac[3]),
      product('mac-studio', 'Mac Studio', 'A compact studio core for heavier workflows.', 'Silver', images.mac[4]),
    ],
  },
  ipad: {
    eyebrow: 'iPad',
    title: 'Portable, bright, and expressive.',
    description:
      'Wide cards, soft shadows, and just enough hover motion to keep it feeling alive.',
    products: [
      product('ipad-pro', 'iPad Pro', 'A thin slab of screen, speed, and focus.', 'Space Black', images.ipad[0]),
      product('ipad-air', 'iPad Air', 'Lightweight and colorful with room to create.', 'Purple', images.ipad[1]),
      product('ipad', 'iPad', 'A friendly all-rounder for work and play.', 'Yellow', images.ipad[2]),
      product('ipad-mini', 'iPad mini', 'Small form, big usefulness.', 'Blue', images.ipad[3]),
      product('ipad-pro-13', 'iPad Pro 13-inch', 'More canvas, same refined design language.', 'Silver', images.ipad[4]),
    ],
  },
}

const ALL_PRODUCTS = Object.values(PAGE_CONTENT).flatMap(({ products }) => products)
const UNIQUE_PRODUCTS = Array.from(new Map(ALL_PRODUCTS.map((item) => [item.id, item])).values())

function product(id, name, text, finish, img) {
  return {
    id,
    name,
    text,
    finish,
    img,
  }
}

function AppleLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M15.16 3.12c-.88.11-1.9.63-2.5 1.34-.54.63-.98 1.57-.81 2.47 1 .08 1.99-.46 2.61-1.18.57-.67.96-1.58.7-2.63ZM18.53 8.22c-.96-1.17-2.32-1.85-3.61-1.85-1.7 0-2.42.81-3.6.81-1.22 0-2.14-.81-3.62-.81-1.46 0-3.02.89-4.01 2.42-1.43 2.18-1.18 6.27 1.13 9.79.82 1.26 1.92 2.66 3.35 2.67 1.27.01 1.63-.81 3.35-.82 1.72-.02 2.05.84 3.33.81 1.43-.01 2.59-1.57 3.41-2.82.59-.9.82-1.36 1.28-2.37-3.3-1.26-3.83-5.95-.01-7.83Z" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" strokeLinecap="round" />
    </svg>
  )
}



function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null)
  const [searchOpen, setSearchOpen] = useState(false)

  const activeItem = useMemo(
    () => NAV_ITEMS.find((item) => item.label === activeMenu),
    [activeMenu],
  )

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl">
      <div
        className="mx-auto flex h-11 max-w-[1100px] items-center justify-between gap-4 px-4 text-[12px] text-[#1d1d1f] sm:px-6"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <Link to="/" className="flex h-11 w-10 items-center justify-center text-[#1d1d1f] transition hover:text-black">
          <span className="sr-only">Apple clone home</span>
          <AppleLogo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="relative">
              <Link
                to={item.href}
                className="flex h-11 items-center text-[#1d1d1f]/80 transition hover:text-black"
                onMouseEnter={() => setActiveMenu(item.label)}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSearchOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-[#1d1d1f] transition hover:bg-black/[0.04]"
            aria-label="Toggle search"
          >
            <SearchIcon />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-black/5 bg-white/95 transition-all duration-300 ease-out ${
          activeItem ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div
          className={`mx-auto grid max-w-[1100px] gap-8 px-4 py-6 transition duration-300 sm:px-6 md:grid-cols-3 ${
            activeItem ? 'translate-y-0' : '-translate-y-2'
          }`}
        >
          {DROPDOWN_SECTIONS.map((section) => (
            <div key={section.title}>
              <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#6e6e73]">
                {section.title}
              </p>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="text-sm text-[#1d1d1f]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`mx-auto w-full max-w-[1100px] overflow-hidden px-4 transition-all duration-300 sm:px-6 ${
          searchOpen ? 'max-h-24 py-3 opacity-100' : 'max-h-0 py-0 opacity-0'
        }`}
      >
        <input
          type="text"
          placeholder="Search apple.com clone"
          className="w-full rounded-full border border-black/10 bg-[#f5f5f7] px-5 py-3 text-sm outline-none ring-0 transition focus:border-black/20"
        />
      </div>
    </header>
  )
}

function HomePage() {
  return <ProductPage pageKey="home" />
}

function IPhonePage() {
  return <ProductPage pageKey="iphone" />
}

function MacPage() {
  return <ProductPage pageKey="mac" />
}

function IPadPage() {
  return <ProductPage pageKey="ipad" />
}

function ProductPage({ pageKey }) {
  const [visible, setVisible] = useState(false)
  const { eyebrow, title, description, products } = PAGE_CONTENT[pageKey]

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 40)
    return () => window.clearTimeout(timer)
  }, [pageKey])

  return (
    <section
      className={`transition-all duration-500 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <Hero eyebrow={eyebrow} title={title} description={description} />
      <ProductGrid products={products} />
    </section>
  )
}

function Hero({ eyebrow, title, description }) {
  return (
    <section className="mb-10 rounded-[32px] bg-white px-6 py-14 text-center shadow-[0_12px_40px_rgba(0,0,0,0.06)] sm:px-10 lg:px-16 lg:py-20">
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-[#6e6e73]">
        {eyebrow}
      </p>
      <h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl lg:text-7xl">
        {title}
      </h1>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#424245] sm:text-lg">
        {description}
      </p>
    </section>
  )
}

function ProductGrid({ products }) {
  return (
    <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {products.map((productItem) => (
        <ProductCard key={productItem.id} productItem={productItem} />
      ))}
    </section>
  )
}

function ProductCard({ productItem }) {
  return (
    <Link
      to={`/product/${productItem.id}`}
      className="group rounded-[28px] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)]"
    >
      <div className="overflow-hidden rounded-[24px] bg-[#f5f5f7]">
        <img
          src={productItem.img}
          alt={productItem.name}
          className="h-48 w-full object-contain transition duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="pt-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6e6e73]">
          {productItem.finish}
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#1d1d1f]">
          {productItem.name}
        </h2>
        <p className="mt-3 min-h-[56px] text-sm leading-6 text-[#424245]">
          {productItem.text}
        </p>
        <span className="mt-5 inline-flex items-center rounded-full bg-[#0071e3] px-5 py-2.5 text-sm font-medium text-white transition group-hover:bg-[#0077ed]">
          Learn more
        </span>
      </div>
    </Link>
  )
}

function ProductDetailPage() {
  const { id } = useParams()
  const productItem = UNIQUE_PRODUCTS.find((item) => item.id === id)

  if (!productItem) {
    return (
      <section className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center">
        <div className="rounded-[28px] bg-white px-8 py-12 text-center shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
          <h1 className="text-3xl font-semibold tracking-tight">Product not found</h1>
          <p className="mt-4 text-[#424245]">Try returning to one of the main product pages.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="mx-auto grid w-full max-w-6xl gap-8 rounded-[32px] bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.06)] md:grid-cols-[1.15fr_0.85fr] md:p-10">
      <div className="overflow-hidden rounded-[28px] bg-[#f5f5f7]">
        <img src={productItem.img} alt={productItem.name} className="h-full w-full object-contain" />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6e6e73]">
          {productItem.finish}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          {productItem.name}
        </h1>
        <p className="mt-5 text-lg leading-8 text-[#424245]">{productItem.text}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/"
            className="inline-flex items-center rounded-full bg-[#0071e3] px-6 py-3 text-sm font-medium text-white"
          >
            Back to home
          </Link>
          <span className="inline-flex items-center rounded-full border border-black/10 px-6 py-3 text-sm text-[#1d1d1f]">
            Basic product page
          </span>
        </div>
      </div>
    </section>
  )
}

export {
  HomePage,
  IPadPage,
  IPhonePage,
  MacPage,
  ProductDetailPage,
  Navbar,
}
