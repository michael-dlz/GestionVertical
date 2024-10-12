interface IconProps {
    stroke?: string;
    size?: number;
}

export function IconFacebook({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width={size} height={size} viewBox="0 0 24 24" stroke-width="1" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
        </svg>
    );
}

export function IconInstagram({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width={size} height={size} viewBox="0 0 24 24" stroke-width="1" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M16.5 7.5l0 .01" />
            </svg>
        </>
    )
}

export function IconTiktok({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-tiktok" width={size} height={size} viewBox="0 0 24 24" stroke-width="1" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
            </svg>
        </>
    )
}

export function IconLinkedin({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width={size} height={size} viewBox="0 0 24 24" stroke-width="1" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <path d="M8 11l0 5" />
                <path d="M8 8l0 .01" />
                <path d="M12 16l0 -5" />
                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
        </>
    )
}

export function IconPropietary({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-community" width={size} height={size} viewBox="0 0 24 24" stroke-width="1" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                <path d="M13 7l0 .01" />
                <path d="M17 7l0 .01" />
                <path d="M17 11l0 .01" />
                <path d="M17 15l0 .01" />
            </svg>
        </>
    )
}

// // 

export function IconMessage({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message-2-check" width={size} height={size} viewBox="0 0 24 24" stroke-width="1" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 9h8" />
                <path d="M8 13h6" />
                <path d="M12 21l-1 -1l-2 -2h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6" />
                <path d="M15 19l2 2l4 -4" />
            </svg>
        </>
    )
}

export function IconCheckList({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-checklist" width={size} height={size} viewBox="0 0 24 24" stroke-width="1" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" />
                <path d="M14 19l2 2l4 -4" />
                <path d="M9 8h4" />
                <path d="M9 12h2" />

            </svg>
        </>
    )
}

export function IconNormative({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shield-check" width={size} height={size} viewBox="0 0 24 24" stroke-width="1" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06" />
                <path d="M15 19l2 2l4 -4" />
            </svg>
        </>
    )
}

export function IconDollar({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart-dollar" width={size} height={size} viewBox="0 0 24 24" stroke-width="1" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M13 19l-1 1l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 0 1 8.785 4.444" />
                <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                <path d="M19 21v1m0 -8v1" />
            </svg>
        </>
    )
}

export function IconTime({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alarm" width={size} height={size} viewBox="0 0 24 24" stroke-width="1" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M12 10l0 3l2 0" />
                <path d="M7 4l-2.75 2" />
                <path d="M17 4l2.75 2" />
            </svg>
        </>
    )
}

export function IconSatisfied({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-heart" width={size} height={size} viewBox="0 0 24 24" stroke-width="1" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M21 12a9 9 0 1 0 -8.012 8.946" />
                <path d="M9 10h.01" />
                <path d="M15 10h.01" />
                <path d="M9.5 15a3.59 3.59 0 0 0 2.774 .99" />
                <path d="M18.994 21.5l2.518 -2.58a1.74 1.74 0 0 0 .004 -2.413a1.627 1.627 0 0 0 -2.346 -.005l-.168 .172l-.168 -.172a1.627 1.627 0 0 0 -2.346 -.004a1.74 1.74 0 0 0 -.004 2.412l2.51 2.59z" />
            </svg>
        </>
    )
}

export function IconLoveAdmin({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-heart" width={size} height={size} viewBox="0 0 24 24" stroke-width="1" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M21 12l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h6" />
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2c.39 0 .754 .112 1.061 .304" />
                <path d="M19 21.5l2.518 -2.58a1.74 1.74 0 0 0 0 -2.413a1.627 1.627 0 0 0 -2.346 0l-.168 .172l-.168 -.172a1.627 1.627 0 0 0 -2.346 0a1.74 1.74 0 0 0 0 2.412l2.51 2.59z" />
            </svg>
        </>
    )
}

export function IconWhatsApp({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-whatsapp" width={size} height={size} viewBox="0 0 24 24" stroke-width="1" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
            </svg>
        </>
    )
}


export function IconLink({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-link" width={size} height={size} viewBox="0 0 24 24" stroke-width="1" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
            </svg>
        </>
    )
}

export function IconMap({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width={size} height={size} viewBox="0 0 24 24" stroke-width="1" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
        </>
    )
}

export function IconEmail({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={size} height={size} viewBox="0 0 24 24" stroke-width="1" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
            </svg>
        </>
    )
}

export function IconCalendar({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-time" width={size} height={size} viewBox="0 0 24 24" stroke-width="1" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
                <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M15 3v4" />
                <path d="M7 3v4" />
                <path d="M3 11h16" />
                <path d="M18 16.496v1.504l1 1" />
            </svg>
        </>
    )
}

export function IconQuote({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-symlink" width={size} height={size} viewBox="0 0 24 24" stroke-width="1.5" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 21v-4a3 3 0 0 1 3 -3h5" />
                <path d="M9 17l3 -3l-3 -3" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M5 11v-6a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-9.5" />
            </svg>
        </>
    )
}

export function IconCheck({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-check" width={size} height={size} viewBox="0 0 24 24" stroke-width="1.5" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M9 12l2 2l4 -4" />
            </svg>

        </>
    )
}

export function IconSend({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-send-2" width={size} height={size} viewBox="0 0 24 24" stroke-width="1.5" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z" />
                <path d="M6.5 12h14.5" />
            </svg>

        </>
    )
}

