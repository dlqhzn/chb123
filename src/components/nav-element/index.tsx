import Link from 'next/link';
import Text from '../Text';
import { cn } from '../../utils';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

type NavElementProps = {
    label: string;
    href: string;
    as?: string;
    scroll?: boolean;
    chipLabel?: string;
    disabled?: boolean;
    navigationStarts?: () => void;
};

const NavElement = ({
    label,
    href,
    as,
    scroll,
    disabled,
    navigationStarts = () => {},
}: NavElementProps) => {
    const router = useRouter();
    const isActive = href === router.asPath || (as && as === router.asPath);
    const divRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (divRef.current) {
            divRef.current.className = cn(
                'h-0.5 w-1/4 transition-all duration-300 ease-out',
            );
        }
    }, [isActive]);

    return (
        <Link
        href={href}
        as={as}
        scroll={scroll}
        passHref
        className={cn(
            'group flex flex-col justify-between',
            disabled &&
                'pointer-events-none cursor-not-allowed opacity-50',
        )}
        onClick={() => navigationStarts()}
    >
        <div className="items-start mt-8 flex flex-col h-8"> 
            <Text variant="nav-heading" className={isActive ? 'text-green-400' : 'group-hover:text-green-400'}>{label}</Text>
        </div>
        <div ref={divRef} />
    </Link>
    );
};

export default NavElement;
