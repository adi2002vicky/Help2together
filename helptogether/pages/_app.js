import Design from '../components/design/Design';
import '../style/font.css'
function MyApp({ Component, pageProps }) {
  return (
    <Design>
      <Component {...pageProps} />
    </Design>
    )
}

export default MyApp
