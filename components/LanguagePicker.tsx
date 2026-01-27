"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe } from "lucide-react"
import { cn } from "@/lib/utils"
// Import from our i18n routing configuration
import { usePathname, useRouter } from "@/i18n/routing"
import { useLocale } from "next-intl"

const LANGS = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
] as const

export type LanguageCode = (typeof LANGS)[number]["code"]

interface LanguagePickerProps {
  className?: string
  showLabel?: boolean
}

export default function LanguagePicker({ className, showLabel = false }: LanguagePickerProps) {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale() as LanguageCode
  
  // We keep expandedLang for the UI effect
  const [expandedLang, setExpandedLang] = React.useState<LanguageCode | null>(locale)

  // Sync internal UI state with actual locale
  React.useEffect(() => {
    setExpandedLang(locale)
  }, [locale])

  const setLang = (code: LanguageCode) => {
    setExpandedLang(code)
    // Switch locale using next-intl router
    router.replace(pathname, { locale: code })
  }

  const activeIndex = LANGS.findIndex((l) => l.code === locale)

  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    const max = LANGS.length - 1
    if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) {
      e.preventDefault()
    }
    if (e.key === "ArrowRight") {
      const newCode = LANGS[Math.min(max, activeIndex + 1)].code
      setLang(newCode)
    }
    if (e.key === "ArrowLeft") {
      const newCode = LANGS[Math.max(0, activeIndex - 1)].code
      setLang(newCode)
    }
    if (e.key === "Home") setLang(LANGS[0].code)
    if (e.key === "End") setLang(LANGS[max].code)
  }

  const getTextWidth = (text: string) => {
    // Approximate width calculation: base width + character width
    const baseWidth = 50 // flag + padding + gap
    const charWidth = 8 // approximate width per character
    return Math.max(80, baseWidth + text.length * charWidth)
  }

  const getButtonWidth = (langCode: LanguageCode) => {
    if (expandedLang === langCode) {
      const lang = LANGS.find((l) => l.code === langCode)
      return lang ? getTextWidth(lang.label) : 100
    }
    return 40
  }

  // Fixed position calculation to use expandedLang instead of internal to match animation state
  const getIndicatorPosition = () => {
    let position = 0
    for (let i = 0; i < activeIndex; i++) {
        // Use the current loop index language to check width
      const currentWidth = expandedLang === LANGS[i].code ? getButtonWidth(LANGS[i].code) : 40
      position += currentWidth + 4 // 4 matches gap-1 (4px)
    }
    return position
  }

  const getIndicatorWidth = () => {
    return locale === expandedLang ? getButtonWidth(locale) : 40
  }

  const smoothTransition = {
    type: "spring" as const,
    stiffness: 200,
    damping: 35,
    mass: 0.6,
  }

  const textTransition = {
    type: "spring" as const,
    stiffness: 200,
    damping: 35,
    mass: 0.6,
  }

  return (
    <div className={cn("flex items-center", className)} dir="ltr">
      <div
        className={cn(
          "inline-flex gap-1 p-1.5 rounded-2xl border border-gray-200",
          "bg-white/80 backdrop-blur-md",
          "shadow-sm relative",
          "hover:shadow-md transition-shadow duration-300",
        )}
        role="radiogroup"
        aria-label="Select language"
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <motion.div className="absolute inset-1.5 pointer-events-none" aria-hidden>
          <motion.div
            className="h-10 rounded-xl shadow-sm"
            style={{ backgroundColor: "#EAF4F9" }} // Light blue active bg
            animate={{
              x: getIndicatorPosition(),
              width: getIndicatorWidth(),
            }}
            transition={smoothTransition}
          />
        </motion.div>

        {LANGS.map((lang) => {
          const isActive = lang.code === locale
          const isExpanded = expandedLang === lang.code
          const buttonWidth = getButtonWidth(lang.code)

          return (
            <motion.button
              key={lang.code}
              role="radio"
              aria-checked={isActive}
              title={lang.label}
              onClick={() => setLang(lang.code)}
              whileTap={{ scale: 0.95 }}
              animate={{ width: buttonWidth }}
              transition={smoothTransition}
              className={cn(
                "relative z-10 h-10 rounded-xl flex items-center overflow-hidden",
                "transition-colors duration-200 ease-out",
                isActive ? "text-[#05152F] font-bold" : "text-gray-500 hover:text-gray-900", // Dark text when active
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2",
              )}
            >
              {isExpanded ? (
                // Expanded layout: flag on left, text on right
                <div className="flex items-center justify-start w-full h-full px-2 gap-2">
                  <span className="text-lg leading-none flex-shrink-0">{lang.flag}</span>
                  <AnimatePresence>
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={textTransition}
                      className="text-sm font-medium whitespace-nowrap"
                    >
                      {lang.label}
                    </motion.span>
                  </AnimatePresence>
                </div>
              ) : (
                // Collapsed layout: flag centered
                <div className="flex items-center justify-center w-full h-full">
                  <span className="text-lg leading-none">{lang.flag}</span>
                </div>
              )}
            </motion.button>
          )
        })}
      </div>

      {showLabel && !expandedLang && (
        <div className="ml-3 inline-flex items-center text-gray-500 text-sm">
          <Globe className="mr-1.5 h-4 w-4 opacity-70" />
          <span className="opacity-80 font-medium">{LANGS.find((l) => l.code === locale)?.label}</span>
        </div>
      )}
    </div>
  )
}
