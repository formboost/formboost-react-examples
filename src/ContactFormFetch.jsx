import { useState } from "react";

const ENDPOINT = "https://formboost.app/f/YOUR_ENDPOINT";

export default function ContactFormFetch() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error("Submission failed");

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <section>
      <h2>Contact form with fetch</h2>
      <form onSubmit={handleSubmit}>
        <p><input name="name" placeholder="Name" required /></p>
        <p><input name="email" type="email" placeholder="Email" required /></p>
        <p><textarea name="message" placeholder="Message" rows="5" required /></p>
        <input name="_honey" tabIndex="-1" autoComplete="off" hidden />
        <button disabled={status === "submitting"} type="submit">
          {status === "submitting" ? "Sending..." : "Send"}
        </button>
      </form>
      {status === "success" && <p>Thanks — your message was sent.</p>}
      {status === "error" && <p>Something went wrong. Please try again.</p>}
    </section>
  );
}
