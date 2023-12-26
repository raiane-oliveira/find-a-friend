import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

interface SearchProps {
  state: string
  city: string
  className?: string
}

export function Search({ state, city, className }: SearchProps) {
  return (
    <Link
      href={!city ? '#' : `/location?city=${city}&state=${state}`}
      className={twMerge(
        `bg-action transition-colors w-16.5 h-16.5 grid rounded-2.5xl place-items-center ${
          !city ? 'cursor-not-allowed' : 'hover:bg-action/80'
        }`,
        className,
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="fill-secondary-500 stroke-secondary-500"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
      >
        <path d="M23.9295 23.9403C24.4275 23.4481 24.4647 22.6741 24.0411 22.1399L24.0275 22.0733L23.9179 21.9662L20.2326 18.3631L20.175 18.2755L20.1466 18.2323L20.11 18.1959C19.8528 17.9398 19.5036 17.7976 19.1414 17.7976C18.7831 17.7976 18.4375 17.9368 18.1811 18.1878C15.1986 20.9181 10.6031 21.0654 7.44333 18.5291C4.28593 15.9946 3.54546 11.5708 5.70336 8.18822C7.86438 4.80075 12.2685 3.49879 15.9951 5.1606C19.7178 6.82062 21.5922 10.9144 20.3954 14.7216L20.3953 14.722C20.2486 15.1904 20.3696 15.6978 20.7073 16.0523C21.0438 16.4055 21.5434 16.5533 22.018 16.4464C22.4927 16.3396 22.88 15.9915 23.0268 15.525C24.6282 10.4675 22.2066 5.0338 17.3479 2.73417C12.493 0.436364 6.6454 1.94847 3.58708 6.30522C0.525507 10.6666 1.18477 16.5612 5.13205 20.1717C8.96761 23.68 14.7896 24.01 19.0044 21.0164L21.9969 23.9422L21.9977 23.943C22.5323 24.4634 23.3922 24.4634 23.9268 23.943L23.9295 23.9403Z" />
      </svg>
    </Link>
  )
}
