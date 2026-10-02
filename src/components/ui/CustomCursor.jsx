import React, { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [followerPos, setFollowerPos] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show on desktop pointers and large screens
    const isTouch = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 1024
    if (isTouch) return

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)

      const target = e.target
      const isInteractive =
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select') ||
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer')

      setIsHovered(!!isInteractive)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [isVisible])

  // Smooth lerp for trailing precision ring
  useEffect(() => {
    let animId
    const follow = () => {
      setFollowerPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.2,
        y: prev.y + (pos.y - prev.y) * 0.2
      }))
      animId = requestAnimationFrame(follow)
    }
    animId = requestAnimationFrame(follow)
    return () => cancelAnimationFrame(animId)
  }, [pos])

  if (!isVisible) return null

  return (
    <>
      {/* Precision Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference bg-white transition-transform duration-75"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 0 : 1})`
        }}
      />

      {/* Outer Precision Ring */}
      <div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 mix-blend-difference border border-white transition-[width,height,transform] duration-150 ease-out"
        style={{
          left: `${followerPos.x}px`,
          top: `${followerPos.y}px`,
          width: isHovered ? '42px' : '22px',
          height: isHovered ? '42px' : '22px',
          backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
          transform: 'translate(-50%, -50%)'
        }}
      />
    </>
  )
}
