interface LogoProps{
    theme: 'dark'| 'light';
}

export default function Logo(props: LogoProps) {
    const {theme} = props;
    return (
        <>
            <a href="/" className="logo logo-light">
                {/* <span className="logo-lg">
                    <img src="/images/logo-sm.png" alt="" height="22" />
                </span> */}
                <span className="logo-lg">
                    <img src={`/images/logo-${theme}.png`} alt="" height="17" />
                </span>
            </a>
        </>
    )
}
