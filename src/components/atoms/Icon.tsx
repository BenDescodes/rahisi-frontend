
interface IconProps {
    icon: any,
    className?: string
}

export function Icon({ icon, className }: IconProps) {
    return (
        <span className={className}>{icon}</span>
    )
}