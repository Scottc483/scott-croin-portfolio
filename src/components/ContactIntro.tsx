import React from 'react'
import Link from 'next/link'
const ContactIntro = () => {
  return (
    <div className="flex flex-col py-16 max-w-5xl p-16">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 offWhite">
      Get In Touch
    </h2>
    <p className="text-lg mb-8 offWhite">
      Have a project in mind or want to collaborate? I&apos;d love to hear from
      you. Feel free to reach out using the contact form or through the
      provided channels below. Let&apos;s connect and bring your ideas to life.
    </p>
    <div>
    <Link href="/contact"
      className="px-6 py-3 bg-offWhite darkGrey rounded-md font-semibold uppercase">
        Contact Me
    </Link>
    </div>
  </div>
  )
}

export default ContactIntro