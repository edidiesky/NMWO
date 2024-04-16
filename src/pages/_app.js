
import SmoothScroll from '@/constants/utils/SmoothScroll';
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
export default function App({ Component, pageProps, router }) {
    return (
      <SmoothScroll>
        <AnimatePresence mode="wait">
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </SmoothScroll>
    );
}
