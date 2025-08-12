import * as React from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/20/solid'
import { Button } from './Button.jsx'

export function DarkModeToggle({ isDark, onToggle }) {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onToggle}
      className="p-2 text-white hover:bg-white/20"
      aria-label={isDark ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
    >
      {isDark ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </Button>
  )
}