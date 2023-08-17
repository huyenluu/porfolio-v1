import { IconContext } from 'react-icons';
import Link from 'next/link';

export function NavIcon({ iconComponent, className, href, ariaLabel }) {
    return (
        <IconContext.Provider
            value={{
                className: `${className} cursor-pointer text-white hover:text-green transition-colors duration-200 ease-in-out`,
                size: '1.3rem',
            }}
        >
            {typeof href === 'string' ? (
                <li className="list-none">
                    <Link href={href} target="_blank" aria-label={ariaLabel}>
                        {iconComponent}
                    </Link>
                </li>
            ) : (
                <li className="list-none">{iconComponent}</li>
            )}
        </IconContext.Provider>
    );
}
