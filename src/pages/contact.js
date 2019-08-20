import React from "react"
import Layout from "../components/Layout"
import { PageHeader, PageSubHeader } from "../components/Headers"
import styles from "../css/contactForm.module.css"

const contact = () => {
  console.log(styles)
  return (
    <Layout>
      <PageHeader>Contact Me</PageHeader>
      <PageSubHeader>
        Reach out to me if you have any questions, or just want to chat!
      </PageSubHeader>
      <div className={styles.center}>
        <form name="contact" action="/thanks" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <div className={styles.formItem}>
            <label htmlFor="name" className={styles.labels}>
              Name
            </label>
            <input type="text" name="name" className={styles.inputs} required />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="email" className={styles.labels}>
              Email
            </label>
            <input type="text" name="name" className={styles.inputs} required />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="message" className={styles.labels}>
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className={styles.textArea}
            ></textarea>
          </div>
          <div className={styles.formItem}>
            <input type="submit" value="Submit" className={styles.inputs} />
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default contact
