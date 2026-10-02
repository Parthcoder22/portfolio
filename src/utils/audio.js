// Web Audio API synthesized sound generator for subtle, futuristic micro-interactions

class SoundController {
  constructor() {
    this.ctx = null
    this.muted = true // default muted to respect user preference until toggled
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || window.webkitAudioContext
      if (AudioContext) {
        this.ctx = new AudioContext()
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume()
    }
  }

  setMuted(muted) {
    this.muted = muted
    if (!muted) {
      this.init()
      this.playToggle(true)
    }
  }

  isMuted() {
    return this.muted
  }

  playHover() {
    if (this.muted) return
    try {
      this.init()
      if (!this.ctx) return
      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()

      osc.type = 'sine'
      osc.frequency.setValueAtTime(420, this.ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(780, this.ctx.currentTime + 0.04)

      gain.gain.setValueAtTime(0.015, this.ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.04)

      osc.connect(gain)
      gain.connect(this.ctx.destination)

      osc.start()
      osc.stop(this.ctx.currentTime + 0.04)
    } catch {
      // Ignore audio errors gracefully
    }
  }

  playClick() {
    if (this.muted) return
    try {
      this.init()
      if (!this.ctx) return
      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()

      osc.type = 'triangle'
      osc.frequency.setValueAtTime(800, this.ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(320, this.ctx.currentTime + 0.06)

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.06)

      osc.connect(gain)
      gain.connect(this.ctx.destination)

      osc.start()
      osc.stop(this.ctx.currentTime + 0.06)
    } catch {
      // Ignore audio errors
    }
  }

  playSuccess() {
    if (this.muted) return
    try {
      this.init()
      if (!this.ctx) return
      const now = this.ctx.currentTime

      const osc1 = this.ctx.createOscillator()
      const osc2 = this.ctx.createOscillator()
      const gain = this.ctx.createGain()

      osc1.type = 'sine'
      osc2.type = 'sine'

      osc1.frequency.setValueAtTime(523.25, now) // C5
      osc1.frequency.setValueAtTime(659.25, now + 0.08) // E5
      osc2.frequency.setValueAtTime(1046.5, now + 0.16) // C6

      gain.gain.setValueAtTime(0.04, now)
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35)

      osc1.connect(gain)
      osc2.connect(gain)
      gain.connect(this.ctx.destination)

      osc1.start(now)
      osc1.stop(now + 0.16)
      osc2.start(now + 0.16)
      osc2.stop(now + 0.35)
    } catch {
      // Ignore audio errors
    }
  }

  playToggle(state) {
    try {
      this.init()
      if (!this.ctx) return
      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()

      osc.type = 'sine'
      const freq = state ? 580 : 380
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(state ? 760 : 260, this.ctx.currentTime + 0.08)

      gain.gain.setValueAtTime(0.03, this.ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.08)

      osc.connect(gain)
      gain.connect(this.ctx.destination)

      osc.start()
      osc.stop(this.ctx.currentTime + 0.08)
    } catch {
      // Ignore audio errors
    }
  }
}

export const soundFx = new SoundController()
