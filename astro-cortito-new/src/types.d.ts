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
export interface ShortcutWithEmail extends Shortcut {
	id?: string
	oldLink: string | undefined
	newLink?: string
	email?: string | null | undefined
}

export interface ShortcutAsProp {
	shortcut: Shortcut
}

export interface CreatingUser {
	id?: string
	email: string | null | undefined
	name: string | null | undefined
	posts?: Shortcut[]
}