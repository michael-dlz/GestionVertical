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

export function IconMoney({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-dollar" width={size} height={size} viewBox="0 0 24 24" stroke-width="1" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
                <path d="M12 3v3m0 12v3" />
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




export function IconUS({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width={size} height={size} viewBox="0 0 24 24" stroke-width="1" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
            </svg>

        </>
    )
}

export function IconServices({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-packages" width={size} height={size} viewBox="0 0 24 24" stroke-width="1" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 16.5l-5 -3l5 -3l5 3v5.5l-5 3z" />
                <path d="M2 13.5v5.5l5 3" />
                <path d="M7 16.545l5 -3.03" />
                <path d="M17 16.5l-5 -3l5 -3l5 3v5.5l-5 3z" />
                <path d="M12 19l5 3" />
                <path d="M17 16.5l5 -3" />
                <path d="M12 13.5v-5.5l-5 -3l5 -3l5 3v5.5" />
                <path d="M7 5.03v5.455" />
                <path d="M12 8l5 -3" />
            </svg>

        </>
    )
}

export function IconCV({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-cv" width={size} height={size} viewBox="0 0 24 24" stroke-width="1" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                <path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" />
                <path d="M13 11l1.5 6l1.5 -6" />
            </svg>

        </>
    )
}

export function IconWork({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-briefcase" width={size} height={size} viewBox="0 0 24 24" stroke-width="1" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                <path d="M12 12l0 .01" />
                <path d="M3 13a20 20 0 0 0 18 0" />
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
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-check" width={size} height={size} viewBox="0 0 24 24" stroke-width="1" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round">
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
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-send-2" width={size} height={size} viewBox="0 0 24 24" stroke-width="1" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z" />
                <path d="M6.5 12h14.5" />
            </svg>

        </>
    )
}

export function IconHamburger({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>

            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" width={size} height={size} stroke={stroke} xmlns="http://www.w3.org/2000/svg">
                <title className="text-white text-2xl">Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>

        </>
    )
}



export function IconQuoteMaintenance({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={stroke} stroke-linecap="round" stroke-linejoin="round" width={size} height={size} stroke-width="1">
                <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
                <path d="M15.5 9.422c.312 .18 .503 .515 .5 .876v3.277c0 .364 -.197 .7 -.515 .877l-3 1.922a1 1 0 0 1 -.97 0l-3 -1.922a1 1 0 0 1 -.515 -.876v-3.278c0 -.364 .197 -.7 .514 -.877l3 -1.79c.311 -.174 .69 -.174 1 0l3 1.79h-.014z"></path>
            </svg>

        </>
    )
}

/* ----------- */


export function IconQuoteImplementation({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={stroke} stroke-linecap="round" stroke-linejoin="round" width={size} height={size} stroke-width="1"> <path d="M14 3v4a1 1 0 0 0 1 1h4"></path> <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path> <path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"></path> <path d="M12 17v1m0 -8v1"></path> </svg>

        </>
    )
}

export function IconPayment({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={stroke} stroke-linecap="round" stroke-linejoin="round" width={size} height={size} stroke-width="1">
                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                <path d="M12 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v3.5"></path>
                <path d="M9 9h1"></path>
                <path d="M9 13h6"></path>
                <path d="M9 17h3"></path>
                <path d="M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5"></path>
            </svg>

        </>
    )
}

export function IconReport({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={stroke} stroke-linecap="round" stroke-linejoin="round" width={size} height={size} stroke-width="1">
                <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
                <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 17v-5"></path>
                <path d="M12 17v-1"></path>
                <path d="M15 17v-3"></path>
            </svg>

        </>
    )
}

export function IconManagement({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={stroke} stroke-linecap="round" stroke-linejoin="round" width={size} height={size} stroke-width="1">
                <path d="M3 21v-13l9 -4l9 4v13"></path>
                <path d="M13 13h4v8h-10v-6h6"></path>
                <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3"></path>
            </svg>

        </>
    )
}

export function IconAttention({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={stroke} stroke-linecap="round" stroke-linejoin="round" width={size} height={size} stroke-width="1">
                <path d="M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5"></path>
                <path d="M11.5 19h-6.5a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5"></path>
                <path d="M3 7l9 6l9 -6"></path>
            </svg>

        </>
    )
}


/* */

export function IconLegal({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>

            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" stroke-width="1" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-license"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" /><path d="M9 7l4 0" /><path d="M9 11l4 0" /></svg>

        </>
    )
}

export function IconEthics({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>


            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" stroke-width="1" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-social"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M12 14m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M12 7l0 4" /><path d="M6.7 17.8l2.8 -2" /><path d="M17.3 17.8l-2.8 -2" /></svg>

        </>
    )
}

export function IconPrevention({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>


            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" stroke-width="1" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-ban"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M5.7 5.7l12.6 12.6" /></svg>

        </>
    )
}

export function IconCorruption({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>


            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" stroke-width="1" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-weight"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.835 9h10.33a1 1 0 0 1 .984 .821l1.637 9a1 1 0 0 1 -.984 1.179h-13.604a1 1 0 0 1 -.984 -1.179l1.637 -9a1 1 0 0 1 .984 -.821z" /></svg>

        </>
    )
}

export function IconProtect({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>


            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" stroke-width="1" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shield-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06" /><path d="M15 19l2 2l4 -4" /></svg>

        </>
    )
}

export function IconFinance({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>


            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" stroke-width="1" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-coins"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 14c0 1.657 2.686 3 6 3s6 -1.343 6 -3s-2.686 -3 -6 -3s-6 1.343 -6 3z" /><path d="M9 14v4c0 1.656 2.686 3 6 3s6 -1.344 6 -3v-4" /><path d="M3 6c0 1.072 1.144 2.062 3 2.598s4.144 .536 6 0c1.856 -.536 3 -1.526 3 -2.598c0 -1.072 -1.144 -2.062 -3 -2.598s-4.144 -.536 -6 0c-1.856 .536 -3 1.526 -3 2.598z" /><path d="M3 6v10c0 .888 .772 1.45 2 2" /><path d="M3 11c0 .888 .772 1.45 2 2" /></svg>

        </>
    )
}

export function IconCapacitate({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>


            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" stroke-width="1" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-databricks"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 17l9 5l9 -5v-3l-9 5l-9 -5v-3l9 5l9 -5v-3l-9 5l-9 -5l9 -5l5.418 3.01" /></svg>

        </>
    )
}

export function IconMonitoring({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>

            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" stroke-width="1" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-heart-rate-monitor"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" /><path d="M7 20h10" /><path d="M9 16v4" /><path d="M15 16v4" /><path d="M7 10h2l2 3l2 -6l1 3h3" /></svg>

        </>
    )
}

export function IconBlog({ stroke = "#FFFFFF", size = 16 }: IconProps) {
    return (
        <>

            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-article"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M7 8h10" /><path d="M7 12h10" /><path d="M7 16h10" /></svg>
        </>
    )
}

