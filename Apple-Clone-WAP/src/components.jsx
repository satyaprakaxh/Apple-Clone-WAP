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