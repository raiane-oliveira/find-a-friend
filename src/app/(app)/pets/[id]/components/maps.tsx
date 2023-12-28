import Image from 'next/image'
import Link from 'next/link'

export function Maps() {
  return (
    <div className="relative w-[35rem] mx-16.5 bg-secondary-500 h-72 rounded-2.5xl overflow-hidden">
      <Image
        src="https://s3-alpha-sig.figma.com/img/9aee/3bf3/ebe2b9037571ee5a0ab10ffe737ff8c3?Expires=1704672000&Signature=foKkEoJNO6f9b28WCTu4~XH6iuDX3EoFqDn97GQjfvjGfq4ehvaSf9Y8MJRdMgQ7YHZj01ZYuVS9yZm39xM4OSGFajehhPn1o12vCjL8ZUYQlBux59u-SIynKUW290XEPTwEpfE4rYrrCAf80MgTF7KbnJXFi~lESHkFCSHO0F4Xt2ATYIYLwmxIGpgDLgwADynbp0GRyCpspAsLEivSXsQmH8hU7TMjxxSS8S0FnkeHnt~3DE7r1qKjywkUNqSghQ5a-Z7gSE91W-TaQCrG7TQjqgDFW1iUswPKzX~qZJZDxe1VNp9p~ezleWBq1GYyzUpWegIu3Oa-okrwMaEERQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt=""
        width={559}
        height={227}
        className="w-full h-56 object-cover rounded-2.5xl"
      />

      <Link
        href="/"
        className="bg-secondary-500 text-lg/5 font-bold w-full block p-5 text-action text-center"
      >
        Ver rotas no Google Maps
      </Link>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="66"
        height="72"
        viewBox="0 0 66 72"
        fill="none"
        className="absolute z-20 top-16 right-48"
      >
        <path
          d="M65.7483 18.271V43.694C65.7483 53.7844 57.1435 61.9651 46.53 61.9651H44.5862L34.6596 71.3963C34.2708 71.7659 33.733 72 33.1369 72C32.5861 72 32.0872 71.809 31.7049 71.4887L31.5365 71.3285L31.53 71.3224L21.6876 61.9651H19.7373C9.1303 61.9651 0.525513 53.7844 0.525513 43.694V18.271C0.525513 8.1807 9.13031 0 19.7437 0H46.53C57.1435 0 65.7483 8.1807 65.7483 18.271Z"
          fill="#0D3B66"
        />
        <path
          d="M37.6233 46.3771C35.3019 48.8777 31.217 48.9016 28.8647 46.4284C27.8141 45.3238 28.6301 43.5542 30.1944 43.545L36.2581 43.5095C37.8224 43.5003 38.6602 45.2602 37.6233 46.3771Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M43.3342 43.3057C42.11 44.2366 40.381 43.929 39.3446 42.8056L36.0518 39.236C34.7247 37.7974 32.3952 37.7974 31.0682 39.236L27.5044 43.0992C26.4941 44.1945 24.8215 44.5193 23.5946 43.6545C19.5219 40.7834 16.8759 36.1386 16.8759 30.8971C16.8759 22.1788 24.1962 15.1113 33.2263 15.1113C42.2563 15.1113 49.5767 22.1788 49.5767 30.8971C49.5767 35.9314 47.1357 40.4152 43.3342 43.3057ZM31.3805 36.1965C32.3621 37.3179 34.0905 37.3179 35.0721 36.1965L38.1625 32.6657C39.1545 31.5323 38.643 29.7385 37.2071 29.3156C34.6071 28.5498 31.8455 28.5497 29.2455 29.3156C27.8096 29.7385 27.2981 31.5323 28.2901 32.6657L31.3805 36.1965ZM28.3818 25.1853C28.3818 26.4944 27.2973 27.5557 25.9595 27.5557C24.6218 27.5557 23.5373 26.4944 23.5373 25.1853C23.5373 23.8762 24.6218 22.8149 25.9595 22.8149C27.2973 22.8149 28.3818 23.8762 28.3818 25.1853ZM40.4932 27.5557C41.8309 27.5557 42.9154 26.4944 42.9154 25.1853C42.9154 23.8762 41.8309 22.8149 40.4932 22.8149C39.1554 22.8149 38.0709 23.8762 38.0709 25.1853C38.0709 26.4944 39.1554 27.5557 40.4932 27.5557Z"
          fill="white"
        />
      </svg>
    </div>
  )
}