export interface SVGProps {
  className?: string
}

export interface Shortcut {
  id: string
  title?: string
  description?: string
  oldLink: string
  newLink: string
  authorId?: string
}

export interface ShortcutAsProp {
  shortcut: Shortcut
}