'use client'

import { useState } from 'react'
import { Home, Swords, Trophy, LayoutDashboard, Wallet, Bell, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('home')

  const navItems = [
    { name: 'Home', icon: Home, content: (
      <div className="p-6 bg-black rounded-lg">
        <h2 className="text-2xl font-bold text-white mb-6">Welcome to CryptoClash</h2>
        {/* Rest of your Home content */}
      </div>
    )},
    { name: 'Battle', icon: Swords, content: (
      <div className="p-6 bg-black rounded-lg">
        <h2 className="text-2xl font-bold text-white mb-6">Active Battles</h2>
        {/* Rest of your Battle content */}
      </div>
    )},
    { name: 'Leaderboard', icon: Trophy, content: (
      <div className="p-6 bg-black rounded-lg">
        <h2 className="text-2xl font-bold text-white mb-6">Top Traders</h2>
        {/* Rest of your Leaderboard content */}
      </div>
    )},
    { name: 'Overview', icon: LayoutDashboard, content: (
      <div className="p-6 bg-black rounded-lg">
        <h2 className="text-2xl font-bold text-white mb-6">Your Performance</h2>
        {/* Rest of your Overview content */}
      </div>
    )},
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="bg-[#0A0A0A] border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Your existing navigation code */}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {navItems.find(item => item.name.toLowerCase() === activeTab)?.content}
        {children}
      </main>
    </div>
  )
} 