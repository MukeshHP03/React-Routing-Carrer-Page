import { Form } from "react-router-dom";

export default function Contact() {
    return (
      <div className="contact">
        <h3>Contact Us</h3>
        <Form action="/help/action">
            <label htmlFor="">
                <span>Your Email:</span>
                <input type="email" name='email' required />
            </label>
            <label htmlFor="">
                <span>Your Message:</span>
                <textarea name="message" required />
            </label>
            <button className="submit">Submit</button>
        </Form>
      </div>
    )
  }
export const contactAction = async ({ request }) => {
  console.log(request);
  const data = await request.formData();
  const submission = {
    email: data.get('email'),
    message: data.get('message'),
  }
  console.log(submission);
  // return submission
}