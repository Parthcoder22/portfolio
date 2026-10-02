import React from 'react'
import { CheckCircle2, Info, AlertTriangle, X } from 'lucide-react'

export default function Toast({ toast, onClose }) {
  if (!toast) return null

  const icons = {
    success: <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />,
    info: <Info className="w-4 h-4 text-[#3458D4] shrink-0 mt-0.5" />,
    warning: <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
  }

  return (
    <div className="fixed bottom-6 right-6 z-[200] max-w-sm w-full animate-fade-in">
      <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FFFFFF] border border-[#E6E4DE] shadow-xl">
        {icons[toast.type] || icons.info}
        <div className="flex-1">
          <p className="text-xs font-bold text-[#171717] font-display uppercase tracking-wider">{toast.title}</p>
          <p className="text-xs text-[#555555] mt-0.5 leading-relaxed">{toast.message}</p>
        </div>
        <button
          onClick={onClose}
          className="text-[#888888] hover:text-[#171717] p-1 transition-colors cursor-pointer"
          aria-label="Dismiss toast"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  )
}
