import { student } from '../data/labs.js'

export default function Profile() {
  const rows = [
    ['Student Name', student.name],
    ['Roll Number', student.rollNo],
    ['Branch', student.branch],
    ['Section', student.section],
    ['Laboratory Subject', student.subject],
  ]

  return (
    <section id="profile" className="section section--white">
      <div className="container">
        <h2 className="section__title">Profile</h2>
        <div className="profile">
          <dl className="profile__list">
            {rows.map(([k, v]) => (
              <div key={k} className="profile__row">
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <p className="profile__about">
            This record collects my weekly work for the {student.subject}. Each week's
            submission is available as a PDF once it has been added to the website.
          </p>
        </div>
      </div>
    </section>
  )
}
