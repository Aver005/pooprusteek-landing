import Nav from './components/Nav'
import Hero from './components/Hero'
import ZeroDollars from './components/ZeroDollars'
import Features from './components/Features'
import GoalLoop from './components/GoalLoop'
import Commands from './components/Commands'
import TechStrip from './components/TechStrip'
import Footer from './components/Footer'
import StatusBar from './components/StatusBar'

export default function App() {
  return (
    <div id="top" className="crt pb-8">
      <Nav />
      <main>
        <Hero />
        <ZeroDollars />
        <Features />
        <GoalLoop />
        <Commands />
        <TechStrip />
      </main>
      <Footer />
      <StatusBar />
    </div>
  )
}
