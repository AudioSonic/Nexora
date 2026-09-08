import "./SkillLogo.css";

type SkillLogoProps = {
    name: string;
    src: string | null;
    alt: string;
    className?: string;
};

function SkillLogo({ name, src, alt, className = "" }: SkillLogoProps) {
    const firstLetter = name.trim().charAt(0).toUpperCase();

    if (src) {
        return <img className={`skill-logo ${className}`} src={src} alt={alt} />;
    }

    return (
        <span className={`skill-logo skill-logo-fallback ${className}`} aria-label={alt}>
            {firstLetter}
        </span>
    );
}

export default SkillLogo;
