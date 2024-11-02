'use client'

import { useState } from 'react'
import { Home, Swords, Trophy, LayoutDashboard, Wallet, Bell, Menu, X, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface NavItem {
  name: string;
  icon: React.ElementType;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState('home')
  const [selectedTrader, setSelectedTrader] = useState<any>(null)
  const [selectedGuild, setSelectedGuild] = useState<any>(null)

  const navItems: NavItem[] = [
    { name: 'Home', icon: Home },
    { name: 'Battle', icon: Swords },
    { name: 'Leaderboard', icon: Trophy },
    { name: 'Overview', icon: LayoutDashboard },
  ]

  const traders = [
    { name: 'CryptoKing', pnl: '+324.5%', wins: 156, losses: 42, totalGames: 198, rank: 1, badge: 'Diamond', winRate: '78.8%', avgProfitPerTrade: '$156', totalProfit: '$24,336', favoriteAsset: 'BTC' },
    { name: 'MoonShot', pnl: '+287.2%', wins: 143, losses: 55, totalGames: 198, rank: 2, badge: 'Platinum', winRate: '72.2%', avgProfitPerTrade: '$142', totalProfit: '$20,306', favoriteAsset: 'ETH' },
    { name: 'DiamondHands', pnl: '+215.8%', wins: 128, losses: 70, totalGames: 198, rank: 3, badge: 'Gold', winRate: '64.6%', avgProfitPerTrade: '$131', totalProfit: '$16,768', favoriteAsset: 'ADA' },
  ]

  const guilds = [
    { name: 'Crypto Wolves', pnl: '+287.5%', wins: 523, losses: 177, totalGames: 700, members: 50, rank: 1, badge: 'Elite', avgMemberProfit: '$5,750', topPerformer: 'AlphaTrader', guildFund: '$287,500' },
    { name: 'Bull Runners', pnl: '+253.2%', wins: 498, losses: 202, totalGames: 700, members: 45, rank: 2, badge: 'Pro', avgMemberProfit: '$5,626', topPerformer: 'CryptoNinja', guildFund: '$253,200' },
    { name: 'Hodl Gang', pnl: '+218.9%', wins: 476, losses: 224, totalGames: 700, members: 48, rank: 3, badge: 'Expert', avgMemberProfit: '$4,560', topPerformer: 'HODLer', guildFund: '$218,900' },
  ]

  const battleRooms = [
    { id: 1, name: 'BTC vs ETH Showdown', participants: 2, maxParticipants: 4, duration: '24h', entryFee: '$100' },
    { id: 2, name: 'Altcoin Frenzy', participants: 3, maxParticipants: 6, duration: '12h', entryFee: '$50' },
    { id: 3, name: 'Meme Coin Madness', participants: 1, maxParticipants: 3, duration: '6h', entryFee: '$25' },
  ]

  const activeBattle = {
    name: 'DOGE vs SHIB',
    participants: [
      { name: 'DogeWarrior', pnl: '+12.5%' },
      { name: 'ShibaLover', pnl: '-5.2%' }
    ],
    timeRemaining: '2h 15m',
    totalPrizePool: '$1000'
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="p-6 cyber-panel">
            <h2 className="text-2xl font-bold text-white mb-6">Welcome to TheARENA</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#111111] p-6 rounded-lg cyber-border">
                <h3 className="text-xl font-semibold text-[#00FF88] mb-2">Current Active Battles</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white">24</span>
                  <span className="ml-2 text-[#00FF88]">+3 from yesterday</span>
                </div>
              </div>
              <div className="bg-[#111111] p-6 rounded-lg cyber-border">
                <h3 className="text-xl font-semibold text-[#00FF88] mb-2">Top Gainer Today</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white">DOGE</span>
                  <span className="ml-2 text-[#00FF88]">+15.2%</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#111111] p-6 rounded-lg cyber-border">
                <h3 className="text-xl font-semibold text-white mb-4">Market Overview</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[#666666]">BTC</span>
                    <span className="text-[#00FF88]">$45,230 (+2.3%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#666666]">ETH</span>
                    <span className="text-[#00FF88]">$3,120 (+1.8%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#666666]">DOGE</span>
                    <span className="text-[#00FF88]">$0.12 (+15.2%)</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#111111] p-6 rounded-lg cyber-border">
                <h3 className="text-xl font-semibold text-white mb-4">Your Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[#666666]">Win Rate</span>
                    <span className="text-[#00FF88]">68%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#666666]">Total Profit</span>
                    <span className="text-[#00FF88]">+$1,234</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#666666]">Rank</span>
                    <span className="text-[#00FF88]">#42</span>
                  </div>
                </div>
              </div>
            </div>
            <Button className="w-full mt-6 cyber-button">Start a New Battle</Button>
          </div>
        )
      case 'battle':
        return (
          <div className="p-6 cyber-panel">
            <h2 className="text-2xl font-bold text-white mb-6">Battle Arena</h2>
            {activeBattle && (
              <div className="bg-[#111111] p-4 rounded-lg cyber-border mb-6">
                <h3 className="text-xl font-semibold text-[#00FF88] mb-2">Active Battle: {activeBattle.name}</h3>
                <div className="flex justify-between items-center mb-2">
                  <div>
                    {activeBattle.participants.map((participant, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Avatar className="h-8 w-8 border-2 border-[#00FF88]">
                          <AvatarFallback>{participant.name[0]}</AvatarFallback>
                        </Avatar>
                        <span className="text-white">{participant.name}</span>
                        <span className={participant.pnl.startsWith('+') ? 'text-[#00FF88]' : 'text-[#FF4D4D]'}>{participant.pnl}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-right">
                    <div className="text-[#666666]">Time Remaining: <span className="text-white">{activeBattle.timeRemaining}</span></div>
                    <div className="text-[#666666]">Prize Pool: <span className="text-[#00FF88]">{activeBattle.totalPrizePool}</span></div>
                  </div>
                </div>
              </div>
            )}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">Open Battle Rooms</h3>
              <div className="space-y-4">
                {battleRooms.map((room) => (
                  <div key={room.id} className="bg-[#111111] p-4 rounded-lg cyber-border flex items-center justify-between">
                    <div>
                      <h4 className="text-[#00FF88] font-semibold">{room.name}</h4>
                      <p className="text-[#666666] text-sm">
                        Participants: {room.participants}/{room.maxParticipants} | Duration: {room.duration} | Entry: {room.entryFee}
                      </p>
                    </div>
                    <Button variant="outline" className="cyber-button">
                      Join Battle
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full cyber-button">Create Battle Room</Button>
              </DialogTrigger>
              <DialogContent className="cyber-panel">
                <DialogHeader>
                  <DialogTitle>Create a New Battle Room</DialogTitle>
                  <DialogDescription>Set up your battle parameters</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" className="col-span-3 bg-[#0A0A0A] border-[#333333]" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="participants" className="text-right">
                      Max Participants
                    </Label>
                    <Input id="participants" type="number" className="col-span-3 bg-[#0A0A0A] border-[#333333]" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="duration" className="text-right">
                      Duration
                    </Label>
                    <Input id="duration" className="col-span-3 bg-[#0A0A0A] border-[#333333]" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="entryFee" className="text-right">
                      Entry Fee
                    </Label>
                    <Input id="entryFee" className="col-span-3 bg-[#0A0A0A] border-[#333333]" />
                  </div>
                </div>
                <Button className="w-full cyber-button">Create Battle</Button>
              </DialogContent>
            </Dialog>
          </div>
        )
      case 'leaderboard':
        return (
          <div className="p-6 cyber-panel">
            <h2 className="text-2xl font-bold text-white mb-6">Leaderboard</h2>
            <Tabs defaultValue="traders" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="traders">Top Traders</TabsTrigger>
                <TabsTrigger value="guilds">Top Guilds</TabsTrigger>
              </TabsList>
              <TabsContent value="traders">
                <div className="space-y-4">
                  {traders.map((trader) => (
                    <div key={trader.name} className="bg-[#111111] p-4 rounded-lg cyber-border cursor-pointer" onClick={() => setSelectedTrader(trader)}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-10 w-10 border-2 border-[#00FF88]">
                            <AvatarFallback>{trader.rank}</AvatarFallback>
                          </Avatar>
                          <div>
                            <span className="text-white font-semibold">{trader.name}</span>
                            <Badge className="ml-2 bg-[#00FF88] text-black">{trader.badge}</Badge>
                          </div>
                        </div>
                        <span className="text-[#00FF88]">{trader.pnl}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div>
                          <span className="text-[#666666]">Wins:</span>
                          <span className="text-white ml-1">{trader.wins}</span>
                        </div>
                        <div>
                          <span className="text-[#666666]">Losses:</span>
                          <span className="text-white ml-1">{trader.losses}</span>
                        </div>
                        <div>
                          <span className="text-[#666666]">Total Games:</span>
                          <span className="text-white ml-1">{trader.totalGames}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="guilds">
                <div className="space-y-4">
                  {guilds.map((guild) => (
                    <div key={guild.name} className="bg-[#111111] p-4 rounded-lg cyber-border cursor-pointer" onClick={() => setSelectedGuild(guild)}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-10 w-10 border-2 border-[#00FF88]">
                            <AvatarFallback>{guild.rank}</AvatarFallback>
                          </Avatar>
                          <div>
                            <span className="text-white font-semibold">{guild.name}</span>
                            <Badge className="ml-2 bg-[#00FF88] text-black">{guild.badge}</Badge>
                          </div>
                        </div>
                        <span className="text-[#00FF88]">{guild.pnl}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-sm mb-2">
                        <div>
                          <span className="text-[#666666]">Wins:</span>
                          <span className="text-white ml-1">{guild.wins}</span>
                        </div>
                        <div>
                          <span className="text-[#666666]">Losses:</span>
                          <span className="text-white ml-1">{guild.losses}</span>
                        </div>
                        <div>
                          <span className="text-[#666666]">Total Games:</span>
                          <span className="text-white ml-1">{guild.totalGames}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 text-[#666666] mr-1" />
                        <span className="text-[#666666]">Members:</span>
                        <span className="text-white ml-1">{guild.members}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            {selectedTrader && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div className="cyber-panel max-w-md w-full">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-white">{selectedTrader.name}</h3>
                    <Button variant="ghost" size="icon" onClick={() => setSelectedTrader(null)}>
                      <X className="h-6 w-6" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-[#666666]">Rank:</span>
                      <span className="text-white ml-1">#{selectedTrader.rank}</span>
                    </div>
                    <div>
                      <span className="text-[#666666]">Badge:</span>
                      <Badge className="ml-2 bg-[#00FF88] text-black">{selectedTrader.badge}</Badge>
                    </div>
                    <div>
                      <span className="text-[#666666]">PnL:</span>
                      <span className="text-[#00FF88] ml-1">{selectedTrader.pnl}</span>
                    </div>
                    <div>
                      <span className="text-[#666666]">Win Rate:</span>
                      <span className="text-white ml-1">{selectedTrader.winRate}</span>
                    </div>
                    <div>
                      <span className="text-[#666666]">Avg Profit/Trade:</span>
                      <span className="text-white ml-1">{selectedTrader.avgProfitPerTrade}</span>
                    </div>
                    <div>
                      <span className="text-[#666666]">Total Profit:</span>
                      <span className="text-[#00FF88] ml-1">{selectedTrader.totalProfit}</span>
                    </div>
                    <div>
                      <span className="text-[#666666]">Favorite Asset:</span>
                      <span className="text-white ml-1">{selectedTrader.favoriteAsset}</span>
                    </div>
                    <div>
                      <span className="text-[#666666]">Total Games:</span>
                      <span className="text-white ml-1">{selectedTrader.totalGames}</span>
                    </div>
                  </div>
                  <Button className="w-full cyber-button">Challenge Trader</Button>
                </div>
              </div>
            )}
            {selectedGuild && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div className="cyber-panel max-w-md w-full">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-white">{selectedGuild.name}</h3>
                    <Button variant="ghost" size="icon" onClick={() => setSelectedGuild(null)}>
                      <X className="h-6 w-6" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-[#666666]">Rank:</span>
                      <span className="text-white ml-1">#{selectedGuild.rank}</span>
                    </div>
                    <div>
                      <span className="text-[#666666]">Badge:</span>
                      <Badge className="ml-2 bg-[#00FF88] text-black">{selectedGuild.badge}</Badge>
                    </div>
                    <div>
                      <span className="text-[#666666]">PnL:</span>
                      <span className="text-[#00FF88] ml-1">{selectedGuild.pnl}</span>
                    </div>
                    <div>
                      <span className="text-[#666666]">Members:</span>
                      <span className="text-white ml-1">{selectedGuild.members}</span>
                    </div>
                    <div>
                      <span className="text-[#666666]">Avg Member Profit:</span>
                      <span className="text-white ml-1">{selectedGuild.avgMemberProfit}</span>
                    </div>
                    <div>
                      <span className="text-[#666666]">Top Performer:</span>
                      <span className="text-white ml-1">{selectedGuild.topPerformer}</span>
                    </div>
                    <div>
                      <span className="text-[#666666]">Guild Fund:</span>
                      <span className="text-[#00FF88] ml-1">{selectedGuild.guildFund}</span>
                    </div>
                    <div>
                      <span className="text-[#666666]">Total Games:</span>
                      <span className="text-white ml-1">{selectedGuild.totalGames}</span>
                    </div>
                  </div>
                  <Button className="w-full cyber-button">Join Guild</Button>
                </div>
              </div>
            )}
          </div>
        )
      case 'overview':
        return (
          <div className="p-6 cyber-panel">
            <h2 className="text-2xl font-bold text-white mb-6">Your Performance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#111111] p-4 rounded-lg cyber-border">
                <h3 className="text-[#666666] font-medium mb-2">Win Rate</h3>
                <span className="text-3xl font-bold text-white">68%</span>
              </div>
              <div className="bg-[#111111] p-4 rounded-lg cyber-border">
                <h3 className="text-[#666666] font-medium mb-2">Total Profit</h3>
                <span className="text-3xl font-bold text-[#00FF88]">+$1,234</span>
              </div>
            </div>
            <div className="bg-[#111111] p-4 rounded-lg cyber-border mb-6">
              <h3 className="text-[#666666] font-medium mb-4">Recent Battles</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white">DOGE vs SHIB</span>
                  <Badge className="bg-[#00FF88] text-black">Won</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white">ETH vs BNB</span>
                  <Badge className="bg-[#FF4D4D] text-white">Lost</Badge>
                </div>
              </div>
            </div>
            <Button className="w-full cyber-button">Start a New Battle</Button>
          </div>
        )
      default:
        return children
    }
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Cyberpunk background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black z-0" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0" />

      <nav className="relative z-10 bg-black/50 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left section */}
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#9333EA] to-[#c026d3] bg-clip-text text-transparent">
                TheARENA
              </span>
              <div className="hidden md:block ml-10">
                <div className="flex items-baseline space-x-4">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => setActiveTab(item.name.toLowerCase())}
                      className={`${
                        activeTab === item.name.toLowerCase()
                          ? 'bg-purple-900/50 text-purple-400 border border-purple-500/50'
                          : 'text-gray-300 hover:bg-purple-900/30 hover:text-purple-300'
                      } px-3 py-2 rounded-md text-sm font-medium transition-all duration-300`}
                    >
                      <item.icon className="w-4 h-4 inline-block mr-2" />
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right section */}
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <Button variant="ghost" size="icon" 
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  <Bell className="h-5 w-5" />
                </Button>
                <div className="ml-3 relative">
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 rounded-full border-2 border-purple-500">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="bg-purple-900/50">UN</AvatarFallback>
                    </Avatar>
                    <div className="ml-2">
                      <div className="text-sm font-medium text-purple-300">User123</div>
                      <div className="text-xs text-purple-400/60">$1,234</div>
                    </div>
                  </div>
                </div>
                <Button className="ml-4 bg-purple-900/50 text-purple-300 hover:bg-purple-800 
                                 border border-purple-500/50 transition-all duration-300
                                 hover:shadow-[0_0_15px_rgba(147,51,234,0.3)]">
                  <Wallet className="w-4 h-4 mr-2" />
                  Connect Wallet
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-purple-400">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="backdrop-blur-sm bg-black/30 rounded-lg border border-purple-500/20 p-6">
          {renderContent()}
        </div>
      </main>
    </div>
  )
}