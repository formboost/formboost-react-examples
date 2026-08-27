import ContactFormFetch from "./ContactFormFetch.jsx";
import ContactFormAxios from "./ContactFormAxios.jsx";

export default function App() {
  return (
    <main style={{ maxWidth: 720, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>Formboost React Examples</h1>
      <p>
        Examples using the Formboost endpoint at https://formboost.app/f/YOUR_ENDPOINT.
      </p>
      <ContactFormFetch />
      <hr style={{ margin: "40px 0" }} />
      <ContactFormAxios />
    </main>
  );
}
